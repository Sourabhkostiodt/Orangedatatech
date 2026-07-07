import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BRAND } from '../constants/brand';

const posts = [
  { category: 'Main Focus', title: 'How to choose antivirus protection for your needs', date: 'Jan 5, 2026', image: BRAND.images.blog1 },
  { category: 'Best Practices', title: 'Identifying and stopping ransomware early', date: 'Jan 5, 2026', image: BRAND.images.blog2 },
  { category: 'Technology', title: 'Balancing convenience and security online', date: 'Jan 5, 2026', image: BRAND.images.blog3 },
];

export default function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="blog" className="relative py-24 lg:py-28 overflow-hidden">
      {/* Earth from space background */}
      <div className="absolute inset-0">
        <img
          src={BRAND.images.blogBg}
          alt=""
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#06021D]/20 via-[#06021D]/5 to-[#06021D]/35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_35%,transparent_0%,rgba(6,2,29,0.35)_100%)]" />

      <div className="container-fort relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 lg:mb-14">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple-light mb-3 block">Explore our cyber edge</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.08 }} className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white leading-tight">
              Latest insights &amp; industry news
            </motion.h2>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group glass-dark rounded-[20px] overflow-hidden hover:border-fort-purple/40 transition-all cursor-pointer"
            >
              <div className="h-44 overflow-hidden relative">
                <img src={post.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06021D]/85 to-transparent" />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-fort-purple text-white text-[10px] font-bold rounded-full uppercase tracking-wide">{post.category}</span>
              </div>
              <div className="p-5">
                <p className="text-white/40 text-[11px] mb-2">{post.date}</p>
                <h3 className="text-base font-extrabold text-white mb-3 leading-snug group-hover:text-fort-purple-light transition-colors">{post.title}</h3>
                <a href="#blog" className="inline-flex items-center gap-1 text-fort-purple-light text-xs font-bold">Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
