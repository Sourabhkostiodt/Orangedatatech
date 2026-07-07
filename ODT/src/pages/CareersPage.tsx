import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND } from '../constants/brand';

const jobs = [
  {
    title: 'Senior Cyber Security Analyst',
    department: 'Security Operations',
    location: 'London, UK / Hyderabad, India',
    type: 'Full-time',
    summary: 'Lead threat monitoring, incident response, and security assessments for enterprise clients across regulated industries.',
  },
  {
    title: 'Cloud Security Engineer',
    department: 'Cloud & Infrastructure',
    location: 'Remote (UK / India)',
    type: 'Full-time',
    summary: 'Design and implement secure cloud architectures, IAM policies, and continuous compliance for AWS and Azure environments.',
  },
  {
    title: 'SOC Analyst',
    department: 'Security Operations Center',
    location: 'Hyderabad, India',
    type: 'Full-time',
    summary: 'Monitor security events 24/7, triage alerts, and coordinate rapid response to protect client networks and data.',
  },
  {
    title: 'Penetration Tester',
    department: 'Offensive Security',
    location: 'London, UK',
    type: 'Contract',
    summary: 'Perform ethical hacking engagements, vulnerability assessments, and deliver actionable remediation reports to clients.',
  },
  {
    title: 'IT Security Consultant',
    department: 'Advisory',
    location: 'London, UK / Remote',
    type: 'Full-time',
    summary: 'Advise clients on risk management, compliance frameworks (ISO 27001, GDPR), and long-term cyber resilience strategies.',
  },
];

export default function CareersPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative pt-[76px] overflow-hidden bg-fort-dark">
          <div className="absolute inset-0">
            <img src={BRAND.images.aboutBg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#06021D]/92 via-[#06021D]/80 to-[#06021D]/60" />
          <div className="absolute inset-0 grid-dark opacity-30" />
          <div className="container-fort relative py-20 lg:py-28 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple-light mb-4 block"
            >
              Join our team
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-tight mb-5"
            >
              Build your career in cyber security
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.14 }}
              className="text-white/55 text-base max-w-2xl mx-auto"
            >
              Help organizations stay secure, resilient, and compliant. Explore open roles at {BRAND.name} in the UK and India.
            </motion.p>
          </div>
        </section>

        <section ref={ref} className="py-20 lg:py-28 bg-fort-light circuit-deco">
          <div className="container-fort">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple mb-3 block">Open positions</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06021D]">Current job openings</h2>
            </div>

            <div className="space-y-4">
              {jobs.map((job, i) => (
                <motion.article
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="card-fort p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 hover:shadow-[0_12px_40px_rgba(244,121,32,0.1)] hover:border-fort-purple/20 transition-all"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-fort-purple/10 text-fort-purple text-[11px] font-bold rounded-full uppercase tracking-wide">
                        {job.department}
                      </span>
                      <span className="text-[#8B8FA3] text-xs flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {job.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#06021D] mb-2">{job.title}</h3>
                    <p className="text-[#5A6078] text-sm leading-relaxed mb-3 max-w-2xl">{job.summary}</p>
                    <p className="text-[#06021D] text-sm font-medium flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-fort-purple" /> {job.location}
                    </p>
                  </div>
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center gap-2 btn-fort text-sm px-6 py-3 shrink-0"
                  >
                    <Briefcase className="w-4 h-4" /> Apply Now
                  </Link>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-14 text-center glass-dark rounded-[20px] p-8 lg:p-10 bg-[#0D0828] border border-white/10"
            >
              <h3 className="text-white font-bold text-xl mb-2">Don't see the right role?</h3>
              <p className="text-white/55 text-sm mb-6 max-w-md mx-auto">
                Send your CV to our team — we're always looking for talented security professionals in the UK and India.
              </p>
              <a href={`mailto:${BRAND.email}?subject=Career Inquiry`} className="inline-flex items-center gap-2 btn-fort-outline text-sm px-6 py-3">
                Email your resume <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
