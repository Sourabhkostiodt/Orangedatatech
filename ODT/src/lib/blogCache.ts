import type { BlogPost } from './blogApi';

let cachedPosts: BlogPost[] | null = null;
let cachedAt = 0;

/** Show cached posts instantly when navigating back to /blog */
export const BLOG_CACHE_TTL_MS = 30_000;

export function getCachedBlogPosts(): BlogPost[] | null {
  if (!cachedPosts || Date.now() - cachedAt > BLOG_CACHE_TTL_MS) return null;
  return cachedPosts;
}

export function setCachedBlogPosts(posts: BlogPost[]) {
  cachedPosts = posts;
  cachedAt = Date.now();
}

export function clearBlogCache() {
  cachedPosts = null;
  cachedAt = 0;
}
