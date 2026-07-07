export type ServiceMenuItem = {
  label: string;
  href: string;
  description?: string;
  /** Shorter label for compact navbar mega menu */
  menuLabel?: string;
};

export type ServiceMenuGroup = {
  title: string;
  shortTitle?: string;
  items: ServiceMenuItem[];
};

export const serviceMenuGroups: ServiceMenuGroup[] = [
  {
    title: 'Software & Analytics',
    items: [
      { label: 'Mobile App Development', href: '/services/mobile-app-development-services', description: 'Custom mobile apps from ideation to deployment.' },
      { label: 'Data Analytics Overview', href: '/services/data-analytics', description: 'Insights and analytics for smarter decisions.' },
      { label: 'Data Analytics for Finance', href: '/services/data-analytics/dataanalytics-for-finance' },
      { label: 'Data Analytics for Marketing', href: '/services/data-analytics/data-analytics-for-marketing' },
      { label: 'Data Analytics for Sales', href: '/services/data-analytics/data-analytics-for-sales' },
      { label: 'Data Analytics for Risk Management', href: '/services/data-analytics/data-analytics-for-risk-management' },
    ],
  },
  {
    title: 'Cybersecurity & IAM Services',
    items: [
      { label: 'Cybersecurity Overview', href: '/cybersecurity', description: 'Identity and access security for modern enterprises.' },
      { label: 'IAM Managed Services', href: '/cybersecurity/services', description: 'Overview of managed identity service offerings.' },
      { label: 'IAM Professional Services', href: '/cybersecurity/services/identity-access-management-professional-services', description: 'End-to-end IAM implementation and integration.' },
      { label: 'Managed Identity Services', href: '/cybersecurity/services/managed-identity-services', description: '24/7 managed IAM operations and support.' },
      { label: 'Strategic Consulting', href: '/cybersecurity/services/strategic-consulting', description: 'IAM advisory, assessment, and roadmap planning.' },
    ],
  },
  {
    title: 'IAM Solutions',
    items: [
      { label: 'IAM Solutions Overview', href: '/cybersecurity/solutions', description: 'Identity solution capabilities and delivery models.' },
      { label: 'Access Management Services', href: '/cybersecurity/solutions/access-management', description: 'Secure authentication and authorization.' },
      { label: 'Identity Governance & Administration', href: '/cybersecurity/solutions/identity-governance-administration', description: 'Govern access and prove compliance.' },
      { label: 'Privileged Access Management', href: '/cybersecurity/solutions/privilege-access-management', description: 'Protect and monitor privileged accounts.' },
    ],
  },
];

/** Balanced 4-column layout for navbar mega menu (less vertical height). */
export const serviceMegaMenuGroups: ServiceMenuGroup[] = [
  {
    title: 'Software',
    items: [
      { label: 'Mobile App Development', href: '/services/mobile-app-development-services', menuLabel: 'Mobile Apps' },
    ],
  },
  {
    title: 'Data Analytics',
    shortTitle: 'Analytics',
    items: [
      { label: 'Data Analytics Overview', href: '/services/data-analytics', menuLabel: 'Overview' },
      { label: 'Data Analytics for Finance', href: '/services/data-analytics/dataanalytics-for-finance', menuLabel: 'Finance' },
      { label: 'Data Analytics for Marketing', href: '/services/data-analytics/data-analytics-for-marketing', menuLabel: 'Marketing' },
      { label: 'Data Analytics for Sales', href: '/services/data-analytics/data-analytics-for-sales', menuLabel: 'Sales' },
      { label: 'Data Analytics for Risk Management', href: '/services/data-analytics/data-analytics-for-risk-management', menuLabel: 'Risk Mgmt' },
    ],
  },
  {
    title: 'Cybersecurity & IAM Services',
    shortTitle: 'IAM Services',
    items: [
      { label: 'Cybersecurity Overview', href: '/cybersecurity', menuLabel: 'Cyber Overview' },
      { label: 'IAM Managed Services', href: '/cybersecurity/services', menuLabel: 'Managed Services' },
      { label: 'IAM Professional Services', href: '/cybersecurity/services/identity-access-management-professional-services', menuLabel: 'IAM Professional' },
      { label: 'Managed Identity Services', href: '/cybersecurity/services/managed-identity-services', menuLabel: 'Managed Identity' },
      { label: 'Strategic Consulting', href: '/cybersecurity/services/strategic-consulting', menuLabel: 'Consulting' },
    ],
  },
  {
    title: 'IAM Solutions',
    shortTitle: 'Solutions',
    items: [
      { label: 'IAM Solutions Overview', href: '/cybersecurity/solutions', menuLabel: 'Overview' },
      { label: 'Access Management Services', href: '/cybersecurity/solutions/access-management', menuLabel: 'Access Mgmt' },
      { label: 'Identity Governance & Administration', href: '/cybersecurity/solutions/identity-governance-administration', menuLabel: 'IGA' },
      { label: 'Privileged Access Management', href: '/cybersecurity/solutions/privilege-access-management', menuLabel: 'PAM' },
    ],
  },
];

export const navbarServiceLinks: ServiceMenuItem[] = serviceMenuGroups.flatMap((group) => group.items);
