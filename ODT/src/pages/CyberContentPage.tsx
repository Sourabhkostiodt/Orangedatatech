import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getContentPage } from '../data/cyberPages';

export default function CyberContentPage() {
  const location = useLocation();
  const content = getContentPage(location.pathname);
  const topLevel = location.pathname.split('/')[1] || 'home';
  const sectionLabel = topLevel.charAt(0).toUpperCase() + topLevel.slice(1);

  if (!content) {
    return (
      <div className="min-h-screen bg-fort-dark text-white">
        <Navbar />
        <main className="container-fort pt-[140px] pb-24">
          <h1 className="text-3xl font-bold mb-4">Page not found</h1>
          <Link to="/" className="btn-fort">Back to Home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-fort-dark text-white">
      <Navbar />
      <main className="pt-[76px]">
        <section className="relative overflow-hidden border-b border-white/10 scan-line">
          <div className="absolute inset-0 grid-dark opacity-40" />
          <div className="absolute -top-20 right-[10%] w-72 h-72 bg-fort-purple/15 rounded-full blur-[120px]" />
          <div className="container-fort relative py-18 lg:py-24">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-fort-purple-light text-xs uppercase tracking-[0.22em] font-semibold mb-4"
            >
              Orange Data Tech / {sectionLabel}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl lg:text-[3rem] font-extrabold leading-tight max-w-4xl mb-5"
            >
              {content.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.08 }}
              className="text-white/65 text-base max-w-3xl"
            >
              {content.subtitle}
            </motion.p>
            <div className="flex flex-wrap gap-2 mt-7">
              {content.sections.map((section) => (
                <span
                  key={section.heading}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/6 border border-white/10 text-white/75"
                >
                  {section.heading}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-fort-light text-[#06021D] py-14 lg:py-18">
          <div className="container-fort grid gap-6">
            {content.sections.map((section, index) => (
              <motion.article
                key={section.heading}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05 }}
                className="card-fort p-7 lg:p-8 card-hover-lift"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-fort-purple/12 text-fort-purple inline-flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <h2 className="text-xl lg:text-2xl font-extrabold">{section.heading}</h2>
                </div>
                {section.intro ? <p className="text-[#5A6078] mb-4">{section.intro}</p> : null}
                {section.bullets ? (
                  <ul className="space-y-2.5">
                    {section.bullets.map((point) => (
                      <li key={point} className="text-[#5A6078] text-sm lg:text-[15px] leading-relaxed flex gap-2.5">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-fort-purple shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </motion.article>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[24px] p-8 lg:p-10 bg-fort-dark text-white"
            >
              <h3 className="text-2xl font-extrabold mb-3">Need help choosing the right service?</h3>
              <p className="text-white/60 text-sm mb-6 max-w-2xl">
                Talk with our team and we will map the right solution for your current business goals, tech stack, and delivery timeline.
              </p>
              <Link to="/contact-us" className="btn-fort inline-flex items-center gap-2">
                Talk to an Expert <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
