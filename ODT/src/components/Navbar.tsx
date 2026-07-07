import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const links = [
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Services',
    href: '/services',
    sub: [
      { label: 'Services Overview', href: '/services' },
      { label: 'Mobile App Development', href: '/services/mobile-app-development-services' },
      { label: 'Data Analytics Overview', href: '/services/data-analytics' },
      { label: 'Data Analytics for Finance', href: '/services/data-analytics/dataanalytics-for-finance' },
      { label: 'Data Analytics for Marketing', href: '/services/data-analytics/data-analytics-for-marketing' },
      { label: 'Data Analytics for Sales', href: '/services/data-analytics/data-analytics-for-sales' },
      { label: 'Data Analytics for Risk', href: '/services/data-analytics/data-analytics-for-risk-management' },
      { label: 'Cybersecurity Overview', href: '/cybersecurity' },
      { label: 'IAM Managed Services', href: '/cybersecurity/services' },
      { label: 'IAM Professional Services', href: '/cybersecurity/services/professional-services' },
      { label: 'Managed Identity Services', href: '/cybersecurity/services/managed-identity-services' },
      { label: 'Strategic Consulting', href: '/cybersecurity/services/strategic-consulting' },
      { label: 'IAM Solutions', href: '/cybersecurity/solutions' },
      { label: 'Access Management Services', href: '/cybersecurity/solutions/access-management' },
    ],
  },
  {
    label: 'Technologies',
    href: '/technologies',
    sub: [
      { label: 'Technologies Home', href: '/technologies' },
      { label: 'Embedded Analytics', href: '/technologies/bi-tech/embedded-analytics' },
      { label: 'Embedded Analytics with Power BI', href: '/technologies/bi-tech/embedded-analytics-with-powerbi' },
      { label: 'Data Engineering', href: '/technologies/data-engineering-services' },
      { label: 'Azure Data Factory', href: '/technologies/data-engineering-services/azure-data-factory' },
      { label: 'Advanced Analytics with Azure SQL', href: '/technologies/data-engineering-services/advanced-analytics-with-azure-sql' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Teams', href: '/team' },
  { label: 'Careers', href: '/careers' },
];

const innerPages = new Set([
  '/about-us',
  '/contact-us',
  '/blog',
  '/team',
  '/careers',
  '/cybersecurity',
  '/cybersecurity/services',
  '/cybersecurity/services/professional-services',
  '/cybersecurity/services/identity-access-management-professional-services',
  '/cybersecurity/services/managed-identity-services',
  '/cybersecurity/services/strategic-consulting',
  '/cybersecurity/solutions',
  '/cybersecurity/solutions/access-management',
  '/cybersecurity/solutions/identity-governance-administration',
  '/cybersecurity/solutions/privilege-access-management',
  '/services',
  '/services/mobile-app-development-services',
  '/services/data-analytics',
  '/services/data-analytics/dataanalytics-for-finance',
  '/services/data-analytics/data-analytics-for-marketing',
  '/services/data-analytics/data-analytics-for-sales',
  '/services/data-analytics/data-analytics-for-risk-management',
  '/technologies',
  '/technologies/bi-tech/embedded-analytics',
  '/technologies/bi-tech/embedded-analytics-with-powerbi',
  '/technologies/data-engineering-services',
  '/technologies/data-engineering-services/azure-data-factory',
  '/technologies/data-engineering-services/advanced-analytics-with-azure-sql',
]);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState<string | null>(null);
  const location = useLocation();
  const isInner = innerPages.has(location.pathname);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDrop(null);
  }, [location.pathname]);

  const navBg = scrolled || isInner;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${navBg ? 'bg-[#06021D]/95 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : ''}`}>
      <nav className="container-fort flex items-center justify-between h-[76px]">
        <Link to="/"><Logo imageClassName="h-9 w-auto" /></Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <div key={l.label} className="relative">
              <Link
                to={l.href}
                className="nav-link-underline text-white/75 text-[15px] font-medium hover:text-fort-purple-light transition-colors flex items-center gap-1"
                onMouseEnter={() => l.sub && setDrop(l.label)}
                onFocus={() => l.sub && setDrop(l.label)}
              >
                {l.label}{l.sub && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
              </Link>
              <AnimatePresence>
                {l.sub && drop === l.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    onMouseEnter={() => setDrop(l.label)}
                    onMouseLeave={() => setDrop(null)}
                    className="absolute top-full left-0 mt-2 w-72 bg-[#0D0828] border border-white/10 rounded-xl py-2 shadow-2xl"
                  >
                    {l.sub.map((s) => (
                      <Link key={s.label} to={s.href} className="block px-4 py-2 text-sm text-white/60 hover:text-fort-purple-light hover:bg-white/5">
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <Link to="/contact-us" className="hidden lg:inline-flex btn-fort text-[14px] px-6 py-2.5">Get in Touch</Link>
        <button type="button" className="lg:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="lg:hidden bg-[#06021D] border-t border-white/10 overflow-hidden">
            <div className="container-fort py-4 space-y-2">
              {links.map((l) => (
                <Link key={l.label} to={l.href} className="block py-2 text-white/80" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
              {links
                .filter((l) => l.sub)
                .flatMap((l) => l.sub ?? [])
                .map((s) => (
                  <Link key={s.label} to={s.href} className="block py-2 pl-4 text-white/60 text-sm" onClick={() => setOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              <Link to="/contact-us" className="block py-3 mt-2 btn-fort text-center" onClick={() => setOpen(false)}>Get in Touch</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
