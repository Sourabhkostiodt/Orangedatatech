import { useState, type ReactNode, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import Logo from './Logo';
import { BRAND } from '../constants/brand';
import { fadeUp, staggerContainer } from '../lib/motion';

const footerLinks = {
  Services: ['Threat Monitoring', 'Risk Assessment', 'Vulnerability Scan', 'Cloud Security'],
  Company: [
    { label: 'About Us', href: '/about-us' },
    { label: 'Our Team', href: '/#team' },
    { label: 'Case Studies', href: '/#about' },
    { label: 'Careers', href: '/careers' },
  ],
  Contact: [
    { label: 'Get in Touch', href: '/contact-us' },
    { label: 'Support', href: '/contact-us' },
    { label: 'Documentation', href: '/#blog' },
    { label: 'FAQs', href: '/contact-us' },
  ],
};

function SocialIcon({ children, label, href }: { children: ReactNode; label: string; href: string }) {
  return (
    <a href={href} aria-label={label} className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-fort-purple hover:text-white hover:border-fort-purple transition-all">{children}</a>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setEmail(''); };

  return (
    <footer id="contact" className="bg-fort-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-dark opacity-20" />

      <div className="relative border-b border-white/8 py-16 lg:py-20">
        <motion.div
          className="container-fort max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer(0.1)}
        >
          <motion.h3 variants={fadeUp} className="text-3xl lg:text-4xl font-extrabold text-white mb-3">Securing digital trust daily</motion.h3>
          <motion.p variants={fadeUp} className="text-white/50 text-sm mb-8">Protecting your data and building resilient businesses, every day.</motion.p>
          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-full text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-fort-purple transition-colors" />
            <motion.button type="submit" className="px-7 py-3 btn-fort text-sm shrink-0" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>Subscribe</motion.button>
          </motion.form>
        </motion.div>
      </div>

      <div className="container-fort relative py-14 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-5"><Logo imageClassName="h-10 w-auto" /></Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">Protecting your data and building resilient businesses, every day.</p>
            <div className="space-y-3">
              {BRAND.addresses.map((addr) => (
                <div key={addr.label} className="flex items-start gap-2 text-sm text-white/50">
                  <MapPin className="w-4 h-4 text-fort-purple-light mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white/70 font-medium block text-xs mb-0.5">{addr.label}</span>
                    {addr.value}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 text-sm text-white/50"><Mail className="w-4 h-4 text-fort-purple-light" />{BRAND.email}</div>
              <div className="flex items-center gap-2 text-sm text-white/50"><Phone className="w-4 h-4 text-fort-purple-light" />{BRAND.phone}</div>
            </div>
            <div className="flex gap-2.5 mt-6">
              <SocialIcon label="Twitter" href="#"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></SocialIcon>
              <SocialIcon label="Facebook" href="#"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></SocialIcon>
              <SocialIcon label="Instagram" href="#"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg></SocialIcon>
              <SocialIcon label="Youtube" href="#"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></SocialIcon>
            </div>
          </div>
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => {
                  const label = typeof link === 'string' ? link : link.label;
                  const href = typeof link === 'string' ? '#' : link.href;
                  return (
                    <li key={label}>
                      <Link to={href} className="text-sm text-white/50 hover:text-fort-purple-light transition-colors">{label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative border-t border-white/8">
        <div className="container-fort py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">© 2026 {BRAND.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-5 text-xs text-white/40">
            <a href="#" className="hover:text-fort-purple-light transition-colors">Privacy</a>
            <a href="#" className="hover:text-fort-purple-light transition-colors">Terms</a>
            <a href="#" className="hover:text-fort-purple-light transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
