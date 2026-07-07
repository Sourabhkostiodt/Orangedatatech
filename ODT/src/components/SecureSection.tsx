import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bug, Database } from 'lucide-react';
import { BRAND } from '../constants/brand';

const features = [
  { Icon: Bug, title: 'Relentless protection', desc: 'Partner with us for custom security plans and resilient data safeguards tailored to your business.' },
  { Icon: Database, title: 'Secure moves today', desc: 'Let our experts build robust cyber plans that defend and empower your teams across every channel.' },
];

export default function SecureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={BRAND.images.earth} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#06021D]/88 via-[#06021D]/65 to-[#06021D]/25" />

      <div ref={ref} className="container-fort relative w-full py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple-light mb-4 block">
              Defend your data now
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.08 }} className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight">
              We secure &amp; protect your future
            </motion.h2>
          </div>

          <div className="space-y-4">
            {features.map(({ Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.15 + i * 0.12 }} className="glass-dark rounded-[20px] p-5 lg:p-6 hover:border-fort-purple/40 transition-colors group">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-fort-purple flex items-center justify-center shrink-0 glow-purple">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">{title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
