import { motion } from 'framer-motion';
import {
  Shield,
  KeyRound,
  Search,
  LockKeyhole,
  Timer,
  MonitorPlay,
  RotateCw,
  ClipboardCheck,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND } from '../constants/brand';

const challenges = [
  {
    title: 'Credential Theft & Abuse',
    text: '80% of data breaches involve compromised privileged credentials, with average costs exceeding $4.5 million.',
  },
  {
    title: 'Excessive Standing Privileges',
    text: 'Administrators with 24/7 access to production systems when they only need it occasionally.',
  },
  {
    title: 'Shadow Admin Accounts',
    text: 'Unknown or forgotten privileged accounts creating hidden security vulnerabilities.',
  },
  {
    title: 'Cloud & DevOps Explosion',
    text: 'Rapid proliferation of cloud admin accounts and DevOps secrets multiplying the attack surface.',
  },
  {
    title: 'Insider Threat',
    text: 'Malicious or negligent employees with legitimate high-level access causing data leaks.',
  },
  {
    title: 'Shared Admin Passwords',
    text: 'Multiple users knowing and using the same admin password, creating accountability nightmares.',
  },
  {
    title: 'Unmonitored Sessions',
    text: 'No visibility into what administrators actually do once they access critical systems.',
  },
  {
    title: 'Manual Management',
    text: 'IT teams tracking admin passwords in spreadsheets or shared files instead of secure vaults.',
  },
  {
    title: 'Compliance Gaps',
    text: 'Inability to demonstrate who accessed what sensitive systems and when for internal or external audits.',
  },
  {
    title: 'Hardcoded Credentials',
    text: 'Embedded passwords in scripts, applications, and configuration files that are never rotated or secured.',
  },
  {
    title: 'Third-Party Vendor Access',
    text: 'Contractors, MSPs, and vendors with broad privileged access and minimal oversight.',
  },
  {
    title: 'Slow Credential Rotation',
    text: 'Static passwords unchanged for months or years, significantly increasing the exposure window.',
  },
  {
    title: 'Lateral Movement Risk',
    text: 'Attackers inside your network easily escalate privileges and move horizontally between systems.',
  },
];

const services = [
  {
    title: 'Advisory & Strategy Services',
    subtitle: 'Build the Right PAM Foundation',
    text: 'We assess your current privileged access landscape, identify critical risks, design a comprehensive strategy aligned with business objectives, and create a practical roadmap for implementation.',
  },
  {
    title: 'Managed PAM Services',
    subtitle: 'Your Ongoing Privileged Security Team',
    text: 'Focus on your core business while our specialists handle day-to-day PAM operations, privileged session monitoring, credential rotation, and continuous optimization.',
  },
  {
    title: 'Implementation Services',
    subtitle: 'Expert Deployment, Rapid Results',
    text: 'Our certified PAM specialists handle complete platform deployment—from design through go-live—ensuring best practices, proper integration, and optimal configuration.',
  },
  {
    title: 'Compliance & Audit Support',
    subtitle: 'Audit-Ready Privileged Access Controls',
    text: 'Ensure continuous compliance and pass audits confidently with expert preparation, privileged activity evidence collection, and regulatory expertise for SOX, PCI-DSS, HIPAA, and other frameworks.',
  },
];

const controls = [
  { label: '1. Discovery & Inventory of Privileged Accounts', Icon: Search },
  { label: '2. Secure Credential Vaulting & Encryption', Icon: LockKeyhole },
  { label: '3. Just-in-Time (JIT) Access Provisioning', Icon: Timer },
  { label: '4. Multi-Factor Authentication for Privileged Access', Icon: KeyRound },
  { label: '5. Privileged Session Monitoring & Recording', Icon: MonitorPlay },
  { label: '6. Automated Credential Rotation', Icon: RotateCw },
  { label: '7. Comprehensive Audit Trails & Compliance Reporting', Icon: ClipboardCheck },
];

const whyChoose = [
  {
    title: 'Proven Methodology',
    text: 'Our structured approach, developed across multiple PAM implementations, ensures predictable outcomes and rapid value delivery.',
  },
  {
    title: 'Long-Term Partnership',
    text: 'We invest in your success with ongoing optimization, strategic guidance, and program evolution support.',
  },
  {
    title: 'Certified Specialists',
    text: 'Team having multiple years of privileged access management experience across multiple platforms and certifications.',
  },
  {
    title: 'Vendor Independence',
    text: 'We recommend and implement the best PAM solution for your needs without vendor bias or sales quotas.',
  },
  {
    title: 'Transparent Pricing',
    text: 'Clear, predictable pricing with no hidden costs—fixed-price implementations and straightforward managed service fees.',
  },
];

export default function PrivilegeAccessManagementPage() {
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
                Secure Your Most Powerful Accounts. Protect Your Greatest Assets.
              </h1>
              <p className="text-white/65 max-w-3xl">
                Eliminate your #1 attack vector with enterprise-grade Privileged Access Management that secures, monitors, and controls every elevated permission across your IT infrastructure.
              </p>
              <p className="text-white/60 max-w-3xl mt-4">
                A large number of security breaches involve compromised privileged credentials. Your privileged accounts—from admin access to service accounts—hold the keys to your most critical systems and sensitive data. The Privileged Access Management platform ensures these powerful credentials never fall into the wrong hands, providing comprehensive protection through intelligent vaulting, session monitoring, and just-in-time access controls—all while reducing operational complexity and ensuring compliance.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-[20px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                <img src={BRAND.images.heroVisual} alt="Privileged access management" className="w-full h-[290px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06021D]/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-fort-light circuit-deco">
          <div className="container-fort">
            <h2 className="text-3xl font-extrabold text-[#06021D] mb-2">The Privileged Access Management Challenge</h2>
            <p className="text-[#5A6078] mb-8">
              Is Your Organization Exposed to These Critical PAM Risks? Privileged accounts represent the highest-value targets for cyber attackers and the greatest insider threat risks for organizations.
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
              A single compromised privileged account can give attackers complete control over your entire IT infrastructure. Without robust PAM, you&apos;re not just vulnerable—you&apos;re practically inviting attackers in.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white">
          <div className="container-fort">
            <h2 className="text-3xl font-extrabold text-[#06021D] mb-2">Our Privileged Access Management Services</h2>
            <p className="text-[#5A6078] mb-8">Comprehensive Privileged Access Management Services</p>
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
            <p className="text-fort-purple-light font-semibold mb-2">Your Last Line of Defense Against Advanced Threats</p>
            <h2 className="text-3xl font-extrabold text-white mb-4">What is Privileged Access Management (PAM)?</h2>
            <p className="text-white/65 max-w-4xl mb-8">
              Privileged Access Management (PAM) is a comprehensive cybersecurity strategy that combines people, processes, and technology to secure, control, monitor, and audit all privileged accounts and activities across an enterprise IT environment. PAM enforces the principle of least privilege, ensuring users only receive the minimum access necessary to perform their job functions, while providing complete visibility and control over how that privileged access is used—protecting your most critical assets from external attackers and insider threats.
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
