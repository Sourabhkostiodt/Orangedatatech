import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Database,
  Lock,
  Shield,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import type { ServiceMenuGroup } from '../data/serviceMenu';

function getGroupIcon(title: string): LucideIcon {
  const t = title.toLowerCase();
  if (t.includes('software')) return Smartphone;
  if (t.includes('analytics') || t.includes('bi')) return BarChart3;
  if (t.includes('engineering')) return Database;
  if (t.includes('solution')) return Lock;
  if (t.includes('iam') || t.includes('cyber')) return Shield;
  return Sparkles;
}

type MegaMenuPanelProps = {
  overviewHref: string;
  overviewLabel: string;
  groups: ServiceMenuGroup[];
};

export default function MegaMenuPanel({ overviewHref, overviewLabel, groups }: MegaMenuPanelProps) {
  const colClass =
    groups.length >= 4 ? 'sm:grid-cols-2 xl:grid-cols-4' : groups.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2';

  return (
    <div className="container-fort py-2">
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -6, scale: 0.99 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl border border-fort-purple/20 shadow-[0_0_0_1px_rgba(244,121,32,0.12),0_28px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]"
      >
        <div className="absolute inset-0 bg-[#07031c]/94 backdrop-blur-2xl" />
        <div className="absolute inset-0 grid-dark opacity-25 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(244,121,32,0.18),transparent_55%)] pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-fort-purple/80 to-transparent" />
        <div className="absolute -top-20 right-[12%] w-56 h-56 rounded-full bg-fort-purple/10 blur-[70px] pointer-events-none" />
        <div className="absolute -bottom-16 left-[8%] w-44 h-44 rounded-full bg-[#4f46e5]/10 blur-[60px] pointer-events-none" />

        <div className="relative flex items-center justify-between gap-3 border-b border-white/8 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-fort-purple/30 bg-fort-purple/10">
              <Sparkles className="h-3.5 w-3.5 text-fort-purple-light" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-fort-purple-light">Explore</p>
              <p className="text-[10px] text-white/40">Navigate our service ecosystem</p>
            </div>
          </div>
          <Link
            to={overviewHref}
            className="group inline-flex items-center gap-1.5 rounded-full border border-fort-purple/25 bg-fort-purple/10 px-3 py-1 text-[11px] font-semibold text-fort-purple-light transition-all hover:border-fort-purple/50 hover:bg-fort-purple/20 hover:text-white"
          >
            {overviewLabel}
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className={`relative grid gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06] ${colClass}`}>
          {groups.map((group, groupIndex) => {
            const Icon = getGroupIcon(group.title);
            return (
              <div key={group.title} className="relative px-3 py-3 sm:py-3.5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] shadow-[inset_0_0_12px_rgba(244,121,32,0.06)]">
                    <Icon className="h-3.5 w-3.5 text-fort-purple-light" />
                  </span>
                  <h3
                    className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/90 truncate"
                    title={group.title}
                  >
                    {group.shortTitle ?? group.title}
                  </h3>
                </div>

                <ul className="space-y-0.5">
                  {group.items.map((item, itemIndex) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 + groupIndex * 0.04 + itemIndex * 0.02, duration: 0.2 }}
                    >
                      <Link
                        to={item.href}
                        title={item.label}
                        className="group relative flex items-center gap-2 overflow-hidden rounded-lg px-2 py-1.5 transition-all hover:bg-white/[0.04]"
                      >
                        <span className="absolute inset-y-1 left-0 w-0.5 scale-y-0 rounded-full bg-fort-purple transition-transform duration-300 group-hover:scale-y-100" />
                        <span className="h-1 w-1 shrink-0 rounded-full bg-fort-purple/30 shadow-[0_0_0_0_rgba(244,121,32,0)] transition-all group-hover:bg-fort-purple group-hover:shadow-[0_0_8px_rgba(244,121,32,0.8)]" />
                        <span className="min-w-0 flex-1 truncate text-[12px] font-medium text-white/70 transition-colors group-hover:text-white">
                          {item.menuLabel ?? item.label}
                        </span>
                        <ChevronRight className="h-3 w-3 shrink-0 text-fort-purple-light opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="relative h-px bg-gradient-to-r from-transparent via-fort-purple/30 to-transparent" />
      </motion.div>
    </div>
  );
}
