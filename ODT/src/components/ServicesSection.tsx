import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SearchCheck, ShieldCheck, Bug, Flame, Cloud, Lock } from 'lucide-react';

const services = [
  {
    Icon: SearchCheck,
    title: 'Risk Detection',
    desc: 'Exposes potential security issues quickly before they become threats.',
    color: '#0f4c81',
    bg: '#f0f6ff',
  },
  {
    Icon: ShieldCheck,
    title: 'System Defense',
    desc: 'Actively blocks attacks using layered measures and real-time response.',
    color: '#e8490a',
    bg: '#fff4f0',
  },
  {
    Icon: Bug,
    title: 'Threat Protection',
    desc: 'Detects and eliminates malware on devices before damage occurs.',
    color: '#0f4c81',
    bg: '#f0f6ff',
  },
  {
    Icon: Flame,
    title: 'Cyber Attack Defense',
    desc: 'Shows active threats that disrupt systems and neutralizes them.',
    color: '#e8490a',
    bg: '#fff4f0',
  },
  {
    Icon: Cloud,
    title: 'Cloud Security',
    desc: 'Safeguards all cloud assets with enterprise-grade protection protocols.',
    color: '#0f4c81',
    bg: '#f0f6ff',
  },
  {
    Icon: Lock,
    title: 'Access Control',
    desc: 'Manages user permissions with zero-trust architecture principles.',
    color: '#e8490a',
    bg: '#fff4f0',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-24 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-xs font-bold uppercase tracking-widest text-[#e8490a] mb-3"
          >
            We're 100+ individuals from around the globe united by shared purpose
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] max-w-3xl mx-auto leading-tight"
          >
            Our security services{' '}
            <span className="text-[#e8490a]">designed for you</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ Icon, title, desc, color, bg }) => (
            <motion.div
              key={title}
              variants={card}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 cursor-pointer hover:border-transparent hover:shadow-xl transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: bg }}
              >
                <Icon style={{ color }} className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>

              <div className="mt-5 flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color }}>
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
