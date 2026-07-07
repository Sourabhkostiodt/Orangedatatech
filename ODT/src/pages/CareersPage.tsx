import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, ArrowRight, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND } from '../constants/brand';

type Job = {
  title: string;
  location: string;
  country: 'India' | 'United States';
  overview: string;
  responsibilities: string[];
  skills: string[];
};

const jobs: Job[] = [
  {
    title: 'Data Quality Engineer',
    location: 'Indore (On-site)',
    country: 'India',
    overview:
      'Responsible for ensuring accuracy, consistency, reliability, and integrity of data across systems and pipelines.',
    responsibilities: [
      'Design and maintain data quality frameworks and validation checks.',
      'Perform reconciliation, anomaly detection, and root-cause analysis.',
      'Embed quality checks into ETL/ELT workflows and monitor metrics.',
    ],
    skills: ['4+ years experience', 'Strong SQL + Python', 'ETL/ELT and data warehouse knowledge'],
  },
  {
    title: 'Full Stack Developer',
    location: 'Indore (On-site)',
    country: 'India',
    overview:
      'Build scalable, high-quality web applications with strong modern frontend and backend capabilities.',
    responsibilities: [
      'Develop web applications, backend services, and REST APIs.',
      'Build responsive UI components using React.js or similar.',
      'Troubleshoot, optimize, test, and support CI/CD releases.',
    ],
    skills: ['4-6 years experience', 'JavaScript/HTML/CSS + React.js', 'Python backend exposure and Git/Agile'],
  },
  {
    title: 'Java Full Stack Developer',
    location: 'Indore (On-site)',
    country: 'India',
    overview:
      'Design and deliver scalable full-stack applications with strong Java backend and modern frontend architecture.',
    responsibilities: [
      'Develop and deploy full-stack features and APIs.',
      'Work with relational/NoSQL databases and integration layers.',
      'Ensure code quality through reviews, testing, and automation.',
    ],
    skills: ['4-6 years experience', 'Java Spring Boot + React.js', 'CI/CD and cloud exposure'],
  },
  {
    title: 'Python Developer',
    location: 'Indore (On-site)',
    country: 'India',
    overview:
      'Design and maintain scalable backend services and APIs using Django/DRF or FastAPI.',
    responsibilities: [
      'Build RESTful APIs and maintain clean Python code.',
      'Design relational schemas and secure auth flows.',
      'Support containerization and CI/CD integration.',
    ],
    skills: ['4+ years Python', 'Django/DRF or FastAPI', 'PostgreSQL/MySQL + Docker + Git'],
  },
  {
    title: 'Power BI Developer',
    location: 'Indore (On-site)',
    country: 'India',
    overview:
      'Develop robust dashboards, data models, and analytical reports that drive business decisions.',
    responsibilities: [
      'Build and deploy Power BI dashboards and reports.',
      'Develop DAX measures and optimize model performance.',
      'Integrate diverse sources and maintain reporting governance.',
    ],
    skills: ['4+ years BI experience', 'Power BI + DAX + SQL', 'Data modeling and ETL understanding'],
  },
  {
    title: 'Cloud Data Engineer',
    location: 'India',
    country: 'India',
    overview:
      'Build and optimize scalable cloud-native ETL/ELT solutions across modern data platforms.',
    responsibilities: [
      'Develop cloud data workflows, data lakes, and warehouse models.',
      'Optimize pipeline reliability, scalability, and cost.',
      'Apply governance, security, and compliance best practices.',
    ],
    skills: ['4+ years data engineering', 'SQL + Python', 'AWS/Azure/GCP services and Spark/Kafka exposure'],
  },
  {
    title: 'Technical Architect',
    location: 'India',
    country: 'India',
    overview:
      'Own end-to-end architecture and convert business requirements into secure, scalable technical solutions.',
    responsibilities: [
      'Define architecture, data flows, integrations, and stack decisions.',
      'Guide teams on design patterns, standards, and quality.',
      'Identify technical risks and lead mitigation strategies.',
    ],
    skills: ['8-10 years engineering', 'Strong Python and cloud architecture', 'APIs, microservices, SQL/NoSQL'],
  },
  {
    title: 'Functional Project Manager',
    location: 'India / US collaboration',
    country: 'India',
    overview:
      'Lead end-to-end delivery for customer-facing projects, including backlog, sprints, and release planning.',
    responsibilities: [
      'Own communication with customers and stakeholders.',
      'Drive sprint planning, WBS/task tracking, and risk management.',
      'Ensure alignment between business requirements and engineering.',
    ],
    skills: ['6-10 years delivery management', 'Agile/Scrum + stakeholder handling', 'Strong communication with US clients'],
  },
  {
    title: 'Qlikview Developer',
    location: 'Chicago',
    country: 'United States',
    overview:
      'Develop and support Qlik-based dashboards/reports and translate user requirements into BI solutions.',
    responsibilities: [
      'Develop, design, and test BI reports and dashboards.',
      'Gather data/report requirements and produce functional design docs.',
      'Maintain Qlikview/Qlik Sense environment and support users.',
    ],
    skills: ['Qlikview/Qlik Sense + NPrinting', 'Data analysis/modeling', 'Strong communication skills'],
  },
  {
    title: 'VP Sales',
    location: 'NJ / NY / FL',
    country: 'United States',
    overview:
      'Lead enterprise software sales strategy, close complex deals, and build CXO-level relationships.',
    responsibilities: [
      'Define sales strategy and align team targets to business goals.',
      'Lead negotiations with customers and internal teams.',
      'Coach team and drive profitable revenue growth.',
    ],
    skills: ['5+ years sales management', 'Complex software deal closure', 'CXO relationship development'],
  },
];

