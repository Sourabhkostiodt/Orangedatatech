import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

function AnimatedCounter({ target, suffix = '', duration = 2500 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let t0: number | null = null;
    const step = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden">
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <img
          src={BRAND.images.aboutBg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#06021D]/40 via-[#06021D]/25 to-[#06021D]/50" />

      <div className="container-fort relative pt-24 lg:pt-28 pb-16 lg:pb-20 border-b border-white/5">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
          <motion.h2 ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl font-extrabold text-white leading-[1.12] tracking-tight">
            Building digital growth starts with a deep understanding of data, analytics, and your business outcomes
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.12 }} className="lg:pb-2">
            <p className="text-white/50 text-base leading-relaxed mb-6 max-w-md">
              We assess your data landscape, platforms, and goals to deliver sharp, scalable solutions aligned with your priorities. Our methods blend engineering rigor with business insight.
            </p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 btn-fort text-sm px-6 py-3">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="container-fort relative py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} className="flex flex-wrap sm:flex-nowrap gap-10 sm:gap-14 items-center">
            <div>
              <div className="text-6xl lg:text-7xl font-extrabold text-white leading-none mb-2"><AnimatedCounter target={9} suffix="+" /></div>
              <div className="text-white/40 text-xs font-semibold uppercase tracking-wider">Years of expertise</div>
            </div>
            <div className="hidden sm:block w-px h-20 bg-white/10" />
            <div>
              <div className="text-6xl lg:text-7xl font-extrabold text-white leading-none mb-2"><AnimatedCounter target={480} /></div>
              <div className="text-white/40 text-xs font-semibold uppercase tracking-wider">Data projects delivered</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }} whileHover={{ scale: 1.02 }} className="bg-fort-purple rounded-[20px] p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden min-h-[220px] glow-purple">
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <h3 className="text-xl lg:text-2xl font-extrabold text-white leading-snug mb-3 relative">
              Expert data engineers, with broad industry experience
            </h3>
            <p className="text-white/85 text-sm leading-relaxed mb-5 relative max-w-sm">
              We transform raw data into trusted insights with modern platforms, analytics, and automation that drive measurable business impact.
            </p>
            <a href="#team" className="inline-flex items-center gap-2 text-white text-sm font-bold relative hover:gap-3 transition-all">
              View Portfolio <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
