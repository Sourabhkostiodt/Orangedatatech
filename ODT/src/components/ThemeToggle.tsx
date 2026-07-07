import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type ThemeToggleProps = {
  className?: string;
  lightNav?: boolean;
  showOnMobile?: boolean;
};

export default function ThemeToggle({ className = '', lightNav = false, showOnMobile = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const visibility = showOnMobile ? 'inline-flex' : 'hidden lg:inline-flex';

  const colorStyles = lightNav
    ? 'border-[#E2EAF2] text-[#06021D] hover:border-fort-purple/40 hover:bg-fort-light'
    : 'border-white/15 text-white/80 hover:text-white hover:border-fort-purple/50 hover:bg-white/5';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`${visibility} items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${colorStyles} ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
    </button>
  );
}
