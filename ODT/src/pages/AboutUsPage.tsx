import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Star, Cloud, Lock, Shield, KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MarqueeSection from '../components/MarqueeSection';
import Footer from '../components/Footer';
import { BRAND } from '../constants/brand';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let t0: number | null = null;
    const step = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / 2200, 1);
      setN(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const testimonials = [
  { quote: 'They provided unmatched cyber expertise, helping us meet regulations while keeping our data safe. Their team is vigilant, fast, and always on top of new threats.', name: 'Emily Chen', role: 'London, UK' },
  { quote: 'Their proactive approach at every level shields our data from risk. Their know-how and quick action have been key to our security. We value their expertise and dedication.', name: 'Laura White', role: 'Paris, FR' },
  { quote: 'We trust Orange Data Tech for their fast response and expert solutions. They understand our needs and keep us a step ahead of threats. Always professional and committed.', name: 'James Carter', role: 'Dublin, IE' },
  { quote: 'With Orange Data Tech, we have confidence in our security. Their constant monitoring and tailored advice have stopped issues before they start. Great support, always ready to help.', name: 'Daniel Evans', role: 'Manchester, UK' },
];

const solutions = [
  { Icon: Cloud, title: 'Cloud security', desc: 'Keeps cloud-stored information safe from unauthorized access' },
  { Icon: Lock, title: 'System encryption', desc: 'Protects all sensitive data on your devices from breaches' },
  { Icon: Shield, title: 'Shield protection', desc: 'Secures your data against online threats effectively and efficiently' },
  { Icon: KeyRound, title: 'Access control', desc: 'Manages who can enter systems and data securely online' },
];

const blogPosts = [
  { category: 'Best Practices', title: 'Identifying and stopping ransomware early', date: 'Jan 5, 2026', image: BRAND.images.aboutBlog1 },
  { category: 'Industry Trends', title: 'Simple ways to keep your family safe online', date: 'Jan 5, 2026', image: BRAND.images.aboutBlog2 },
  { category: 'Best Practices', title: 'The dangers of public Wi-Fi and how to stay secure', date: 'Jan 5, 2026', image: BRAND.images.aboutBlog3 },
];

export default function AboutUsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-[76px]">
          <div className="absolute inset-0">
            <img src={BRAND.images.aboutHero} alt="" className="w-full h-full object-cover object-center" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#06021D]/92 via-[#06021D]/75 to-[#06021D]/40" />
          <div className="container-fort relative z-10 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div ref={heroRef}>
                <motion.span initial={{ opacity: 0 }} animate={heroInView ? { opacity: 1 } : {}} className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple-light mb-4 block">
                  Driven by protection
                </motion.span>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.08 }} className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] mb-6">
                  We securely secure digital futures
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={heroInView ? { opacity: 1 } : {}} transition={{ delay: 0.16 }} className="text-white/55 text-base leading-relaxed max-w-lg mb-8">
                  {BRAND.name} enables firms to thrive in a digital era by delivering trusted cyber security and data protection that defend assets and build confidence every step of the way.
                </motion.p>
                <motion.div initial={{ opacity: 0 }} animate={heroInView ? { opacity: 1 } : {}} transition={{ delay: 0.24 }} className="flex flex-wrap gap-3">
                  <Link to="/contact-us" className="btn-fort">Contact Us</Link>
                  <Link to="/#services" className="btn-fort-outline">Our Solutions</Link>
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0, x: 24 }} animate={heroInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} className="hidden lg:block">
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-3">Prepared to protect your data?</p>
                <div className="glass-dark rounded-[20px] p-6 max-w-sm">
                  <h3 className="text-white font-bold text-lg mb-3">Unmatched cyber expertise</h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    From risk review to response, our experts tailor advanced solutions that guard your vital data, reduce threats, and keep your business compliant and resilient.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-20 lg:py-28 bg-fort-light circuit-deco">
          <div className="container-fort grid lg:grid-cols-2 gap-14 items-center">
            <div className="rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(244,121,32,0.12)]">
              <img src={BRAND.images.aboutExpertise} alt="Cyber security team" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple mb-4 block">Unmatched cyber expertise</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06021D] leading-tight mb-5">
                We safeguard &amp; empower your digital world
              </h2>
              <p className="text-[#5A6078] text-base leading-relaxed mb-6">
                From risk review to response, our experts tailor advanced solutions that guard your vital data, reduce threats, and keep your business compliant and resilient at all times, across evolving digital landscapes and regulatory environments.
              </p>
                <Link to="/contact-us" className="inline-flex items-center gap-2 btn-fort text-sm px-6 py-3">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-28 bg-fort-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-dark opacity-30" />
          <div className="container-fort relative">
            <div className="text-center mb-14">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3 block">Trusted by industry leaders</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white">Hear from those we protect daily</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {testimonials.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-dark rounded-[20px] p-6">
                  <div className="flex gap-0.5 mb-4">{Array.from({ length: 5 }).map((_, j) => (<Star key={j} className="w-3.5 h-3.5 text-fort-purple fill-fort-purple" />))}</div>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-white/40">{t.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 lg:py-20 bg-fort-dark border-t border-white/5">
          <div className="container-fort grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[
              { value: 2800, suffix: '+', label: 'Threats detected' },
              { value: 480, suffix: '+', label: 'Clients protected' },
              { value: 9, suffix: '+', label: 'Years of service' },
              { value: 1200, suffix: '+', label: 'Incidents managed' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl lg:text-6xl font-extrabold text-white mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/40 text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={BRAND.images.aboutSolutions} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#06021D]/95 via-[#06021D]/85 to-[#06021D]/70" />
          <div className="container-fort relative">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple-light mb-4 block">Defending your data</span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white leading-tight mb-5">
                  Safeguard business with experts
                </h2>
                <p className="text-white/55 text-base leading-relaxed mb-6 max-w-md">
                  {BRAND.name} delivers leading cyber security and data protection, helping businesses stay ahead of threats and compliance risks. Our team ensures your digital assets are safe and your future is secure.
                </p>
                <Link to="/#services" className="inline-flex items-center gap-2 btn-fort text-sm px-6 py-3">
                  Our Solutions <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {solutions.map(({ Icon, title, desc }) => (
                <div key={title} className="glass-dark rounded-[20px] p-5 hover:border-fort-purple/40 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-fort-purple flex items-center justify-center mb-4 glow-purple">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MarqueeSection />

        {/* Blog */}
        <section className="py-20 lg:py-28 bg-fort-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-dark opacity-30" />
          <div className="container-fort relative">
            <div className="mb-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple-light mb-3 block">News and articles</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white leading-tight">
                We protect data with expert solutions
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {blogPosts.map((post) => (
                <article key={post.title} className="group glass-dark rounded-[20px] overflow-hidden hover:border-fort-purple/30 transition-all">
                  <div className="h-44 overflow-hidden relative">
                    <img src={post.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-fort-purple text-white text-[10px] font-bold rounded-full uppercase">{post.category}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-white/40 text-[11px] mb-2">{post.date}</p>
                    <h3 className="text-base font-extrabold text-white mb-3 leading-snug group-hover:text-fort-purple-light transition-colors">{post.title}</h3>
                    <span className="inline-flex items-center gap-1 text-fort-purple-light text-xs font-bold">Read More <ArrowRight className="w-3.5 h-3.5" /></span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
