import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Cpu, Database, Cloud, Shield, BarChart3, Smartphone, Code2, Lock, Workflow } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getContentPage } from '../data/cyberPages';
import { BRAND } from '../constants/brand';

function getSectionGraphic(title: string, topLevel: string) {
  const t = `${topLevel} ${title}`.toLowerCase();
  if (t.includes('mobile') || t.includes('app')) return { Icon: Smartphone, tag: 'App Engineering' };
  if (t.includes('analytics') || t.includes('bi')) return { Icon: BarChart3, tag: 'Analytics' };
  if (t.includes('data') || t.includes('etl') || t.includes('warehouse')) return { Icon: Database, tag: 'Data Platform' };
  if (t.includes('cloud') || t.includes('azure') || t.includes('aws')) return { Icon: Cloud, tag: 'Cloud Stack' };
  if (t.includes('security') || t.includes('identity') || t.includes('access')) return { Icon: Shield, tag: 'Security' };
  if (t.includes('governance') || t.includes('compliance')) return { Icon: Lock, tag: 'Governance' };
  if (t.includes('implementation') || t.includes('integration')) return { Icon: Workflow, tag: 'Implementation' };
  if (t.includes('technology') || t.includes('engineering')) return { Icon: Cpu, tag: 'Technology' };
  return { Icon: Code2, tag: 'Digital Services' };
}

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
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[76px]">
        <section className="relative overflow-hidden border-b border-white/10 scan-line">
          <img src={BRAND.images.aboutHero} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06021D]/92 via-[#06021D]/78 to-[#06021D]/58" />
          <div className="absolute inset-0 grid-dark opacity-35" />
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
              className="text-white text-3xl sm:text-4xl lg:text-[3rem] font-extrabold leading-tight max-w-4xl mb-5"
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

        <section className="bg-fort-light text-[#06021D] py-14 lg:py-18 circuit-deco">
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
                <div className="grid lg:grid-cols-[1fr_220px] gap-5 items-start">
                  <div>
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
                  </div>
                  <div className="hidden lg:block">
                    {(() => {
                      const { Icon, tag } = getSectionGraphic(section.heading, topLevel);
                      return (
                        <div className="w-full h-[140px] rounded-xl border border-[#E2EAF2] bg-gradient-to-br from-[#06021D] via-[#0D0828] to-[#1A1340] p-4 relative overflow-hidden">
                          <div className="absolute -right-5 -top-5 w-20 h-20 rounded-full bg-fort-purple/25 blur-xl" />
                          <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-fort-purple/20 blur-xl" />
                          <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-9 h-9 rounded-lg bg-fort-purple text-white flex items-center justify-center animate-float">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-white text-xs font-semibold uppercase tracking-wide">{tag}</p>
                              <p className="text-white/55 text-[11px] mt-1">Structured delivery pattern</p>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
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
