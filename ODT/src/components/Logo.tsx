import { BRAND } from '../constants/brand';
import { useTheme } from '../context/ThemeContext';

type LogoProps = {
  className?: string;
  imageClassName?: string;
  /** Force a specific logo variant regardless of theme (e.g. footer on dark bg). */
  variant?: 'light' | 'dark' | 'auto';
};

export default function Logo({ className = '', imageClassName = 'h-9 w-auto', variant = 'auto' }: LogoProps) {
  const { theme } = useTheme();

  const resolvedVariant = variant === 'auto' ? theme : variant;
  const isLightLogo = resolvedVariant === 'light';
  const src = isLightLogo ? BRAND.logoLight : BRAND.logoDark;
  const fallback = isLightLogo ? BRAND.logoLightUrl : BRAND.logoUrl;

  return (
    <img
      src={src}
      alt={BRAND.name}
      className={`${imageClassName} ${className}`}
      onError={(e) => {
        if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
      }}
    />
  );
}
