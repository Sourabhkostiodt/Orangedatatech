import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, ScanSearch, CloudCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from '../lib/motion';

const rows = [
  {
    image: BRAND.images.aboutExpertise,
    tag: 'Proactive defense',
    title: 'Advanced threat monitoring & rapid response',
    desc: 'Our SOC team detects anomalies in real time, investigates incidents, and contains threats before they impact your operations.',
    points: ['24/7 security operations', 'Incident response playbooks', 'Threat intelligence feeds'],
    Icon: ScanSearch,
  },
  {
    image: BRAND.images.aboutSolutions,
    tag: 'Cloud & compliance',
    title: 'End-to-end protection for modern infrastructure',
    desc: 'From cloud workloads to on-premise systems, we build security architectures that scale with your business and meet compliance goals.',
    points: ['Cloud security posture', 'ISO & GDPR alignment', 'Vulnerability management'],
    Icon: CloudCog,
    reverse: true,
  },
];

export default function SolutionsHighlightSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 lg:py-28 bg-fort-light circuit-deco overflow-hidden">
      <div className="container-fort">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="text-center mb-14 lg:mb-16"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple mb-3 block">Our solutions</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06021D]">How we protect your organization</h2>
        </motion.div>

        <div ref={ref} className="space-y-16 lg:space-y-24">
          {rows.map((row) => (
            <motion.div
              key={row.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer(0.15)}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${row.reverse ? 'lg:[direction:rtl]' : ''}`}
            >
              <motion.div
                variants={row.reverse ? fadeRight : fadeLeft}
                className={`relative rounded-[20px] overflow-hidden aspect-[4/3] shadow-[0_24px_60px_rgba(244,121,32,0.12)] group ${row.reverse ? 'lg:[direction:ltr]' : ''}`}
              >
                <img src={row.image} alt={row.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-fort-purple/0 group-hover:bg-fort-purple/10 transition-colors duration-500" />
                <motion.div
                  className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-fort-purple flex items-center justify-center glow-purple"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                >
                  <row.Icon className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
              <motion.div variants={fadeUp} className={row.reverse ? 'lg:[direction:ltr]' : ''}>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple mb-3 block">{row.tag}</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#06021D] leading-tight mb-4">{row.title}</h3>
                <p className="text-[#5A6078] text-base leading-relaxed mb-6">{row.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {row.points.map((p, j) => (
                    <motion.li
                      key={p}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + j * 0.08 }}
                      className="flex items-center gap-2 text-[#06021D] text-sm font-medium"
                    >
                      <ShieldCheck className="w-4 h-4 text-fort-purple shrink-0" /> {p}
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/contact-us" className="inline-flex items-center gap-2 btn-fort text-sm px-6 py-3">
                    Get Protected <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
