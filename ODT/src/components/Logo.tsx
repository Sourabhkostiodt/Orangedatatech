import { BRAND } from '../constants/brand';

export default function Logo({ className = '', imageClassName = 'h-9 w-auto' }: { className?: string; imageClassName?: string }) {
  return (
    <img
      src={BRAND.logo}
      alt={BRAND.name}
      className={`${imageClassName} ${className}`}
      onError={(e) => { if (e.currentTarget.src !== BRAND.logoUrl) e.currentTarget.src = BRAND.logoUrl; }}
    />
  );
}
