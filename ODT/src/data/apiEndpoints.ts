export type ApiEndpoint = {
  id: string;
  name: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  description: string;
  usedBy: string[];
  sampleUrl?: string;
};

export const API_BASE = {
  wordpress: 'https://orangedatatech.com/wp-json/wp/v2',
  wpMedia: 'https://orangedatatech.com/wp-content/uploads',
} as const;

const WP_EMBED = '_embed=author,wp:featuredmedia,wp:term';

export const API_ENDPOINTS: ApiEndpoint[] = [
  {
    id: 'wp-posts-list',
    name: 'WordPress — All Blog Posts',
    method: 'GET',
    url: `${API_BASE.wordpress}/posts?per_page=100&${WP_EMBED}&orderby=date&order=desc`,
    sampleUrl: `${API_BASE.wordpress}/posts?per_page=5&${WP_EMBED}&orderby=date&order=desc`,
    description: 'Fetches published blog posts for the /blog listing page. Auto-syncs every 60s, on tab focus, and with cache-busting.',
    usedBy: ['BlogPage', 'BlogSection', 'useWordPressPosts', 'blogApi.fetchBlogPosts'],
  },
  {
    id: 'wp-post-by-slug',
    name: 'WordPress — Single Blog Post',
    method: 'GET',
    url: `${API_BASE.wordpress}/posts?slug={slug}&${WP_EMBED}`,
    sampleUrl: `${API_BASE.wordpress}/posts?slug=power-bi-and-amazon-quicksight-a-detailed-comparison&${WP_EMBED}`,
    description: 'Fetches one blog post by slug for /blog/:slug detail pages.',
    usedBy: ['BlogPostPage', 'blogApi.fetchBlogPostBySlug'],
  },
  {
    id: 'wp-posts-base',
    name: 'WordPress — Posts API Base',
    method: 'GET',
    url: `${API_BASE.wordpress}/posts`,
    description: 'Base WordPress REST API endpoint for posts.',
    usedBy: ['blogApi.ts'],
  },
  {
    id: 'wp-media-base',
    name: 'WordPress — Media CDN Base',
    method: 'GET',
    url: API_BASE.wpMedia,
    description: 'Base URL for team photos, logos, and blog images hosted on WordPress.',
    usedBy: ['teamMembers.ts', 'brand.ts', 'blogApi.ts'],
  },
];

export const EXTERNAL_ASSET_URLS = [
  {
    label: 'Logo (dark)',
    url: 'https://orangedatatech.com/wp-content/uploads/2026/05/OrangeDataTech_Logo2.png',
    usedBy: 'Logo component, Footer',
  },
  {
    label: 'Logo (light)',
    url: 'https://orangedatatech.com/wp-content/uploads/2026/05/OrangeDataTech_Logo1.png',
    usedBy: 'Logo component (light mode)',
  },
  {
    label: 'Unsplash images',
    url: 'https://images.unsplash.com/...',
    usedBy: 'Home page, About, Contact hero sections (brand.ts)',
  },
];

export async function testApiEndpoint(url: string, method: ApiEndpoint['method'] = 'GET') {
  const started = performance.now();
  const response = await fetch(url, { method });
  const elapsed = Math.round(performance.now() - started);

  let body: unknown;
  const contentType = response.headers.get('content-type') ?? '';

  if (contentType.includes('application/json')) {
    body = await response.json();
  } else {
    body = await response.text();
  }

  return {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
    elapsedMs: elapsed,
    contentType,
    body,
  };
}
