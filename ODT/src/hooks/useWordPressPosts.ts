import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchBlogPosts, type BlogPost } from '../lib/blogApi';
import { getCachedBlogPosts, setCachedBlogPosts } from '../lib/blogCache';
import {
  notifyBlogSync,
  WP_BLOG_SYNC_CHANNEL,
  WP_BLOG_SYNC_INTERVAL_MS,
} from '../lib/blogSync';

type UseWordPressPostsOptions = {
  /** Poll WordPress every minute for newly published posts */
  poll?: boolean;
  /** Only return the latest N posts */
  limit?: number;
};

export function useWordPressPosts(options: UseWordPressPostsOptions = {}) {
  const { poll = false, limit } = options;
  const cached = getCachedBlogPosts();
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const data = cached ?? [];
    return limit ? data.slice(0, limit) : data;
  });
  const [loading, setLoading] = useState(!cached?.length);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSyncedAt, setLastSyncedAt] = useState<Date | null>(null);
  const [hasNewPosts, setHasNewPosts] = useState(false);
  const latestIdRef = useRef<number | null>(null);

  const applyPosts = useCallback(
    (data: BlogPost[], silent: boolean) => {
      const sliced = limit ? data.slice(0, limit) : data;
      const newestId = sliced[0]?.id ?? null;

      if (silent && latestIdRef.current !== null && newestId !== null && newestId !== latestIdRef.current) {
        setHasNewPosts(true);
      }

      latestIdRef.current = newestId;
      setPosts(sliced);
      setCachedBlogPosts(data);
      setLastSyncedAt(new Date());
      setError(null);
    },
    [limit],
  );

  const sync = useCallback(
    async (silent = false) => {
      const hasVisiblePosts = Boolean(getCachedBlogPosts()?.length);
      if (silent) setSyncing(true);
      else if (!hasVisiblePosts) setLoading(true);

      try {
        const data = await fetchBlogPosts({ bustCache: silent });
        applyPosts(data, silent);
        if (silent) notifyBlogSync();
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Unable to load blog posts.');
        if (!silent && !hasVisiblePosts) setPosts([]);
      } finally {
        setLoading(false);
        setSyncing(false);
      }
    },
    [applyPosts],
  );

  const refresh = useCallback(async () => {
    setHasNewPosts(false);
    await sync(false);
  }, [sync]);

  useEffect(() => {
    void sync(!getCachedBlogPosts()?.length ? false : true);

    const onFocus = () => void sync(true);
    globalThis.addEventListener('focus', onFocus);

    let intervalId: ReturnType<typeof setInterval> | undefined;
    if (poll) {
      intervalId = setInterval(() => void sync(true), WP_BLOG_SYNC_INTERVAL_MS);
    }

    let channel: BroadcastChannel | undefined;
    try {
      channel = new BroadcastChannel(WP_BLOG_SYNC_CHANNEL);
      channel.onmessage = () => void sync(true);
    } catch {
      // ignore
    }

    return () => {
      globalThis.removeEventListener('focus', onFocus);
      if (intervalId) clearInterval(intervalId);
      channel?.close();
    };
  }, [poll, sync]);

  return {
    posts,
    loading,
    syncing,
    error,
    refresh,
  };
}
