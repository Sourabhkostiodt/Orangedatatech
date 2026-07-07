import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';
import FloatingOrbs from './FloatingOrbs';
import ShimmerText from './ShimmerText';
import { staggerContainer, fadeUp } from '../lib/motion';

function useCount(target: number, go: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!go) return;
    let t0: number | null = null;
    const step = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / 2200, 1);
      setN(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, go]);
  return n;
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [go, setGo] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setGo(true), { threshold: 0.2 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  const blocked = useCount(99, go);
  const attacks = useCount(2800, go);

  return (
    <section id="home" ref={ref} className="relative min-h-screen bg-fort-dark overflow-hidden pt-[76px] scan-line">
      <div className="absolute inset-0 overflow-hidden">
        <img src={BRAND.images.heroBg} alt="" className="w-full h-full object-cover object-center img-ken-burns" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#06021D]/95 via-[#06021D]/80 to-[#06021D]/55" />
      <div className="absolute inset-0 grid-dark opacity-40" />
      <FloatingOrbs />
      <div className="absolute top-1/3 right-[15%] w-72 h-72 bg-fort-purple/20 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="container-fort relative z-10 grid lg:grid-cols-2 gap-10 items-center min-h-[calc(100vh-76px)] py-16 lg:py-20">
        <motion.div variants={staggerContainer(0.12)} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="text-fort-purple-light text-xs font-semibold uppercase tracking-[0.25em] mb-5">
            Cybersecurity essentials for online safety
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-[2.6rem] sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
            Modern strategies for <ShimmerText>cyber threat</ShimmerText> protection
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/55 text-base leading-relaxed max-w-md mb-8">
            We combine expert insight and leading tools to keep your business secure, resilient, and compliant in today's fast-changing threat environment.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <motion.a href="#services" className="btn-fort" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>Get Started</motion.a>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to="/about-us" className="btn-fort-outline">Learn More</Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="relative flex justify-center items-center min-h-[380px] lg:min-h-[520px]">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[85%] h-[85%] rounded-full border border-fort-purple/20 animate-pulse-ring" />
            <div className="absolute w-[70%] h-[70%] rounded-full border border-fort-purple/10 animate-spin-slow" style={{ borderStyle: 'dashed' }} />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: 'spring', stiffness: 80 }}
            className="relative w-full max-w-[480px] aspect-square animate-float-slow"
          >
            <img
              src={BRAND.images.heroVisual}
              alt="Cyber security shield"
              className="w-full h-full object-contain drop-shadow-[0_0_60px_rgba(244,121,32,0.45)]"
            />
          </motion.div>

          <motion.div className="absolute top-4 left-0 lg:left-4 glass-dark rounded-2xl p-4 w-[170px] animate-float z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <div className="flex items-center gap-2 mb-2"><Shield className="w-4 h-4 text-fort-purple-light" /><span className="text-white/50 text-xs">Data Security</span></div>
            <p className="text-white/70 text-xs">Protected assets</p>
          </motion.div>

          <motion.div className="absolute bottom-20 right-0 lg:right-4 glass-dark rounded-2xl p-5 w-[210px] glow-purple z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
            <div className="flex items-center gap-2 mb-3"><BarChart3 className="w-4 h-4 text-fort-purple-light" /><span className="text-white/50 text-xs">Threats Blocked</span></div>
            <div className="flex items-center gap-3">
              <svg className="w-11 h-11 -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                <circle cx="18" cy="18" r="15" fill="none" stroke="#F47920" strokeWidth="3" strokeDasharray={`${(blocked / 100) * 94} 94`} strokeLinecap="round" />
              </svg>
              <div><div className="text-2xl font-bold text-white">{blocked}%</div><div className="text-white/40 text-[10px]">Success rate</div></div>
            </div>
          </motion.div>

          <motion.div className="absolute bottom-4 left-8 glass-dark rounded-2xl px-4 py-3 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <p className="text-white/45 text-[10px] mb-0.5">Incidents stopped</p>
            <p className="text-xl font-bold text-white">{attacks}+</p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-10">
        <p className="text-[10px] text-white/25 uppercase tracking-[0.35em] mb-2">scroll</p>
        <div className="w-5 h-8 mx-auto border border-white/15 rounded-full flex justify-center pt-1.5">
          <motion.div className="w-1 h-1.5 bg-fort-purple rounded-full" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </div>
      </div>
    </section>
  );
}
