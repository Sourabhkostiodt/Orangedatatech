import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import MegaMenuPanel from './MegaMenuPanel';
import NavMenuLink from './NavMenuLink';
import { useTheme } from '../context/ThemeContext';
import { serviceMegaMenuGroups } from '../data/serviceMenu';
import { technologyMenuGroups } from '../data/techMenu';
import type { ServiceMenuGroup } from '../data/serviceMenu';

type NavLink = {
  label: string;
  href: string;
  groups?: ServiceMenuGroup[];
};

const links: NavLink[] = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services', groups: serviceMegaMenuGroups },
  { label: 'Technologies', href: '/technologies', groups: technologyMenuGroups },
  { label: 'Blog', href: '/blog' },
  { label: 'Teams', href: '/team' },
  { label: 'Careers', href: '/careers' },
];

const innerPages = new Set([
  '/about-us',
  '/contact-us',
  '/blog',
  '/api-endpoints',
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
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const { theme } = useTheme();
  const isInner = innerPages.has(location.pathname) || location.pathname.startsWith('/blog/');

  const activeMega = links.find((l) => l.groups && drop === l.label);
  const isHomeTop = location.pathname === '/' && !scrolled && !drop;
  const useDarkNavChrome = theme === 'dark' || isHomeTop;
  const navBg = scrolled || isInner || drop !== null;
  const lightNavChrome = navBg && !useDarkNavChrome;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDrop(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  const headerClass = navBg
    ? lightNavChrome
      ? 'bg-white/95 backdrop-blur-md border-b border-[#E2EAF2] shadow-[0_4px_30px_rgba(6,2,29,0.08)]'
      : 'bg-[#06021D]/95 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
    : '';

  const isNavCurrent = (l: NavLink) => {
    const path = location.pathname;
    if (l.href === '/') return path === '/';
    if (l.label === 'Services') {
      return path.startsWith('/services') || path.startsWith('/cybersecurity');
    }
    if (l.label === 'Technologies') return path.startsWith('/technologies');
    if (l.label === 'Teams') return path.startsWith('/team');
    if (l.label === 'Blog') return path.startsWith('/blog');
    return path === l.href || path.startsWith(`${l.href}/`);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${headerClass}`}>
      <nav className="container-fort flex items-center justify-between h-[76px]">
        <Link to="/">
          <Logo imageClassName="h-9 w-auto" variant={useDarkNavChrome ? 'dark' : 'light'} />
        </Link>

        <div className="hidden lg:flex items-center gap-2 xl:gap-3 min-w-0 flex-1 justify-center px-3">
          {links.map((l) => (
            <div
              key={l.label}
              className="relative"
              onMouseEnter={() => l.groups && setDrop(l.label)}
              onMouseLeave={() => l.groups && setDrop(null)}
            >
              <NavMenuLink
                to={l.href}
                label={l.label}
                active={drop === l.label}
                dropdownOpen={drop === l.label}
                hasDropdown={Boolean(l.groups)}
                lightNav={lightNavChrome}
                isCurrent={isNavCurrent(l)}
              />
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <ThemeToggle lightNav={lightNavChrome} />
          <Link to="/contact-us" className="btn-fort text-[13px] px-5 py-2">
            Get in Touch
          </Link>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle lightNav={lightNavChrome} showOnMobile />
          <button
            type="button"
            className={`p-2 ${lightNavChrome ? 'text-[#06021D]' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {activeMega && (
          <motion.div
            key={activeMega.label}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="hidden lg:block absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain"
            onMouseEnter={() => setDrop(activeMega.label)}
            onMouseLeave={() => setDrop(null)}
          >
            <MegaMenuPanel
              overviewHref={activeMega.href}
              overviewLabel={`All ${activeMega.label}`}
              groups={activeMega.groups!}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className={`lg:hidden border-t overflow-hidden max-h-[calc(100vh-76px)] overflow-y-auto ${
              lightNavChrome
                ? 'bg-white border-[#E2EAF2]'
                : 'bg-[#06021D] border-white/10'
            }`}
          >
            <div className="container-fort py-4">
              {links.map((l) => (
                <div
                  key={l.label}
                  className={`border-b last:border-0 ${lightNavChrome ? 'border-[#E2EAF2]' : 'border-white/5'}`}
                >
                  {l.groups ? (
                    <>
                      <button
                        type="button"
                        className={`flex w-full items-center justify-between py-3 ${
                          lightNavChrome ? 'text-[#06021D]/80' : 'text-white/80'
                        }`}
                        onClick={() => setMobileExpanded(mobileExpanded === l.label ? null : l.label)}
                      >
                        <span className="text-[11px] font-bold uppercase tracking-[0.14em]">{l.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 opacity-50 transition-transform ${mobileExpanded === l.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === l.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pb-3"
                          >
                            <Link
                              to={l.href}
                              className="block py-2 pl-2 text-sm text-fort-purple"
                              onClick={() => setOpen(false)}
                            >
                              All {l.label} →
                            </Link>
                            {l.groups.map((group) => (
                              <div key={group.title} className="mt-3 pl-2">
                                <p
                                  className={`text-[11px] font-semibold uppercase tracking-wider mb-2 ${
                                    lightNavChrome ? 'text-[#5A6078]' : 'text-white/40'
                                  }`}
                                >
                                  {group.title}
                                </p>
                                {group.items.map((item) => (
                                  <Link
                                    key={item.href}
                                    to={item.href}
                                    className={`block py-2 pl-2 text-sm ${
                                      lightNavChrome ? 'text-[#5A6078]' : 'text-white/60'
                                    }`}
                                    onClick={() => setOpen(false)}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={l.href}
                      className={`block py-3 text-[11px] font-bold uppercase tracking-[0.14em] ${
                        lightNavChrome ? 'text-[#06021D]/80' : 'text-white/80'
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/contact-us" className="block py-3 mt-2 btn-fort text-center" onClick={() => setOpen(false)}>
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
