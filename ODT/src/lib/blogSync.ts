/** How often the blog listing polls WordPress for new posts (ms). */
export const WP_BLOG_SYNC_INTERVAL_MS = 60_000;

export const WP_BLOG_SYNC_CHANNEL = 'odt-wp-blog-sync';

export function notifyBlogSync() {
  try {
    const channel = new BroadcastChannel(WP_BLOG_SYNC_CHANNEL);
    channel.postMessage({ type: 'sync', at: Date.now() });
    channel.close();
  } catch {
    // BroadcastChannel not supported — ignore
  }
}

export function formatSyncTime(date: Date | null) {
  if (!date) return 'Not synced yet';
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 10) return 'Just now';
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  return date.toLocaleTimeString();
}
