import CyberServicePageLayout, { type CyberServicePageConfig } from '../components/CyberServicePageLayout';

const config: CyberServicePageConfig = {
  breadcrumb: 'Cybersecurity / Services',
  title: 'Managed Identity Services',
  heroParagraphs: [
    'In a distributed world of cloud apps, remote workers, and evolving threats, identity is your new security perimeter—and we manage it end to end. Our Managed Identity Services keep your IAM landscape stable, compliant, and continuously optimized, so you achieve business and security outcomes without the headache of operating complex IAM program.',
  ],
  challengeSection: {
    title: 'Why Managed Identity Matters?',
    intro:
      'Identity: From Cost Center to Business Advantage. Identity and Access Management (IAM) has evolved from a technical requirement to a strategic business enabler. Organizations today face unprecedented complexity.',
    items: [
      {
        title: '24x7 Global Workforce Demands',
        text: 'Distributed teams across geographies and devices require relentless identity monitoring and access governance that internal IT cannot sustain alone.',
      },
      {
        title: 'Compliance & Regulatory Pressure',
        text: 'Structured governance, audit trails, and remediation requirements.',
      },
      {
        title: 'Teams Trapped in Operational Firefighting',
        text: 'Instead of architecting and enabling business innovation, IAM teams spend most of their time on routine provisioning and audit activities.',
      },
      {
        title: 'Identity-Targeted Cyber Attacks',
        text: 'Ransomware, credential theft, and privilege abuse exploit weak identity hygiene faster than internal teams can detect and respond.',
      },
      {
        title: 'Critical Skill Gaps',
        text: 'Recruiting and retaining IAM specialists with deep platform expertise has become expensive and competitive.',
      },
      {
        title: 'The Security-Usability Paradox',
        text: 'Balancing access controls with a frictionless user experience requires continuous tuning and intelligence that overwhelms under-resourced teams.',
      },
    ],
    footer:
      'Our Managed IAM Services eliminate this burden, transforming identity from a source of operational stress into a competitive differentiator—one that strengthens security, accelerates compliance, and frees your teams to drive business innovation.',
  },
  servicesSection: {
    title: 'Our Managed Identity Services',
    intro:
      'We offer comprehensive Managed Identity services tailored to your unique business needs. Our team of experienced Identity engineers brings a wealth of expertise in implementing and operating scalable IAM solutions. Our services include:',
    blocks: [
      {
        title: '24/7/365 Monitoring & Support',
        text: 'Round-the-clock platform monitoring ensures your IAM infrastructure operates reliably and securely.',
        items: [
          'SLA based Incident management',
          'Continuous Monitoring',
          'Alerting & Escalation',
          'Root-Cause Analysis',
          'Defect Tracking',
        ],
      },
      {
        title: 'Proactive Maintenance & Upgrades',
        text: 'Planned maintenance ensures your identity systems remain current, secure, and performant.',
        items: ['Regular Patching', 'Periodic Health Checks', 'Performance Tuning', 'Product Upgrades'],
      },
      {
        title: 'Application Onboarding & Enhancements',
        text: 'Structured onboarding processes enable rapid integration of new applications while maintaining security and compliance.',
        items: ['Application Assessment', 'Integration Configuration', 'Testing & Validation', 'Ongoing Management'],
      },
      {
        title: 'Governance, Compliance & Reporting',
        text: 'Structured governance ensures your IAM program remains compliant, auditable, and aligned to business objectives.',
        items: ['Change Management', 'Access Certification', 'Compliance Reporting', 'Audit Support', 'Risk Remediation'],
      },
    ],
  },
  productSection: {
    title: 'Product Expertise',
    intro:
      'We bring proven, in-depth expertise across leading IAM platforms and continuously align with the latest identity technologies and best practices.',
    groups: [
      {
        title: 'Identity Governance & Administration',
        items: [
          'SailPoint IdentityIQ and IdentityNow',
          'Saviynt Enterprise Identity Cloud',
          'Oracle Identity Governance',
          'Microsoft Entra ID Governance',
          'IBM Verify IAM',
        ],
      },
      {
        title: 'Privileged Access Management',
        items: ['CyberArk Privileged Access Security', 'BeyondTrust Privileged Remote Access', 'Delinea Secret Server', 'HashiCorp Vault'],
      },
      {
        title: 'Access Management',
        items: ['Okta Identity Cloud', 'Microsoft Entra ID (Azure AD)', 'Ping Identity', 'ForgeRock'],
      },
      {
        title: 'CIAM',
        items: ['Auth0 by Okta', 'ForgeRock Identity Platform'],
      },
    ],
  },
  whyChooseSection: {
    title: 'Why Choose Orange Data Tech for Managed Identity?',
    intro: 'Partner with Orange Data Tech for Secure and Efficient IAM:',
    blocks: [
      {
        title: 'Deep Identity Expertise',
        text: 'Our teams bring decades of cumulative experience in identity architecture, implementation, and operations.',
        items: ['Specialist IAM Teams', 'Product Expertise', 'Technology Depth', 'Proven Accelerators', 'Industry Best Practices'],
      },
      {
        title: 'Vendor-Agnostic Approach',
        text: 'We are not bound to a single platform or vendor, ensuring recommendations align with your needs.',
        items: ['Multi-Platform Expertise', 'Objective Technology Recommendations', 'Best-of-Breed Integration', 'Future Flexibility'],
      },
      {
        title: 'Flexible Support Models',
        text: 'We recognize that one size does not fit all. Our flexible engagement options accommodate diverse organizational needs.',
        items: ['Fully Managed Service', 'Co-Managed Service', 'Staff Augmentation', 'Hybrid Onshore/Offshore Delivery'],
      },
      {
        title: 'Reduced Operational Complexity',
        text: 'Standardized, proven processes reduce complexity and operational friction.',
        items: ['Standardized Runbooks', 'Manual tasks Automation', 'Simplified Processes', 'Comprehensive Documentation', 'Single Point of Contact'],
      },
      {
        title: 'Clear Governance, KPI & SLAs',
        text: 'Transparent operations with clearly defined expectations and accountability.',
        items: ['Severity-based SLAs', 'Key Performance Metrics', 'Change Control', 'Regular Reporting', 'Service Reviews'],
      },
      {
        title: 'Measurable ROI',
        text: 'Clear metrics and financial benefits justify the investment in managed services.',
        items: ['Financial Benefits', 'Operational Benefits', 'Strategic Benefits'],
      },
    ],
  },
};

export default function ManagedIdentityServicesPage() {
  return <CyberServicePageLayout config={config} />;
}
