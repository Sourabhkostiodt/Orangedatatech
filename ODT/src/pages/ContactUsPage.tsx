import { useRef, useState, type FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND } from '../constants/brand';

export default function ContactUsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', consent: false });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '', consent: false });
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    'w-full px-5 py-3.5 bg-[#0D0828] border border-fort-purple/35 rounded-[14px] text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-fort-purple transition-colors';

  return (
    <div className="min-h-screen bg-[#06021D]">
      <Navbar />
      <main>
        <section className="relative pt-[76px] min-h-screen overflow-hidden bg-[#06021D]">
          {/* Earth — centered & large */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="animate-earth-drift w-[min(1150px,130vw)] h-[min(1150px,92vh)] flex items-center justify-center will-change-transform">
              <img
                src={BRAND.images.contactEarth}
                alt=""
                className="w-full h-full object-contain drop-shadow-[0_0_100px_rgba(100,180,255,0.25)]"
              />
            </div>
          </div>

          {/* Soft vignette — clear center, darker edges only */}
          <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_80%_70%_at_50%_42%,transparent_0%,transparent_45%,rgba(6,2,29,0.35)_70%,rgba(6,2,29,0.78)_100%)]" />
          <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#06021D]/30 via-transparent to-[#06021D]/45" />
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] w-[min(520px,75vw)] h-[min(520px,75vw)] bg-fort-purple/12 rounded-full blur-[130px] animate-earth-glow pointer-events-none" />

          <div className="container-fort relative z-10 py-16 sm:py-24 lg:py-[150px]">
            <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
              {/* Left — info */}
              <div className="lg:max-w-[500px] glass-dark rounded-[24px] p-6 sm:p-8 border border-white/10 bg-[#0D0828]/55 backdrop-blur-md">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white/50 mb-7 block"
                >
                  Common Questions
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.08 }}
                  className="text-[2.4rem] sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.08] mb-7"
                >
                  Have questions? Get in touch!
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.14 }}
                  className="text-white/55 text-base leading-relaxed mb-10 max-w-[520px]"
                >
                  We are here to assist you with any questions or concerns you may have. Feel free to reach out to us anytime.
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="space-y-6 list-none p-0 m-0"
                >
                  {BRAND.addresses.map((addr) => (
                    <li key={addr.label} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-fort-purple shrink-0" />
                      <div>
                        <p className="text-white/40 text-[11px] uppercase tracking-wider mb-1">{addr.label}</p>
                        <p className="text-white text-[15px] leading-relaxed">{addr.value}</p>
                      </div>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-fort-purple mt-1 shrink-0" />
                    <a
                      href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                      className="text-white text-lg font-semibold hover:text-fort-purple-light transition-colors"
                    >
                      {BRAND.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-fort-purple mt-1 shrink-0" />
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-white text-[15px] hover:text-fort-purple-light transition-colors"
                    >
                      {BRAND.email}
                    </a>
                  </li>
                </motion.ul>
              </div>

              {/* Right — form */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.18 }}
                className="lg:pl-4 glass-dark rounded-[24px] p-6 sm:p-8 border border-white/10 bg-[#0D0828]/55 backdrop-blur-md"
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Name <span className="text-fort-purple">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Email <span className="text-fort-purple">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Message</label>
                    <textarea
                      placeholder="Leave your message"
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-white/20 bg-[#0D0828] text-fort-purple focus:ring-fort-purple/40"
                      required
                    />
                    <span className="text-white/45 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                      I agree that my submitted data is being{' '}
                      <span className="text-fort-purple-light underline underline-offset-2">collected and stored</span>.
                    </span>
                  </label>

                  <button type="submit" className="btn-fort px-8 py-3.5 text-sm font-semibold">
                    Send Message
                  </button>

                  {sent && (
                    <p className="text-fort-purple-light text-sm">Thank you! Your message has been sent.</p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
