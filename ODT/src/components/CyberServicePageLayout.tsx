import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { BRAND } from '../constants/brand';

export type ChallengeItem = { title: string; text: string };
export type ServiceBlock = { title: string; subtitle?: string; text?: string; items?: string[] };
export type PhaseBlock = { title: string; items: string[]; deliverable?: string; output?: string };
export type WhyChooseBlock = { title: string; text?: string; items?: string[] };
export type ProductGroup = { title: string; items: string[] };
export type EngagementModel = { title: string; idealFor: string; items: string[]; output: string };

export type CyberServicePageConfig = {
  breadcrumb: string;
  title: string;
  heroParagraphs: string[];
  challengeSection: {
    title: string;
    intro: string;
    items: ChallengeItem[];
    footer?: string;
  };
  servicesSection?: {
    title: string;
    intro: string;
    blocks: ServiceBlock[];
  };
  engagementSection?: {
    title: string;
    models: EngagementModel[];
  };
  methodologySection?: {
    eyebrow?: string;
    title: string;
    intro?: string;
    phases: PhaseBlock[];
  };
  productSection?: {
    title: string;
    intro?: string;
    groups: ProductGroup[];
  };
  whyChooseSection: {
    title: string;
    intro?: string;
    blocks: WhyChooseBlock[];
  };
  ctaSection?: {
    title: string;
    paragraphs: string[];
    buttonLabel: string;
    buttonHref: string;
  };
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 mt-3">
      {items.map((item) => (
        <li key={item} className="text-[#5A6078] text-sm leading-relaxed flex gap-2">
          <span className="text-fort-purple mt-1.5 shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DarkBulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 mt-3">
      {items.map((item) => (
        <li key={item} className="text-white/65 text-sm leading-relaxed flex gap-2">
          <span className="text-fort-purple-light mt-1.5 shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CyberServicePageLayout({ config }: Readonly<{ config: CyberServicePageConfig }>) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[76px]">
        <section className="relative overflow-hidden bg-fort-dark border-b border-white/10">
          <img src={BRAND.images.aboutHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06021D]/92 via-[#06021D]/80 to-[#06021D]/55" />
          <div className="absolute inset-0 grid-dark opacity-35" />
          <div className="container-fort relative py-20 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-fort-purple-light text-xs uppercase tracking-[0.22em] font-semibold mb-3">{config.breadcrumb}</p>
              <h1 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight mb-4 max-w-4xl">{config.title}</h1>
              {config.heroParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-white/65 max-w-3xl mt-4 first:mt-0">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-[20px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                <img src={BRAND.images.heroVisual} alt={config.title} className="w-full h-[290px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06021D]/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-fort-light circuit-deco">
          <div className="container-fort">
            <h2 className="text-3xl font-extrabold text-[#06021D] mb-2">{config.challengeSection.title}</h2>
            <p className="text-[#5A6078] mb-8">{config.challengeSection.intro}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {config.challengeSection.items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="card-fort p-5 flex gap-3"
                >
                  <Shield className="w-4 h-4 text-fort-purple mt-1 shrink-0" />
                  <div>
                    <h3 className="text-[#06021D] font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-[#5A6078] text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {config.challengeSection.footer && (
              <p className="mt-6 text-[#06021D] font-semibold">{config.challengeSection.footer}</p>
            )}
          </div>
        </section>

        {config.servicesSection && (
          <section className="py-16 lg:py-20 bg-white">
            <div className="container-fort">
              <h2 className="text-3xl font-extrabold text-[#06021D] mb-2">{config.servicesSection.title}</h2>
              <p className="text-[#5A6078] mb-8">{config.servicesSection.intro}</p>
              <div className="grid md:grid-cols-2 gap-5">
                {config.servicesSection.blocks.map((block, idx) => (
                  <article key={block.title} className="card-fort p-6">
                    <img
                      src={idx % 2 === 0 ? BRAND.images.aboutExpertise : BRAND.images.aboutSolutions}
                      alt={block.title}
                      className="w-full h-36 object-cover rounded-xl mb-4"
                    />
                    <h3 className="text-xl font-bold text-[#06021D] mb-1">{block.title}</h3>
                    {block.subtitle && <p className="text-fort-purple text-sm font-semibold mb-3">{block.subtitle}</p>}
                    {block.text && <p className="text-[#5A6078] text-sm leading-relaxed">{block.text}</p>}
                    {block.items && block.items.length > 0 && <BulletList items={block.items} />}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {config.engagementSection && (
          <section className="py-16 lg:py-20 bg-fort-dark relative overflow-hidden">
            <div className="absolute inset-0 grid-dark opacity-25" />
            <div className="container-fort relative">
              <h2 className="text-3xl font-extrabold text-white mb-8">{config.engagementSection.title}</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {config.engagementSection.models.map((model) => (
                  <div key={model.title} className="glass-dark rounded-2xl p-6">
                    <h3 className="text-white text-lg font-bold mb-2">{model.title}</h3>
                    <p className="text-fort-purple-light text-sm font-semibold mb-3">Ideal for: {model.idealFor}</p>
                    <DarkBulletList items={model.items} />
                    <p className="text-white/80 text-sm font-semibold mt-4">Output: {model.output}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {config.methodologySection && (
          <section className="py-16 lg:py-20 bg-fort-dark relative overflow-hidden">
            <div className="absolute inset-0 grid-dark opacity-25" />
            <div className="container-fort relative">
              {config.methodologySection.eyebrow && (
                <p className="text-fort-purple-light font-semibold mb-2">{config.methodologySection.eyebrow}</p>
              )}
              <h2 className="text-3xl font-extrabold text-white mb-4">{config.methodologySection.title}</h2>
              {config.methodologySection.intro && (
                <p className="text-white/65 max-w-4xl mb-8">{config.methodologySection.intro}</p>
              )}
              <div className="grid md:grid-cols-2 gap-4">
                {config.methodologySection.phases.map((phase) => (
                  <div key={phase.title} className="glass-dark rounded-2xl p-5">
                    <h3 className="text-white font-bold mb-3">{phase.title}</h3>
                    <DarkBulletList items={phase.items} />
                    {phase.deliverable && (
                      <p className="text-fort-purple-light text-sm font-semibold mt-4">Deliverable: {phase.deliverable}</p>
                    )}
                    {phase.output && (
                      <p className="text-white/75 text-sm font-semibold mt-4">Output: {phase.output}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {config.productSection && (
          <section className="py-16 lg:py-20 bg-white">
            <div className="container-fort">
              <h2 className="text-3xl font-extrabold text-[#06021D] mb-2">{config.productSection.title}</h2>
              {config.productSection.intro && <p className="text-[#5A6078] mb-8">{config.productSection.intro}</p>}
              <div className="grid md:grid-cols-2 gap-5">
                {config.productSection.groups.map((group) => (
                  <div key={group.title} className="card-fort p-6">
                    <h3 className="text-lg font-bold text-[#06021D] mb-3">{group.title}</h3>
                    <BulletList items={group.items} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 lg:py-20 bg-fort-light">
          <div className="container-fort">
            <h2 className="text-3xl font-extrabold text-[#06021D] mb-2">{config.whyChooseSection.title}</h2>
            {config.whyChooseSection.intro && (
              <p className="text-[#5A6078] mb-8">{config.whyChooseSection.intro}</p>
            )}
            <div className="space-y-3">
              {config.whyChooseSection.blocks.map((block) => (
                <div key={block.title} className="card-fort p-5">
                  <h3 className="text-[#06021D] text-lg font-bold mb-1">{block.title}</h3>
                  {block.text && <p className="text-[#5A6078] text-sm mb-2">{block.text}</p>}
                  {block.items && block.items.length > 0 && <BulletList items={block.items} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {config.ctaSection && (
          <section className="py-16 lg:py-20 bg-fort-dark relative overflow-hidden">
            <div className="absolute inset-0 grid-dark opacity-25" />
            <div className="container-fort relative text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-white mb-4">{config.ctaSection.title}</h2>
              {config.ctaSection.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-white/65 text-sm leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              <Link to={config.ctaSection.buttonHref} className="btn-fort px-8 py-3.5 inline-flex items-center gap-2">
                {config.ctaSection.buttonLabel} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
