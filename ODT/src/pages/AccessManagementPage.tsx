import { motion } from 'framer-motion';
import { Shield, KeyRound, LockKeyhole, Eye, Fingerprint, ClipboardCheck, BadgeCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND } from '../constants/brand';

const challenges = [
  {
    title: 'Password Fatigue & Help Desk Overload',
    text: '20-50% of help desk calls are password-related, draining IT resources and frustrating users.',
  },
  {
    title: 'Compliance Complexity',
    text: 'Meeting regulatory requirements like SOC 2, GDPR, HIPAA, and PCI-DSS for access controls and authentication.',
  },
  {
    title: 'MFA Adoption Barriers',
    text: 'User resistance to multi-factor authentication due to complexity or inconvenience.',
  },
  {
    title: 'Third-Party Access',
    text: 'Managing contractor, partner, and vendor authentication without compromising security.',
  },
  {
    title: 'Security Blind Spots',
    text: 'Limited visibility into authentication activities across cloud apps, on-premises systems, and hybrid environments.',
  },
  {
    title: 'Poor User Experience',
    text: 'Multiple login prompts across applications are reducing productivity and user satisfaction.',
  },
  {
    title: 'Integration Headaches',
    text: 'Managing access across disconnected systems, legacy applications, and modern cloud platforms.',
  },
  {
    title: 'Credential-Based Attacks',
    text: '80% of breaches involve compromised credentials through phishing, password spraying, or credential stuffing.',
  },
  {
    title: 'Excessive Permissions',
    text: 'Users retaining access long after job changes, creating unnecessary risk exposure.',
  },
  {
    title: 'Shadow IT',
    text: 'Unmanaged applications and unauthorized access create security vulnerabilities.',
  },
];

const services = [
  {
    title: 'Advisory & Strategy Services',
    subtitle: 'Build the Right Access Management Foundation',
    text: 'We assess your current authentication and authorization landscape, design a comprehensive strategy aligned with business objectives, and create a practical roadmap for implementation.',
  },
  {
    title: 'Managed Access Management Services',
    subtitle: 'Your Ongoing Access Management Team',
    text: 'Focus on your core business while our specialists handle day-to-day access management operations, continuous optimization, and program management.',
  },
  {
    title: 'Implementation Services',
    subtitle: 'Expert Deployment, Rapid Results',
    text: 'Our certified access management specialists handle complete platform deployment from design through go-live, ensuring best practices, proper integration, and optimal configuration.',
  },
  {
    title: 'Compliance & Audit Support',
    subtitle: 'Audit-Ready Access Controls',
    text: 'Ensure continuous compliance and pass audits confidently with expert preparation, evidence collection, and regulatory expertise.',
  },
];

const controls = [
  { label: '1. User Authentication', Icon: KeyRound },
  { label: '2. Multi-Factor Verification', Icon: Shield },
  { label: '3. Single Sign-On (SSO)', Icon: Fingerprint },
  { label: '4. Session Monitoring', Icon: Eye },
  { label: '5. Adaptive Authentication', Icon: LockKeyhole },
  { label: '6. Comprehensive Audit & Logging', Icon: ClipboardCheck },
  { label: '7. Authorization & Policy Enforcement', Icon: BadgeCheck },
];

const whyChoose = [
  {
    title: 'Proven Methodology',
    text: 'Our structured approach, developed across multiple access management implementations, ensures predictable outcomes and rapid value delivery.',
  },
  {
    title: 'Vendor Independence',
    text: 'We recommend and implement the best access management solution for your needs without vendor bias or sales quotas.',
  },
  {
    title: 'Certified Specialists',
    text: 'Team having multiple years of access management experience across multiple platforms and certifications.',
  },
  {
    title: 'Transparent Pricing',
    text: 'Clear, predictable pricing with no hidden costs. Fixed-price implementations and straightforward managed service fees.',
  },
  {
    title: 'Long-Term Partnership',
    text: 'We invest in your success with ongoing optimization, strategic guidance, and program evolution support.',
  },
];

export default function AccessManagementPage() {
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
                Secure Every Access Point. Empower Every User
              </h1>
              <p className="text-white/65 max-w-3xl">
                Transform your organization&apos;s security posture with intelligent access management solutions that deliver seamless user experiences while maintaining enterprise-grade security and compliance.
              </p>
            <p className="text-white/60 max-w-3xl mt-4">
              In today&apos;s hybrid work environment, users need instant, secure access to critical resources from anywhere, on any device. The Access Management platform provides frictionless authentication through single sign-on and enforces security with Multi-Factor Authentication, and enables passwordless experiences while reducing help desk burden, ensuring compliance, and protecting against credential-based attacks.
            </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-[20px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                <img src={BRAND.images.heroVisual} alt="Access management" className="w-full h-[290px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06021D]/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-fort-light circuit-deco">
          <div className="container-fort">
            <h2 className="text-3xl font-extrabold text-[#06021D] mb-2">The Access Management Challenge</h2>
            <p className="text-[#5A6078] mb-8">
              Are You Struggling with These Access Management Pain Points? Modern organizations face unprecedented challenges in securing digital identities and managing access across distributed environments.
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
              More than 50% of security breaches involve compromised credentials. Without modern access management, you&apos;re leaving your organization vulnerable.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white">
          <div className="container-fort">
            <h2 className="text-3xl font-extrabold text-[#06021D] mb-2">Our Access Management Services</h2>
            <p className="text-[#5A6078] mb-8">Comprehensive Access Management Services</p>
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
            <p className="text-fort-purple-light font-semibold mb-2">Your First Line of Digital Defense</p>
            <h2 className="text-3xl font-extrabold text-white mb-4">What is Access Management?</h2>
            <p className="text-white/65 max-w-4xl mb-8">
              Access Management is a comprehensive cybersecurity framework that controls and monitors how users authenticate and gain authorization to access digital resources. It encompasses the technologies, policies, and processes that verify user identity (authentication), determine appropriate access levels (authorization), and maintain detailed audit trails of all access activities, ensuring the right users access the right resources securely and seamlessly.
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
