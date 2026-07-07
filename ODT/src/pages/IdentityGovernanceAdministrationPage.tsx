import { motion } from 'framer-motion';
import {
  Shield,
  ClipboardList,
  UserPlus,
  ClipboardCheck,
  Activity,
  RefreshCw,
  UserMinus,
  BadgeCheck,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND } from '../constants/brand';

const challenges = [
  {
    title: 'Identity Sprawl',
    text: 'Managing 5-10 identities per employee across cloud apps, on-premises systems, and third-party services.',
  },
  {
    title: 'Manual Access Reviews',
    text: 'Failed IAM deployments often stem from poor user adoption, insufficient training, and inadequate change management—not technology failures.',
  },
  {
    title: 'Shadow Access',
    text: 'Unauthorized access provisioned outside IT’s visibility and control.',
  },
  {
    title: 'Limited Visibility',
    text: 'No single source of truth for who has access to what across the enterprise.',
  },
  {
    title: 'Access Creep',
    text: 'Users accumulating excessive permissions over time, with 40-60% of access being unnecessary or outdated.',
  },
  {
    title: 'Compliance Burden',
    text: 'Struggling to demonstrate who has access to sensitive data for SOX, GDPR, HIPAA, and SOC 2 audits.',
  },
  {
    title: 'Slow Provisioning',
    text: 'New employees waiting days or weeks for access, impacting productivity.',
  },
  {
    title: 'Orphaned Accounts',
    text: 'Former employees retaining active credentials months after departure, creating security vulnerabilities.',
  },
  {
    title: 'Segregation of Duties Violations',
    text: 'Toxic combinations of access that enable fraud or errors going undetected.',
  },
  {
    title: 'Role Management Complexity',
    text: 'Outdated or bloated roles that no longer reflect actual job functions.',
  },
];

const services = [
  {
    title: 'Advisory & Strategy Services',
    subtitle: 'Build the Right IGA Foundation',
    text: 'We assess your current identity governance posture, design a comprehensive strategy aligned with business objectives, and create a practical roadmap for implementation.',
  },
  {
    title: 'Managed IGA Services',
    subtitle: 'Your Ongoing Identity Governance Team',
    text: 'Focus on your core business while our specialists handle day-to-day IGA operations, continuous optimization, and program management.',
  },
  {
    title: 'Implementation Services',
    subtitle: 'Expert Deployment, Rapid Results',
    text: 'Our certified IGA specialists handle complete platform deployment—from design through go-live—ensuring best practices, proper integration, and optimal configuration.',
  },
  {
    title: 'Compliance & Audit Support',
    subtitle: 'Audit-Ready Identity Governance',
    text: 'Ensure continuous compliance and pass audits confidently with expert preparation, evidence collection, and regulatory expertise.',
  },
];

const controls = [
  { label: '1. Identity Onboarding', Icon: UserPlus },
  { label: '2. Access Request & Approval', Icon: ClipboardList },
  { label: '3. Continuous Monitoring', Icon: Activity },
  { label: '4. Periodic Certification', Icon: ClipboardCheck },
  { label: '5. Automatic Access Modification', Icon: RefreshCw },
  { label: '6. Immediate Deprovisioning', Icon: UserMinus },
  { label: '7. Comprehensive Audit & Compliance', Icon: BadgeCheck },
];

const whyChoose = [
  {
    title: 'Proven Methodology',
    text: 'Our structured approach, developed across multiple IGA implementations, ensures predictable outcomes and rapid value delivery.',
  },
  {
    title: 'Long-Term Partnership',
    text: 'We invest in your success with ongoing optimization, strategic guidance, and program evolution support.',
  },
  {
    title: 'Certified Specialists',
    text: 'Team having multiple years of identity governance experience across multiple platforms and certifications.',
  },
  {
    title: 'Vendor Independence',
    text: 'We recommend and implement the best IGA solution for your needs without vendor bias or sales quotas.',
  },
  {
    title: 'Transparent Pricing',
    text: 'Clear, predictable pricing with no hidden costs—fixed-price implementations and straightforward managed service fees.',
  },
];

