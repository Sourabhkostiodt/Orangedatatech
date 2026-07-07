import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';
import FloatingOrbs from './FloatingOrbs';
import { staggerContainer, fadeUp } from '../lib/motion';

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img src={BRAND.images.blogBg} alt="" className="w-full h-full object-cover object-center img-ken-burns" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#06021D]/92 via-[#06021D]/75 to-[#06021D]/60" />
      <FloatingOrbs className="opacity-60" />

      <div className="container-fort relative text-center">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            variants={fadeUp}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple-light mb-4 block"
          >
            Ready to get started?
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-5 max-w-3xl mx-auto"
          >
            Let's build a smarter data future for your business
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/55 text-base mb-8 max-w-xl mx-auto">
            Partner with {BRAND.name} for data engineering, analytics, BI dashboards, and cloud-native data platforms.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact-us" className="btn-fort px-8 py-3.5">Contact Us Today</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link to="/careers" className="btn-fort-outline px-8 py-3.5">Join Our Team <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