export default function CareersPage() {
  const [activeCountry, setActiveCountry] = useState<'India' | 'United States'>('India');
  const [openJob, setOpenJob] = useState<string | null>(jobs[0]?.title ?? null);
  const [selectedRole, setSelectedRole] = useState('');
  const [roleOpen, setRoleOpen] = useState(false);
  const roleRef = useRef<HTMLDivElement>(null);
  const filteredJobs = jobs.filter((job) => job.country === activeCountry);
  const inputClass =
    'w-full px-5 py-3.5 bg-[#0D0828] border border-fort-purple/35 rounded-[14px] text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-fort-purple transition-colors';

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (roleRef.current && !roleRef.current.contains(event.target as Node)) {
        setRoleOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

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
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple-light mb-4 block">Career</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-tight mb-5">Join Our Forward-Thinking</h1>
            <p className="text-white/55 text-base max-w-3xl mx-auto">
              We are an experienced, forward-thinking team of software engineers shaping a new reality with exciting ideas and cutting-edge technology. Join us and get new opportunities for career growth.
            </p>
            <div className="flex justify-center gap-3 mt-8">
              <button
                type="button"
                onClick={() => setActiveCountry('India')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors ${
                  activeCountry === 'India'
                    ? 'bg-fort-purple text-white'
                    : 'border border-white/20 text-white/80 hover:bg-white/10'
                }`}
              >
                India
              </button>
              <button
                type="button"
                onClick={() => setActiveCountry('United States')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors ${
                  activeCountry === 'United States'
                    ? 'bg-fort-purple text-white'
                    : 'border border-white/20 text-white/80 hover:bg-white/10'
                }`}
              >
                United State
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-fort-light circuit-deco">
          <div className="container-fort">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple mb-3 block">Open Positions</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06021D]">Current Career Opportunities</h2>
            </div>

            <div className="space-y-5">
              {filteredJobs.map((job, i) => {
                const isOpen = openJob === job.title;
                return (
                  <motion.article
                    key={job.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="card-fort p-6 lg:p-8 hover:shadow-[0_12px_40px_rgba(244,121,32,0.1)] hover:border-fort-purple/20 transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenJob(isOpen ? null : job.title)}
                      className="w-full text-left"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-xl font-extrabold text-[#06021D] mb-2">{job.title}</h3>
                          <p className="text-[#06021D] text-sm font-medium flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-fort-purple" /> {job.location}
                          </p>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-fort-purple mt-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </div>
                      <p className="text-[#5A6078] text-sm leading-relaxed">{job.overview}</p>
                    </button>

                    {isOpen && (
                      <>
                        <div className="mt-5 mb-4">
                          <h4 className="text-[#06021D] font-bold text-sm mb-2">Key Responsibilities</h4>
                          <ul className="space-y-1.5">
                            {job.responsibilities.map((item) => (
                              <li key={item} className="text-[#5A6078] text-sm">- {item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-5">
                          <h4 className="text-[#06021D] font-bold text-sm mb-2">Required Skills & Experience</h4>
                          <ul className="space-y-1.5">
                            {job.skills.map((item) => (
                              <li key={item} className="text-[#5A6078] text-sm">- {item}</li>
                            ))}
                          </ul>
                        </div>

                        <a href="#career-form" className="inline-flex items-center justify-center gap-2 btn-fort text-sm px-6 py-3">
                          <Briefcase className="w-4 h-4" /> Apply Now
                        </a>
                      </>
                    )}
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-14 rounded-[24px] p-8 lg:p-10 bg-[#0D0828]/95 border border-white/10 backdrop-blur-md"
            >
              <h3 className="text-white font-bold text-2xl mb-2">Be part of our mission</h3>
              <p className="text-white/55 text-sm mb-8 max-w-xl">
                Share your profile and resume with us. We are always looking for forward-thinking people who want to build impactful data products.
              </p>
              <form id="career-form" className="space-y-5 text-left">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Name <span className="text-fort-purple">*</span>
                    </label>
                    <input className={inputClass} placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email Address <span className="text-fort-purple">*</span>
                    </label>
                    <input className={inputClass} placeholder="you@company.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Phone <span className="text-fort-purple">*</span>
                    </label>
                    <input className={inputClass} placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Street Address</label>
                    <input className={inputClass} placeholder="Street address" />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Select Role <span className="text-fort-purple">*</span>
                  </label>
                  <div ref={roleRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setRoleOpen((s) => !s)}
                      className={`${inputClass} text-left flex items-center justify-between`}
                      aria-haspopup="listbox"
                      aria-expanded={roleOpen}
                    >
                      <span className={selectedRole ? 'text-white' : 'text-white/30'}>
                        {selectedRole || 'Select role'}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-fort-purple-light transition-transform ${roleOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {roleOpen && (
                      <div
                        role="listbox"
                        className="absolute z-30 mt-2 w-full max-h-64 overflow-auto rounded-[14px] border border-fort-purple/35 bg-[#0D0828] shadow-[0_15px_35px_rgba(0,0,0,0.45)]"
                      >
                        {jobs.map((job) => (
                          <button
                            key={job.title}
                            type="button"
                            role="option"
                            aria-selected={selectedRole === job.title}
                            onClick={() => {
                              setSelectedRole(job.title);
                              setRoleOpen(false);
                            }}
                            className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                              selectedRole === job.title
                                ? 'bg-fort-purple text-white'
                                : 'text-white/85 hover:bg-white/8'
                            }`}
                          >
                            {job.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Upload CV</label>
                  <input className={inputClass} placeholder="Upload CV (link or filename)" />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 rounded border-white/20 bg-[#0D0828] text-fort-purple focus:ring-fort-purple/40"
                    required
                  />
                  <span className="text-white/45 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                    I agree that my submitted data is being{' '}
                    <span className="text-fort-purple-light underline underline-offset-2">collected and stored</span>.
                  </span>
                </label>

                <button type="button" className="btn-fort inline-flex items-center gap-2 text-sm px-8 py-3.5 justify-center w-full">
                  Send <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
