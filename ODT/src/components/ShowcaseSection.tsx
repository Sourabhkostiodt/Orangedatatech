import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BRAND } from '../constants/brand';

const gallery = [
  { image: BRAND.images.aboutExpertise, title: 'Threat intelligence', span: 'lg:col-span-2 lg:row-span-2' },
  { image: BRAND.images.team, title: 'Expert team', span: '' },
  { image: BRAND.images.trust, title: 'Secure operations', span: '' },
  { image: BRAND.images.aboutSolutions, title: 'Cloud defense', span: 'lg:col-span-2' },
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
            Securing businesses worldwide
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[200px] lg:auto-rows-[220px]">
          {gallery.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              className={`relative rounded-[20px] overflow-hidden group ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06021D]/90 via-[#06021D]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-sm lg:text-base">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
