import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  { name: 'Starter', monthly: 25, yearly: 75, highlight: false, features: ['24/7 threat watch and fast response', 'Basic vulnerability scanning', 'Email security gateway', 'Monthly security reports', '5 user accounts'] },
  { name: 'Professional', monthly: 50, yearly: 100, highlight: true, features: ['Full compliance and audits built-in', 'Advanced threat detection', 'Incident response team', 'Weekly security reports', '25 user accounts'] },
  { name: 'Advanced', monthly: 75, yearly: 150, highlight: false, features: ['Custom security with expert support', 'Dedicated security engineer', 'Zero-trust architecture setup', 'Real-time threat intelligence', 'Unlimited user accounts'] },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" className="py-24 section-pricing circuit-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">Transparent pricing</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-4xl lg:text-5xl font-extrabold text-brand-teal mb-8">Choose the right fit for your goals</motion.h2>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="inline-flex items-center gap-1 bg-white border border-gray-200 rounded-full p-1 shadow-sm">
            <button onClick={() => setYearly(false)} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all tracking-wide ${!yearly ? 'bg-brand-orange text-white shadow' : 'text-brand-teal/60 hover:text-brand-teal'}`}>Monthly</button>
            <button onClick={() => setYearly(true)} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all tracking-wide ${yearly ? 'bg-brand-orange text-white shadow' : 'text-brand-teal/60 hover:text-brand-teal'}`}>Yearly</button>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.12 }} whileHover={{ y: -6 }} className={`relative rounded-3xl overflow-hidden flex flex-col ${plan.highlight ? 'bg-brand-orange shadow-2xl shadow-brand-orange/25 md:scale-105 z-10' : 'bg-white border border-gray-100 shadow-sm'}`}>
              <div className="p-8 flex flex-col flex-1">
                <h3 className={`text-xl font-extrabold mb-1 ${plan.highlight ? 'text-white' : 'text-brand-teal'}`}>{plan.name}</h3>
                <div className="flex items-end gap-1 mb-6 mt-4">
                  <AnimatePresence mode="wait">
                    <motion.span key={yearly ? 'y' : 'm'} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className={`text-5xl font-extrabold ${plan.highlight ? 'text-white' : 'text-brand-teal'}`}>${yearly ? plan.yearly : plan.monthly}</motion.span>
                  </AnimatePresence>
                  <span className={`text-sm mb-2 ${plan.highlight ? 'text-white/75' : 'text-gray-400'}`}>/ {yearly ? 'year' : 'month'}</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-white' : 'text-brand-orange'}`} />
                      <span className={`text-sm ${plan.highlight ? 'text-white/90' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3.5 rounded-full font-bold text-sm transition-all tracking-wide ${plan.highlight ? 'bg-white text-brand-orange hover:bg-white/90' : 'bg-brand-orange text-white hover:bg-brand-orange-dark'}`}>Choose Plan</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
