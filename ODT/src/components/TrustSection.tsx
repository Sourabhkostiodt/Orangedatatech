import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, ArrowRight, Database, BarChart3, Cloud, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

const features = [
  'End-to-end data engineering and analytics delivery',
  'Expert support for BI, cloud data platforms, and AI readiness',
  'Scalable pipelines and dashboards you can trust',
];

const serviceCards = [
  { Icon: Database, title: 'Data Engineering', desc: 'Build reliable ETL/ELT pipelines and modern lakehouse architectures' },
  { Icon: BarChart3, title: 'Business Intelligence', desc: 'Interactive dashboards and KPI reporting for every team' },
  { Icon: Cloud, title: 'Cloud Analytics', desc: 'Azure, Fabric, and Snowflake solutions that scale with growth' },
  { Icon: Workflow, title: 'Data Governance', desc: 'Quality frameworks, lineage, and trusted enterprise data' },
];

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="trust" className="relative py-24 lg:py-28 bg-fort-light circuit-deco overflow-hidden">
      <div className="container-fort relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20 lg:mb-24">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple mb-4 block">
              Data vision solutions
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.08 }} className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#06021D] leading-[1.15] mb-5">
              We deliver clarity in the <span className="text-fort-purple">data-driven world</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.14 }} className="text-[#5A6078] text-base leading-relaxed mb-7 max-w-md">
              We combine deep analytics expertise and modern platforms to help your business unlock insights, automate reporting, and accelerate digital transformation.
            </motion.p>
            <motion.ul initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="space-y-3.5 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="w-[18px] h-[18px] text-fort-purple mt-0.5 shrink-0" />
                  <span className="text-[#06021D] text-[15px] font-medium">{f}</span>
                </li>
              ))}
            </motion.ul>
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.28 }}>
              <Link to="/contact-us" className="inline-flex items-center gap-2 btn-fort text-sm px-6 py-3">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div ref={ref} initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="relative">
            <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] shadow-[0_20px_60px_rgba(244,121,32,0.15)] group">
              <img src={BRAND.images.trust} alt="Data analytics workspace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#06021D]/25 to-transparent" />
              <motion.div className="absolute top-5 right-5 bg-white rounded-xl px-3.5 py-2.5 shadow-lg" animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-fort-purple" />
                  <span className="text-xs font-bold text-[#06021D]">Live KPIs</span>
                </div>
              </motion.div>
              <motion.div className="absolute bottom-5 left-5 bg-fort-purple rounded-xl px-3.5 py-2.5 shadow-lg glow-purple" animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>
                <div className="text-white text-xs font-bold">Real-time Data</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-fort card-hover-lift p-6 group hover:shadow-[0_12px_40px_rgba(244,121,32,0.12)] hover:border-fort-purple/20 transition-all duration-300"
            >
              <motion.div
                className="w-11 h-11 rounded-xl border-2 border-fort-purple/30 flex items-center justify-center mb-4 group-hover:bg-fort-purple transition-colors"
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
              >
                <card.Icon className="w-5 h-5 text-fort-purple group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="text-base font-bold text-[#06021D] mb-1.5">{card.title}</h3>
              <p className="text-[#5A6078] text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
