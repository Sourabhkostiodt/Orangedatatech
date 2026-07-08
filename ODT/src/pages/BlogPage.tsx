import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogSyncBar from '../components/BlogSyncBar';
import { BRAND } from '../constants/brand';
import { useWordPressPosts } from '../hooks/useWordPressPosts';
import type { BlogPost } from '../lib/blogApi';

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="mb-4 overflow-hidden rounded-md card-fort">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[170px] object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <h2 className="text-theme-heading text-xl sm:text-[22px] leading-tight font-bold mb-2 group-hover:text-fort-purple transition-colors">
          {post.title}
        </h2>
        <p className="text-theme-subtle text-[12px] mb-2">
          by {post.author} | {post.date} | {post.category}
        </p>
        <p className="text-theme-muted text-[13px] leading-relaxed mb-3 line-clamp-3">{post.excerpt}</p>
        <span className="text-fort-purple text-xs font-semibold group-hover:text-fort-purple-dark transition-colors">
          Read More
        </span>
      </Link>
    </article>
  );
}

function BlogSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mb-4 h-[170px] rounded-md bg-theme-muted border border-theme" />
      <div className="h-6 w-4/5 rounded bg-theme-muted mb-3" />
      <div className="h-3 w-2/3 rounded bg-theme-muted mb-3" />
      <div className="space-y-2 mb-3">
        <div className="h-3 w-full rounded bg-theme-muted" />
        <div className="h-3 w-full rounded bg-theme-muted" />
        <div className="h-3 w-3/4 rounded bg-theme-muted" />
      </div>
      <div className="h-3 w-16 rounded bg-theme-muted" />
    </div>
  );
}

export default function BlogPage() {
  const { posts, loading, syncing, error, refresh } = useWordPressPosts({
    poll: true,
  });

  return (
    <div className="min-h-screen bg-theme-subtle transition-colors duration-300">
      <Navbar />
      <main className="pt-[76px]">
        <section className="relative h-[130px] sm:h-[170px] overflow-hidden">
          <img src={BRAND.images.blogBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06021D]/85 via-[#06021D]/70 to-[#06021D]/55" />
          <div className="container-fort relative h-full flex items-center">
            <div>
              <h1 className="text-white text-3xl font-extrabold">Blogs</h1>
              <p className="text-white/60 text-sm mt-2">Synced live from WordPress — publish a post and it appears here</p>
            </div>
          </div>
        </section>

        <section className="container-fort py-10 lg:py-14">
          <BlogSyncBar syncing={syncing} onRefresh={() => void refresh()} />

          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              {Array.from({ length: 6 }).map((_, i) => (
                <BlogSkeleton key={i} />
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-theme bg-theme-page p-8 text-center max-w-xl mx-auto">
              <p className="text-theme-heading font-semibold mb-2">Could not sync blog posts</p>
              <p className="text-theme-muted text-sm mb-4">{error}</p>
              <button type="button" onClick={() => void refresh()} className="btn-fort text-sm px-5 py-2.5">
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <p className="text-theme-muted text-center py-16">No blog posts published on WordPress yet.</p>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>

        <section className="border-t border-theme bg-theme-subtle-alt transition-colors duration-300">
          <div className="container-fort py-6 flex items-center justify-between">
            <div className="text-xs text-theme-faint">FOLLOW US</div>
            <div className="text-xs text-theme-faint">Privacy Policy &nbsp; Terms of Service</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
