import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Database, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';
import FloatingOrbs from './FloatingOrbs';
import ShimmerText from './ShimmerText';
import DataHeroVisual from './DataHeroVisual';
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

  const dashboards = useCount(250, go);
  const pipelines = useCount(98, go);

  return (
    <section id="home" ref={ref} className="relative min-h-screen bg-fort-dark overflow-hidden pt-[76px] scan-line">
      <div className="absolute inset-0 overflow-hidden">
        <img src={BRAND.images.heroBg} alt="" className="w-full h-full object-cover object-center img-ken-burns" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#06021D]/95 via-[#06021D]/82 to-[#06021D]/60" />
      <div className="absolute inset-0 grid-dark opacity-40" />
      <FloatingOrbs />
      <div className="absolute top-1/3 right-[15%] w-72 h-72 bg-fort-purple/20 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="container-fort relative z-10 grid lg:grid-cols-2 gap-10 items-center min-h-[calc(100vh-76px)] py-16 lg:py-20">
        <motion.div variants={staggerContainer(0.12)} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="text-fort-purple-light text-xs font-semibold uppercase tracking-[0.25em] mb-5">
            Data analytics & engineering excellence
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-[2.6rem] sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
            Turn complex data into <ShimmerText>actionable insights</ShimmerText>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/55 text-base leading-relaxed max-w-md mb-8">
            We design modern data platforms, analytics solutions, and intelligent dashboards that help businesses make faster, smarter decisions at scale.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to="/services" className="btn-fort">Explore Services</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact-us" className="btn-fort-outline">Talk to an Expert</Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="relative flex justify-center items-center min-h-[380px] lg:min-h-[520px]">
          <DataHeroVisual />

          <motion.div
            className="absolute top-4 right-0 lg:right-2 glass-dark rounded-2xl p-4 w-[180px] z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-4 h-4 text-fort-purple-light" />
              <span className="text-white/50 text-xs">Data Pipelines</span>
            </div>
            <p className="text-2xl font-bold text-white">{pipelines}%</p>
            <p className="text-white/40 text-[10px]">Automation coverage</p>
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-0 lg:left-2 glass-dark rounded-2xl p-5 w-[210px] glow-purple z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-fort-purple-light" />
              <span className="text-white/50 text-xs">BI Dashboards</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-11 h-11 -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke="#F47920"
                  strokeWidth="3"
                  strokeDasharray={`${(pipelines / 100) * 94} 94`}
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <div className="text-2xl font-bold text-white">{dashboards}+</div>
                <div className="text-white/40 text-[10px]">Delivered globally</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-4 right-8 glass-dark rounded-2xl px-4 py-3 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-fort-purple-light" />
              <div>
                <p className="text-white/45 text-[10px]">Insight velocity</p>
                <p className="text-xl font-bold text-white">3.2x</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-10">
        <p className="text-[10px] text-white/25 uppercase tracking-[0.35em] mb-2">scroll</p>
        <div className="w-5 h-8 mx-auto border border-white/15 rounded-full flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-1.5 bg-fort-purple rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
}