export default function IdentityGovernanceAdministrationPage() {
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
              <p className="text-fort-purple-light text-xs uppercase tracking-[0.22em] font-semibold mb-3">
                Cybersecurity / Solutions
              </p>
              <h1 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight mb-4 max-w-4xl">
                Know Who Has Access to What. Control It. Prove It.
              </h1>
              <p className="text-white/65 max-w-3xl">
                Transform identity chaos into governance clarity with intelligent IGA solutions that automate access management, enforce compliance, and eliminate security blind spots.
              </p>
              <p className="text-white/60 max-w-3xl mt-4">
                In an era where the average enterprise manages thousands of identities across hundreds of applications, maintaining visibility and control over who can access what has become mission-critical. The Identity Governance and Administration platform automates the entire identity lifecycle, enforces least-privilege access, and provides audit-ready evidence to prove compliance—all while reducing operational costs and security risks.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-[20px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                <img src={BRAND.images.heroVisual} alt="Identity governance" className="w-full h-[290px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06021D]/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-fort-light circuit-deco">
          <div className="container-fort">
            <h2 className="text-3xl font-extrabold text-[#06021D] mb-2">The Identity Governance Challenge</h2>
            <p className="text-[#5A6078] mb-8">
              Is Your Organization Struggling with These IGA Pain Points? As digital transformation accelerates and hybrid work becomes the norm, organizations face unprecedented identity governance challenges.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {challenges.map((item, i) => (
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
            <p className="mt-6 text-[#06021D] font-semibold">
              82% of data breaches involve compromised credentials or excessive access privileges. Without proper identity governance, you&apos;re not just non-compliant—you&apos;re vulnerable.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white">
          <div className="container-fort">
            <h2 className="text-3xl font-extrabold text-[#06021D] mb-2">Our IGA Services</h2>
            <p className="text-[#5A6078] mb-8">Comprehensive Identity Governance Services</p>
            <div className="grid md:grid-cols-2 gap-5">
              {services.map((service, idx) => (
                <article key={service.title} className="card-fort p-6">
                  <img
                    src={idx % 2 === 0 ? BRAND.images.aboutExpertise : BRAND.images.aboutSolutions}
                    alt={service.title}
                    className="w-full h-36 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-xl font-bold text-[#06021D] mb-1">{service.title}</h3>
                  <p className="text-fort-purple text-sm font-semibold mb-3">{service.subtitle}</p>
                  <p className="text-[#5A6078] text-sm leading-relaxed">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-fort-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-dark opacity-25" />
          <div className="container-fort relative">
            <p className="text-fort-purple-light font-semibold mb-2">The Foundation of Identity Security</p>
            <h2 className="text-3xl font-extrabold text-white mb-4">What is Identity Governance and Administration (IGA)?</h2>
            <p className="text-white/65 max-w-4xl mb-8">
              Identity Governance and Administration (IGA) is a comprehensive cybersecurity framework that combines identity lifecycle management with access governance to ensure the right individuals have appropriate access to the right resources at the right time—and for the right reasons. IGA provides centralized visibility, policy-based automation, and audit-ready evidence across your entire digital identity landscape.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {controls.map(({ label, Icon }) => (
                <div key={label} className="glass-dark rounded-2xl p-4 text-sm text-white/80">
                  <Icon className="w-5 h-5 text-fort-purple-light mb-2" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-fort-light">
          <div className="container-fort">
            <h2 className="text-3xl font-extrabold text-[#06021D] mb-6">Why Choose Us?</h2>
            <div className="space-y-3">
              {whyChoose.map((item) => (
                <div key={item.title} className="card-fort p-5">
                  <h3 className="text-[#06021D] text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-[#5A6078] text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
