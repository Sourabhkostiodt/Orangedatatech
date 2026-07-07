import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BRAND } from '../constants/brand';

const gallery = [
  { image: BRAND.images.aboutExpertise, title: 'BI dashboards', span: 'lg:col-span-2 lg:row-span-2' },
  { image: BRAND.images.team, title: 'Data experts', span: '' },
  { image: BRAND.images.trust, title: 'Cloud analytics', span: '' },
  { image: BRAND.images.aboutSolutions, title: 'Data pipelines', span: 'lg:col-span-2' },
];

export default function ShowcaseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-20 lg:py-28 bg-[#06021D] relative overflow-hidden">
      <div className="absolute inset-0 grid-dark opacity-25" />
      <div className="container-fort relative">
        <div className="text-center mb-12 lg:mb-14">
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple-light mb-3 block">
            Our work in action
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.08 }} className="text-3xl sm:text-4xl font-extrabold text-white">
            Powering data-driven businesses worldwide
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[200px] lg:auto-rows-[220px]">
          {gallery.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`relative rounded-[20px] overflow-hidden group cursor-pointer border border-white/5 hover:border-fort-purple/40 transition-colors duration-400 ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06021D]/95 via-[#06021D]/30 to-transparent transition-opacity duration-500 group-hover:from-[#06021D]/80" />
              <div className="absolute inset-0 bg-fort-purple/0 group-hover:bg-fort-purple/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <motion.p className="text-white font-bold text-sm lg:text-base">{item.title}</motion.p>
                <p className="text-fort-purple-light text-xs font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400">Explore →</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
