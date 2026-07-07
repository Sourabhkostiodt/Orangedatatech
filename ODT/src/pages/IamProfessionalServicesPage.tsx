import CyberServicePageLayout, { type CyberServicePageConfig } from '../components/CyberServicePageLayout';

const config: CyberServicePageConfig = {
  breadcrumb: 'Cybersecurity / Services',
  title: 'Identity & Access Management Professional Services',
  heroParagraphs: [
    'In today’s complex threat landscape, deploying identity and access management is more than a technology project—it’s a strategic business transformation. Our Identity & Access Management (IAM) Professional Services deliver end-to-end expertise to design, build, and deploy scalable, secure identity solutions that align with your business goals. From requirements gathering through go-live and beyond, our certified specialists ensure your IAM program is implemented efficiently, securely, and with measurable ROI.',
  ],
  challengeSection: {
    title: 'Why IAM Implementation Services',
    intro:
      'Organizations struggle with identity implementation complexity. Whether you’re deploying your first IAM platform, migrating from legacy systems, integrating multiple tools, or scaling to cloud environments—implementation success requires specialized expertise, proven methodologies, and hands-on execution excellence.',
    items: [
      {
        title: 'High Implementation Risk',
        text: 'IAM deployments involve 6–18-month cycles, integration with hundreds of applications, and organizational-wide impact—yet many organizations lack internal expertise to execute successfully.',
      },
      {
        title: 'User Adoption & Change Management',
        text: 'Failed IAM deployments often stem from poor user adoption, insufficient training, and inadequate change management—not technology failures.',
      },
      {
        title: 'Complex Technology Integration',
        text: 'Modern IAM requires seamless integration across cloud, hybrid, and on-prem environments with legacy systems, APIs, and custom applications—a technical challenge that overwhelms under-resourced teams.',
      },
      {
        title: 'Budget & Timeline Overruns',
        text: 'Without structured project management, phased delivery, and proven accelerators, implementations routinely exceed budgets and miss critical deadlines.',
      },
      {
        title: 'Vendor Selection Complexity',
        text: 'Choosing between SailPoint, Okta, Ping Identity, CyberArk, ForgeRock, Microsoft Entra, and dozens of other platforms is daunting without objective guidance and PoC support.',
      },
      {
        title: 'Operational Sustainability',
        text: 'Many organizations deploy IAM platforms but struggle to optimize, maintain, and evolve them post-go-live, leaving untapped value and security gaps.',
      },
    ],
    footer:
      'Our IAM Implementation Services eliminate these risks through expert team delivery, proven methodologies, comprehensive testing, and organizational change management—ensuring your IAM platform goes live on schedule, within budget, and with high user adoption and business value.',
  },
  servicesSection: {
    title: 'Our IAM Implementation Services',
    intro:
      'We offer comprehensive implementation and integration services tailored to your project scope, technology stack, and business objectives. Our team of certified IAM architects, engineers, and integration specialists brings deep, proven experience across diverse industries.',
    blocks: [
      {
        title: 'IAM Platform Implementation & Deployment',
        subtitle: 'End-to-end platform implementation from requirements through go-live and operational transition.',
        items: [],
      },
      {
        title: 'IAM System Integration & Connectivity',
        subtitle: 'Seamless integration of IAM platforms across your technology landscape.',
        items: [],
      },
      {
        title: 'Application Onboarding & Integration',
        items: [
          'Application discovery and inventory',
          'Application readiness assessment',
          'Attribute mapping and provisioning rules',
          'Single Sign-On (SSO) and federation configuration',
          'API and middleware integration development',
          'Testing and validation for integrated application',
          'Rapid onboarding templates for common applications',
        ],
      },
      {
        title: 'Privileged Access Management (PAM) Integration',
        items: [
          'PAM platform deployment (CyberArk, BeyondTrust, HashiCorp Vault)',
          'Server and privileged user onboarding',
          'Secure credential storage and rotation',
          'Session recording and monitoring',
          'Just-in-time (JIT) access workflows',
        ],
      },
      {
        title: 'Legacy System Migration & Modernization',
        subtitle: 'Secure migration from legacy or homegrown identity systems to modern platforms.',
        items: [],
      },
      {
        title: 'Current-State Assessment',
        items: [
          'Legacy system functionality and data inventory',
          'User and account data audit',
          'Integration points and dependencies',
          'Compliance and security gap analysis',
          'Migration feasibility and risk assessment',
        ],
      },
      {
        title: 'Migration Planning & Execution',
        items: [
          'Detailed migration roadmap and phasing strategy',
          'Data extraction, transformation, and validation',
          'Parallel migration testing with validation',
          'User data synchronization and account provisioning',
          'Cutover planning and execution (minimal disruption)',
          'Rollback procedures and contingency planning',
        ],
      },
      {
        title: 'Legacy System Decommissioning',
        items: [
          'Graceful shutdown planning',
          'Compliance and audit requirements validation',
          'Data retention and archival',
          'System retirement and infrastructure cleanup',
        ],
      },
    ],
  },
  methodologySection: {
    title: 'IAM Implementation Delivery Methodology',
    phases: [
      {
        title: 'Requirements & Planning',
        items: [
          'Stakeholder interviews and needs assessment',
          'Current-state architecture assessment',
          'Detailed requirements documentation',
          'Technology selection confirmation',
          'Project planning, team allocation, and governance setup',
        ],
        deliverable: 'Requirements Document, Project Plan, Technology Architecture',
      },
      {
        title: 'Solution Design & Build',
        items: [
          'Enterprise architecture design and review',
          'Platform configuration and setup',
          'Integration design and development initiation',
          'User provisioning workflow design and build',
          'Compliance and security requirements integration',
        ],
        deliverable: 'Design Documentation, Built Configuration, Integration Code',
      },
      {
        title: 'Testing & Optimization',
        items: ['Unit and integration testing', 'Defect identification and remediation', 'Go-live readiness assessment'],
        deliverable: 'Test Reports, Defect Resolution',
      },
      {
        title: 'Training & Transition',
        items: [
          'Administrator and Help desk training',
          'Documentation finalization',
          'Operational runbooks',
          'Go-live preparation and cutover planning',
        ],
        deliverable: 'Training Materials, Operational Documentation, Support Playbooks',
      },
      {
        title: 'Deployment & Go-Live',
        items: [
          'Production deployment and configuration',
          'Data validation and synchronization',
          'User provisioning and access initialization',
          'Go-live support (24×7 during cutover)',
          'Issue escalation and resolution',
        ],
        deliverable: 'Live Production System, Issue Resolution',
      },
      {
        title: 'Knowledge Transfer & Support',
        items: ['Internal team knowledge transfer', 'Support team handoff and ramp', 'Continuous improvement recommendations'],
        deliverable: 'Knowledgeable Internal Team, Transition to Operations',
      },
    ],
  },
  whyChooseSection: {
    title: 'Why Choose Orange Data Tech',
    intro: 'Partner with Orange Data Tech for Secure and Efficient IAM:',
    blocks: [
      {
        title: 'Proven Implementation Excellence',
        text: 'IAM-focused delivery with successful implementations across industries, platforms, and deployment models.',
        items: [
          'Certified Implementation Teams Across All Major Platforms (SailPoint, Okta, Ping Identity, CyberArk, ForgeRock, Microsoft Entra, Oracle, Saviynt)',
          'Phased & Agile Delivery Methodologies that reduce risk and deliver early value',
          'Pre-Built Accelerators, Templates & Automation that shorten timelines by ~30%',
          'Proven Project Management & Governance ensuring on-time, on-budget delivery',
        ],
      },
      {
        title: 'Agile & Phased Delivery Model',
        text: 'Incremental value delivery that balances speed with quality and reduces implementation risk.',
        items: [
          'Phased Implementation Approach delivering capabilities in discrete phases',
          'Agile Sprints for rapid iteration and feedback incorporation',
          'Early Value Delivery with ROI realization before full completion',
          'Risk Mitigation through early testing and course correction',
          'Flexibility to adapt based on organizational priorities and learnings',
        ],
      },
      {
        title: 'Change Management & Adoption Focus',
        text: 'Implementation success depends on people and processes, not just technology.',
        items: [
          'Organizational Change Management integrated into project delivery',
          'Executive Stakeholder Engagement & Governance Structures',
          'Cross-Functional Training & Enablement Programs',
          'Help Desk & Support Team Training & Playbooks',
          'Post-Go-Live Optimization & Adoption Tracking',
        ],
      },
      {
        title: 'Measurable Business Value',
        text: 'Clear metrics and outcomes demonstrate ROI and justify investment.',
        items: [
          'Time-to-Value through phased delivery enables faster implementation timeline',
          'User Adoption',
          'Operational Efficiency',
          'Security & Compliance: Faster audit readiness and compliance achievement',
        ],
      },
      {
        title: 'Comprehensive Integration Expertise',
        text: 'Deep technical capability across platform integration, middleware, APIs, and legacy system connectivity.',
        items: [
          'Multi-Platform Integration Experience',
          'Cloud, Hybrid & On-Prem Architecture Design & Deployment',
          'Custom Integration Development & API-First Architecture',
          'Legacy System Migration with Zero Data Loss',
        ],
      },
      {
        title: 'Vendor-Agnostic Technology Partnership',
        text: 'Objective guidance with deep partnership with multiple vendors—recommendations align with your needs, not vendor margins.',
        items: [
          'No Vendor Lock-In: True independence in platform selection',
          'Multi-Vendor Expertise: Certified across SailPoint, Okta, Ping, CyberArk, ForgeRock, Microsoft, Oracle, Saviynt',
          'Best-of-Breed Integration: Ability to recommend converged vs. point solutions based on fit',
          'Future Flexibility: Architecture designed for technology evolution and switching if needed',
          'Vendor Relationship Support: Leverage our vendor partnerships for optimal terms and support',
        ],
      },
      {
        title: 'Reduced Implementation Risk',
        text: 'Standardized, battle-tested methodologies and accelerators minimize deployment risk and overruns.',
        items: [
          'Proven Project Methodologies: Phased delivery, agile sprints',
          'Implementation Frameworks & Best Practices',
          'Risk Management & Mitigation Playbooks',
          'Quality Assurance & Testing Protocols',
          'Project Management & Governance',
          'On-Time, On-Budget Track Record',
        ],
      },
    ],
  },
  ctaSection: {
    title: 'Getting Started: Talk to an Expert',
    paragraphs: [
      'The path to modern identity infrastructure begins with a clear assessment and strategic plan. Whether you’re deploying your first IAM platform, modernizing legacy systems, integrating new tools, or scaling to cloud—implementation services provide the expertise and execution excellence you need.',
      'Organizations ready to deploy modern IAM infrastructure, modernize legacy systems, or accelerate their identity transformation can reach out to discuss how implementation services can deliver your platform on time, within budget, and with measurable business value.',
      'Connect with our Identity & Access Management Implementation team today to discuss your project scope, technology stack, and deployment goals.',
    ],
    buttonLabel: 'Connect',
    buttonHref: '/contact-us',
  },
};

export default function IamProfessionalServicesPage() {
  return <CyberServicePageLayout config={config} />;
}
