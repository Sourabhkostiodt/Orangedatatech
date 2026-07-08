import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND } from '../constants/brand';
import { fetchBlogPostBySlug, type BlogPostDetail } from '../lib/blogApi';

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      navigate('/blog', { replace: true });
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchBlogPostBySlug(slug, { bustCache: true })
      .then((data) => {
        if (cancelled) return;
        if (!data) {
          navigate('/blog', { replace: true });
          return;
        }
        setPost(data);
        globalThis.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unable to load this article.');
          setPost(null);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug, navigate]);

  return (
    <div className="min-h-screen bg-theme-subtle transition-colors duration-300">
      <Navbar />
      <main className="pt-[76px]">
        <section className="relative h-[130px] sm:h-[180px] overflow-hidden">
          <img
            src={post?.image ?? BRAND.images.blogBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06021D]/92 via-[#06021D]/78 to-[#06021D]/60" />
          <div className="container-fort relative h-full flex flex-col justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs font-semibold uppercase tracking-wider mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
            {loading ? (
              <div className="space-y-3 animate-pulse max-w-3xl">
                <div className="h-4 w-32 rounded bg-white/20" />
                <div className="h-8 w-full rounded bg-white/20" />
              </div>
            ) : post ? (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                <p className="text-fort-purple-light text-[11px] font-bold uppercase tracking-[0.2em] mb-2">
                  {post.category}
                </p>
                <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight max-w-4xl">
                  {post.title}
                </h1>
              </motion.div>
            ) : null}
          </div>
        </section>

        <section className="container-fort py-10 lg:py-14">
          {loading && (
            <div className="max-w-3xl mx-auto animate-pulse space-y-4">
              <div className="h-4 w-64 rounded bg-theme-muted" />
              <div className="h-4 w-full rounded bg-theme-muted" />
              <div className="h-4 w-full rounded bg-theme-muted" />
              <div className="h-4 w-5/6 rounded bg-theme-muted" />
              <div className="h-4 w-full rounded bg-theme-muted" />
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-theme bg-theme-page p-8 text-center max-w-xl mx-auto">
              <p className="text-theme-heading font-semibold mb-2">Could not load article</p>
              <p className="text-theme-muted text-sm mb-4">{error}</p>
              <Link to="/blog" className="btn-fort text-sm px-5 py-2.5 inline-flex">
                Back to Blogs
              </Link>
            </div>
          )}

          {!loading && post && (
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex flex-wrap items-center gap-4 text-theme-subtle text-xs mb-8 pb-6 border-b border-theme">
                <span className="inline-flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-fort-purple" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-fort-purple" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-fort-purple" />
                  {post.category}
                </span>
              </div>

              <div
                className="blog-prose"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />

              <div className="mt-12 pt-8 border-t border-theme">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-fort-purple text-sm font-semibold hover:gap-3 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to all blogs
                </Link>
              </div>
            </motion.article>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
