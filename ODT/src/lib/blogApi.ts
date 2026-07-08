import { API_BASE } from '../data/apiEndpoints';

const WP_POSTS_API = `${API_BASE.wordpress}/posts`;

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  link: string;
};

export type BlogPostDetail = BlogPost & {
  contentHtml: string;
};

type WpRendered = { rendered: string };

type WpAuthor = { name: string };

type WpTerm = { name: string; taxonomy: string };

type WpFeaturedMedia = { source_url: string };

type WpPost = {
  id: number;
  slug: string;
  date: string;
  link: string;
  type: string;
  status: string;
  title: WpRendered;
  excerpt: WpRendered;
  content: WpRendered;
  _embedded?: {
    author?: WpAuthor[];
    'wp:featuredmedia'?: WpFeaturedMedia[];
    'wp:term'?: WpTerm[][];
  };
};

const FALLBACK_IMAGE =
  'https://orangedatatech.com/wp-content/uploads/2025/10/banner_uwp_banner_thumb.png';

function decodeHtml(html: string) {
  if (typeof document === 'undefined') {
    return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  }
  const el = document.createElement('textarea');
  el.innerHTML = html;
  const decoded = el.value;
  const doc = new DOMParser().parseFromString(decoded, 'text/html');
  return (doc.body.textContent ?? '').replace(/\s+/g, ' ').trim();
}

function stripShortcodes(text: string) {
  return text.replace(/\[[^[\]]*]/g, ' ');
}

function sanitizeText(text: string) {
  return stripShortcodes(text).replace(/\s+/g, ' ').trim();
}

function buildExcerpt(post: WpPost) {
  const excerpt = sanitizeText(decodeHtml(post.excerpt.rendered));
  if (excerpt) return excerpt;

  const fromContent = sanitizeText(decodeHtml(post.content.rendered));
  if (!fromContent) return '';
  return fromContent.length > 180 ? `${fromContent.slice(0, 177).trimEnd()}...` : fromContent;
}

function extractFirstImage(html: string) {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] ?? null;
}

function normalizeImageUrl(url: string) {
  return url.replace(/-\d+x\d+(?=\.(jpg|jpeg|png|webp|gif)$)/i, '');
}

function getFeaturedImage(post: WpPost) {
  const featured = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  if (featured) return normalizeImageUrl(featured);

  const fromContent = extractFirstImage(post.content.rendered);
  if (fromContent) return normalizeImageUrl(fromContent);

  return FALLBACK_IMAGE;
}

function getCategory(post: WpPost) {
  const terms = post._embedded?.['wp:term']?.flat() ?? [];
  const category = terms.find((term) => term.taxonomy === 'category');
  return category?.name ?? 'Blog';
}

function getAuthor(post: WpPost) {
  return post._embedded?.author?.[0]?.name ?? 'Orange Data Tech';
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

function mapWpPost(post: WpPost): BlogPost {
  return {
    id: post.id,
    slug: post.slug,
    title: decodeHtml(post.title.rendered),
    excerpt: buildExcerpt(post),
    author: getAuthor(post),
    date: formatDate(post.date),
    category: getCategory(post),
    image: getFeaturedImage(post),
    link: post.link,
  };
}

function mapWpPostDetail(post: WpPost): BlogPostDetail {
  return {
    ...mapWpPost(post),
    contentHtml: processContentHtml(post.content.rendered),
  };
}

function processContentHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/\[[^[\]]*]/g, '')
    .replace(/<img /gi, '<img loading="lazy" class="blog-content-img" ');
}

type FetchOptions = {
  /** Bypass browser/CDN cache so new WordPress posts appear immediately */
  bustCache?: boolean;
};

async function fetchWpPosts(searchParams: Record<string, string>, options?: FetchOptions) {
  const url = new URL(WP_POSTS_API);
  Object.entries(searchParams).forEach(([key, value]) => url.searchParams.set(key, value));
  url.searchParams.set('_embed', 'author,wp:featuredmedia,wp:term');
  if (options?.bustCache) {
    url.searchParams.set('_', String(Date.now()));
  }

  const response = await fetch(url.toString(), {
    cache: 'no-store',
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Failed to load blog posts (${response.status})`);
  }

  return (await response.json()) as WpPost[];
}

export async function fetchBlogPosts(options?: FetchOptions): Promise<BlogPost[]> {
  const data = await fetchWpPosts(
    { per_page: '100', orderby: 'date', order: 'desc' },
    options,
  );

  return data
    .filter((post) => post.type === 'post' && post.status === 'publish')
    .map(mapWpPost);
}

export async function fetchBlogPostBySlug(slug: string, options?: FetchOptions): Promise<BlogPostDetail | null> {
  const data = await fetchWpPosts({ slug }, options);
  const post = data.find((item) => item.type === 'post' && item.status === 'publish');

  return post ? mapWpPostDetail(post) : null;
}
