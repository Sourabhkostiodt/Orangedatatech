import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND } from '../constants/brand';
import { serviceMenuGroups } from '../data/serviceMenu';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[76px]">
        <section className="relative overflow-hidden border-b border-white/10">
          <img src={BRAND.images.aboutHero} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06021D]/92 via-[#06021D]/78 to-[#06021D]/58" />
          <div className="absolute inset-0 grid-dark opacity-35" />
          <div className="container-fort relative py-18 lg:py-24">
            <p className="text-fort-purple-light text-xs uppercase tracking-[0.22em] font-semibold mb-4">Orange Data Tech / Services</p>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-[3rem] font-extrabold leading-tight max-w-4xl mb-5">Services</h1>
            <p className="text-white/65 text-base max-w-3xl">
              Full-cycle software development, data analytics, and cybersecurity services to accelerate innovation, strengthen identity security, and deliver measurable business value.
            </p>
          </div>
        </section>

        <section className="bg-fort-light text-[#06021D] py-14 lg:py-18 circuit-deco">
          <div className="container-fort space-y-12">
            {serviceMenuGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.05 }}
              >
                <h2 className="text-2xl font-extrabold mb-5">{group.title}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="card-fort p-5 card-hover-lift group flex flex-col h-full"
                    >
                      <h3 className="text-[#06021D] font-bold text-sm mb-2 group-hover:text-fort-purple transition-colors">{item.label}</h3>
                      {item.description && (
                        <p className="text-[#5A6078] text-[13px] leading-relaxed flex-1">{item.description}</p>
                      )}
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-fort-purple mt-4 group-hover:gap-2.5 transition-all">
                        View Service <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}

            <div className="rounded-[24px] p-8 lg:p-10 bg-fort-dark text-white">
              <h3 className="text-2xl font-extrabold mb-3">Need help choosing the right service?</h3>
              <p className="text-white/60 text-sm mb-6 max-w-2xl">
                Talk with our team and we will map the right solution for your current business goals, tech stack, and delivery timeline.
              </p>
              <Link to="/contact-us" className="btn-fort inline-flex items-center gap-2">
                Talk to an Expert <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
