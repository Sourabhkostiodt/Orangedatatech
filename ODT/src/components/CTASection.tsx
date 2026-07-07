import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={BRAND.images.blogBg} alt="" className="w-full h-full object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#06021D]/92 via-[#06021D]/75 to-[#06021D]/60" />

      <div className="container-fort relative text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple-light mb-4 block"
        >
          Ready to get started?
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-5 max-w-3xl mx-auto"
        >
          Let's build a safer digital future for your business
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="text-white/55 text-base mb-8 max-w-xl mx-auto"
        >
          Partner with {BRAND.name} for expert cyber security, compliance support, and 24/7 threat protection.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link to="/contact-us" className="btn-fort px-8 py-3.5">Contact Us Today</Link>
          <Link to="/careers" className="btn-fort-outline px-8 py-3.5">Join Our Team <ArrowRight className="w-4 h-4 ml-1" /></Link>
        </motion.div>
      </div>
    </section>
  );
}
