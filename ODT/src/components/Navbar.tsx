import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
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

function MegaMenuPanel({
  overviewHref,
  overviewLabel,
  groups,
}: {
  overviewHref: string;
  overviewLabel: string;
  groups: ServiceMenuGroup[];
}) {
  const colClass =
    groups.length >= 4 ? 'sm:grid-cols-2 xl:grid-cols-4' : groups.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2';

  return (
    <div className="container-fort py-1.5">
      <div className="rounded-xl border border-white/10 bg-[#0D0828] shadow-[0_16px_48px_rgba(0,0,0,0.45)] overflow-hidden">
        <div className="flex items-center justify-between gap-3 border-b border-white/8 px-4 py-2 bg-white/[0.02]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-fort-purple-light/80">
            Browse by category
          </p>
          <Link
            to={overviewHref}
            className="shrink-0 text-xs font-medium text-fort-purple-light hover:text-white transition-colors"
          >
            {overviewLabel} →
          </Link>
        </div>
        <div className={`grid gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/8 ${colClass}`}>
          {groups.map((group) => (
            <div key={group.title} className="px-3 py-2.5 sm:py-3">
              <h3
                className="text-[10px] font-semibold uppercase tracking-wider text-fort-purple-light mb-1.5 truncate"
                title={group.title}
              >
                {group.shortTitle ?? group.title}
              </h3>
              <ul className="space-y-0">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      title={item.label}
                      className="group block rounded-md px-2 py-1 hover:bg-white/5 transition-colors"
                    >
                      <span className="block text-[12px] leading-snug font-medium text-white/75 group-hover:text-fort-purple-light transition-colors truncate">
                        {item.menuLabel ?? item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const { theme } = useTheme();
  const isInner = innerPages.has(location.pathname);

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

  const linkClass = (active: boolean) => {
    if (lightNavChrome) {
      return active
        ? 'text-fort-purple nav-link-underline text-[13px] font-medium transition-colors flex items-center gap-0.5 whitespace-nowrap'
        : 'text-[#06021D]/75 hover:text-fort-purple nav-link-underline text-[13px] font-medium transition-colors flex items-center gap-0.5 whitespace-nowrap';
    }
    return active
      ? 'text-fort-purple-light nav-link-underline text-[13px] font-medium transition-colors flex items-center gap-0.5 whitespace-nowrap'
      : 'text-white/75 hover:text-fort-purple-light nav-link-underline text-[13px] font-medium transition-colors flex items-center gap-0.5 whitespace-nowrap';
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${headerClass}`}>
      <nav className="container-fort flex items-center justify-between h-[76px]">
        <Link to="/">
          <Logo imageClassName="h-9 w-auto" variant={useDarkNavChrome ? 'dark' : 'light'} />
        </Link>

        <div className="hidden lg:flex items-center gap-5 xl:gap-6 min-w-0 flex-1 justify-center px-4">
          {links.map((l) => (
            <div
              key={l.label}
              className="relative"
              onMouseEnter={() => l.groups && setDrop(l.label)}
              onMouseLeave={() => l.groups && setDrop(null)}
            >
              <Link to={l.href} className={linkClass(drop === l.label)}>
                {l.label}
                {l.groups && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 opacity-50 transition-transform ${drop === l.label ? 'rotate-180' : ''}`}
                  />
                )}
              </Link>
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
                        <span>{l.label}</span>
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
                      className={`block py-3 ${lightNavChrome ? 'text-[#06021D]/80' : 'text-white/80'}`}
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
