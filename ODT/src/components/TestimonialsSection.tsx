import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'They provided unmatched cyber expertise, helping us meet regulations while keeping our data safe. Their team is vigilant, fast, and always on top of new threats.',
    name: 'Emily Chen',
    role: 'London, UK',
    initials: 'EC',
    color: '#F47920',
  },
  {
    quote: 'With Orange Data Tech, we have confidence in our security. Their constant monitoring and tailored advice have stopped issues before they start. Great support, always ready to help.',
    name: 'Daniel Evans',
    role: 'Manchester, UK',
    initials: 'DE',
    color: '#D96A10',
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="testimonials" className="py-24 lg:py-28 bg-fort-light circuit-deco relative">
      <div className="container-fort relative">
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple mb-3 block">Testimonials</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.08 }} className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-[#06021D]">What our clients say</motion.h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.12 + i * 0.1 }} className="card-fort p-7 lg:p-8">
              <div className="flex gap-0.5 mb-5">{Array.from({ length: 5 }).map((_, j) => (<Star key={j} className="w-4 h-4 text-fort-purple fill-fort-purple" />))}</div>
              <p className="text-[#5A6078] text-[15px] leading-relaxed mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: t.color }}>{t.initials}</div>
                <div>
                  <div className="font-bold text-[#06021D] text-sm">{t.name}</div>
                  <div className="text-xs text-[#8B8FA3]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
