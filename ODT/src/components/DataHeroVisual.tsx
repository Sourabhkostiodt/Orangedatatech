import { motion } from 'framer-motion';
import { BarChart3, Database, LineChart, PieChart, Workflow } from 'lucide-react';

const bars = [42, 68, 55, 82, 64, 91, 73];

export default function DataHeroVisual() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[90%] h-[90%] rounded-full border border-fort-purple/20 animate-pulse-ring" />
        <div
          className="absolute w-[72%] h-[72%] rounded-full border border-fort-purple/10 animate-spin-slow"
          style={{ borderStyle: 'dashed' }}
        />
      </div>

      <motion.div
        className="absolute inset-[8%] rounded-[28px] glass-dark border border-white/10 overflow-hidden shadow-[0_0_80px_rgba(244,121,32,0.25)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0828] via-[#12082F] to-[#1A0F3D]" />
        <div className="absolute inset-0 grid-dark opacity-40" />

        <div className="relative p-5 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-fort-purple-light font-semibold">Live Analytics</p>
              <p className="text-white text-sm font-bold">Data Intelligence Hub</p>
            </div>
            <motion.div
              className="w-9 h-9 rounded-lg bg-fort-purple/20 flex items-center justify-center"
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <BarChart3 className="w-4 h-4 text-fort-purple-light" />
            </motion.div>
          </div>

          <div className="flex-1 flex items-end gap-2 mb-4 px-1">
            {bars.map((h, i) => (
              <motion.div
                key={h}
                className="flex-1 rounded-t-md bg-gradient-to-t from-fort-purple to-fort-purple-light origin-bottom"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>

          <svg viewBox="0 0 320 80" className="w-full h-16 mb-3" aria-hidden>
            <motion.path
              d="M0 60 L40 45 L80 52 L120 28 L160 38 L200 18 L240 30 L280 12 L320 22"
              fill="none"
              stroke="#FF9A4D"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.4, ease: 'easeInOut' }}
            />
            <motion.path
              d="M0 60 L40 45 L80 52 L120 28 L160 38 L200 18 L240 30 L280 12 L320 22 L320 80 L0 80 Z"
              fill="url(#area)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F47920" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#F47920" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-3 gap-2">
            {[
              { Icon: Database, label: 'Pipelines' },
              { Icon: LineChart, label: 'Insights' },
              { Icon: PieChart, label: 'BI Reports' },
            ].map(({ Icon, label }, i) => (
              <motion.div
                key={label}
                className="rounded-xl bg-white/5 border border-white/10 px-2 py-2 flex flex-col items-center gap-1"
                animate={{ y: [0, -3, 0] }}
                transition={{ delay: i * 0.4, duration: 2.5, repeat: Infinity }}
              >
                <Icon className="w-3.5 h-3.5 text-fort-purple-light" />
                <span className="text-[9px] text-white/55 font-medium">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {[
        { className: 'top-2 left-0', Icon: Database, title: 'Data Lake', sub: 'Unified storage' },
        { className: 'bottom-16 right-0', Icon: Workflow, title: 'ETL Flow', sub: 'Real-time sync' },
        { className: 'bottom-2 left-6', Icon: LineChart, title: 'Predictive AI', sub: 'ML models' },
      ].map((card, i) => (
        <motion.div
          key={card.title}
          className={`absolute ${card.className} glass-dark rounded-2xl px-4 py-3 z-10 animate-float`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.15 }}
          style={{ animationDelay: `${i * 0.8}s` }}
        >
          <div className="flex items-center gap-2 mb-0.5">
            <card.Icon className="w-3.5 h-3.5 text-fort-purple-light" />
            <span className="text-white text-xs font-bold">{card.title}</span>
          </div>
          <p className="text-white/45 text-[10px]">{card.sub}</p>
        </motion.div>
      ))}

      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 rounded-full bg-fort-purple-light/80"
          style={{
            top: `${15 + (i % 3) * 28}%`,
            left: `${8 + i * 14}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}
