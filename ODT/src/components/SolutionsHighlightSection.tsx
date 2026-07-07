import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ShieldCheck, ScanSearch, CloudCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

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
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-20 lg:py-28 bg-fort-light circuit-deco overflow-hidden">
      <div className="container-fort">
        <div className="text-center mb-14 lg:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple mb-3 block">Our solutions</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06021D]">How we protect your organization</h2>
        </div>

        <div ref={ref} className="space-y-16 lg:space-y-24">
          {rows.map((row, i) => (
            <motion.div
              key={row.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${row.reverse ? 'lg:[direction:rtl]' : ''}`}
            >
              <div className={`relative rounded-[20px] overflow-hidden aspect-[4/3] shadow-[0_24px_60px_rgba(244,121,32,0.12)] ${row.reverse ? 'lg:[direction:ltr]' : ''}`}>
                <img src={row.image} alt={row.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-fort-purple flex items-center justify-center glow-purple">
                  <row.Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className={row.reverse ? 'lg:[direction:ltr]' : ''}>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple mb-3 block">{row.tag}</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#06021D] leading-tight mb-4">{row.title}</h3>
                <p className="text-[#5A6078] text-base leading-relaxed mb-6">{row.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {row.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-[#06021D] text-sm font-medium">
                      <ShieldCheck className="w-4 h-4 text-fort-purple shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
                <Link to="/contact-us" className="inline-flex items-center gap-2 btn-fort text-sm px-6 py-3">
                  Get Protected <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
