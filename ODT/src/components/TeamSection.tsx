import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="team" className="bg-fort-dark relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 grid-dark opacity-30" />
      <div className="container-fort relative py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div ref={ref} initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="relative">
            <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] shadow-[0_24px_60px_rgba(0,0,0,0.4)] group">
              <img src={BRAND.images.team} alt="Cyber security team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06021D]/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-fort-purple/20 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

          <div>
            <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple-light mb-4 block">
              Our experts
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.08 }} className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-white leading-[1.15] mb-5">
              Experts who protect vital business assets
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.14 }} className="text-white/50 text-base leading-relaxed mb-8 max-w-md">
              Our certified specialists bring deep industry knowledge and hands-on experience to every engagement — from threat assessment to incident response.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.22 }}>
              <Link to="/contact-us" className="inline-flex items-center gap-2 btn-fort-outline text-sm px-6 py-3">
                Meet Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
