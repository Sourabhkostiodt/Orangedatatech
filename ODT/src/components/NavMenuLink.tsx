import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

type NavMenuLinkProps = {
  to: string;
  label: string;
  active: boolean;
  dropdownOpen?: boolean;
  hasDropdown?: boolean;
  lightNav: boolean;
  isCurrent?: boolean;
};

export default function NavMenuLink({
  to,
  label,
  active,
  dropdownOpen = false,
  hasDropdown = false,
  lightNav,
  isCurrent = false,
}: NavMenuLinkProps) {
  const highlighted = active || isCurrent || dropdownOpen;

  return (
    <Link
      to={to}
      className={[
        'nav-futuristic-link group',
        lightNav ? 'nav-futuristic-link--light' : 'nav-futuristic-link--dark',
        highlighted ? 'is-active' : '',
        isCurrent ? 'is-current' : '',
      ].join(' ')}
    >
      <span className="nav-futuristic-link__text">{label}</span>
      {hasDropdown && (
        <ChevronDown
          className={`nav-futuristic-link__chevron w-3 h-3 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
        />
      )}
      <span className="nav-futuristic-link__beam" aria-hidden />
    </Link>
  );
}
