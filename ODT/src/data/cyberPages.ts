export type ContentSection = {
  heading: string;
  intro?: string;
  bullets?: string[];
};

export type CyberPageContent = {
  path: string;
  title: string;
  subtitle: string;
  sections: ContentSection[];
};

const professionalServicesSections: ContentSection[] = [
  {
    heading: 'Why IAM Implementation Services',
    bullets: [
      'High implementation risk across 6-18 month IAM programs and enterprise-wide integrations.',
      'User adoption and change management issues often derail otherwise good deployments.',
      'Complex cloud, hybrid, and on-prem integrations need specialist IAM engineering.',
      'Poor planning can cause budget overruns, timeline delays, and long-term operational gaps.',
      'Platform selection is difficult without objective, vendor-agnostic guidance.',
    ],
  },
  {
    heading: 'Our IAM Implementation Services',
    bullets: [
      'IAM platform implementation and deployment from requirements to go-live.',
      'Application onboarding with SSO, federation, API integrations, and validation.',
      'PAM integration including secure credential storage, rotation, and JIT workflows.',
      'Legacy IAM migration with phased cutover, rollback planning, and decommissioning.',
    ],
  },
  {
    heading: 'Implementation Delivery Methodology',
    bullets: [
      'Requirements and planning: stakeholder interviews, architecture assessment, project governance.',
      'Solution design and build: configuration, workflow design, integration development.',
      'Testing and optimization: unit/integration testing, defects, readiness checks.',
      'Training and transition: enablement, runbooks, and support playbooks.',
      'Deployment and go-live: production rollout, synchronization, issue escalation.',
      'Knowledge transfer and support: internal handoff and continuous improvement.',
    ],
  },
];

export const CYBER_PAGES: CyberPageContent[] = [
  {
    path: '/cybersecurity',
    title: 'CyberSecurity',
    subtitle:
      'Enhance data security with Orange Data Tech managed identity services built for cloud-first enterprises.',
    sections: [
      {
        heading: 'Why Managed Identity Matters',
        bullets: [
          'Automates provisioning, credential rotation, and identity lifecycle management.',
          'Reduces human error and attack surface while improving access control.',
          'Supports compliance with stronger governance and auditable controls.',
        ],
      },
      {
        heading: 'Managed Identity Services',
        bullets: [
          'Identity and Access Management (IAM) with centralized governance.',
          'User provisioning and lifecycle management across business systems.',
          'Single Sign-On (SSO) and federation using modern standards.',
          'SIEM and UBA integrations for risky behavior detection and response.',
        ],
      },
      {
        heading: 'Benefits',
        bullets: [
          'Improved security posture with policy-driven access and MFA.',
          'Operational efficiency through automation and reduced manual effort.',
          'Lower IAM overhead with expert implementation and ongoing support.',
        ],
      },
    ],
  },
  {
    path: '/cybersecurity/services',
    title: 'Identity & Access Management Managed Services',
    subtitle:
      'Identity is the new security perimeter. Our managed services keep IAM stable, compliant, and optimized.',
    sections: [
      {
        heading: 'Core Service Capabilities',
        bullets: [
          '24/7 monitoring, incident response, escalation, and root-cause analysis.',
          'Application onboarding, integration configuration, and lifecycle enhancements.',
          'Proactive maintenance with patching, health checks, and upgrades.',
          'Governance, certification, compliance reporting, and audit support.',
        ],
      },
      {
        heading: 'Four-Pillar Operating Model',
        bullets: [
          'Assess & Design',
          'Deploy & Integrate',
          'Monitor & Maintain',
          'Govern & Enhance',
        ],
      },
      {
        heading: 'Why Choose Orange Data Tech',
        bullets: [
          'Deep identity expertise with multi-platform coverage.',
          'Flexible delivery models: fully managed, co-managed, or augmentation.',
          'Vendor-agnostic recommendations and measurable ROI focus.',
        ],
      },
    ],
  },
  {
    path: '/cybersecurity/services/professional-services',
    title: 'Identity & Access Management Professional Services',
    subtitle:
      'End-to-end implementation services for secure, scalable IAM programs aligned to business outcomes.',
    sections: professionalServicesSections,
  },
  {
    path: '/cybersecurity/services/identity-access-management-professional-services',
    title: 'Identity & Access Management Professional Services',
    subtitle:
      'End-to-end implementation services for secure, scalable IAM programs aligned to business outcomes.',
    sections: professionalServicesSections,
  },
  {
    path: '/cybersecurity/services/managed-identity-services',
    title: 'Managed Identity Services',
    subtitle:
      'In a distributed world, identity is your security perimeter. We manage IAM end-to-end.',
    sections: [
      {
        heading: 'Why Managed Identity Matters',
        bullets: [
          '24x7 global workforce access demands continuous identity monitoring.',
          'Compliance and regulatory pressure requires governance and auditable trails.',
          'Identity-targeted attacks demand always-on protection and response.',
          'Critical IAM skill gaps make specialist support essential.',
        ],
      },
      {
        heading: 'Our Managed Identity Services',
        bullets: [
          '24/7/365 monitoring and SLA-based incident management.',
          'Proactive maintenance, patching, health checks, and tuning.',
          'Application onboarding, integration, testing, and enhancement.',
          'Governance, compliance reporting, audit support, and risk remediation.',
        ],
      },
      {
        heading: 'Product Expertise',
        bullets: [
          'IGA: SailPoint, Saviynt, Oracle, Microsoft Entra, IBM Verify.',
          'PAM: CyberArk, BeyondTrust, Delinea, HashiCorp Vault.',
          'Access Management: Okta, Entra ID, Ping Identity, ForgeRock.',
          'CIAM: Auth0 and ForgeRock.',
        ],
      },
    ],
  },
  {
    path: '/cybersecurity/services/strategic-consulting',
    title: 'Strategic Identity Consulting',
    subtitle:
      'Advisory services to assess current state, define roadmap, and drive IAM maturity with measurable outcomes.',
    sections: [
      {
        heading: 'IAM Advisory Services',
        bullets: [
          'Current-state assessment with architecture, policy, and compliance review.',
          'Maturity analysis across ILM, AM, and IGA capabilities.',
          'Strategic roadmap with phased delivery and resource estimates.',
          'Governance model, RBAC/SoD policy design, and audit planning.',
          'Implementation readiness, KPIs, and change planning.',
        ],
      },
      {
        heading: 'Assessment Methodology',
        bullets: [
          'Phase 1: Discover & Assess',
          'Phase 2: Analyze & Evaluate',
          'Phase 3: Design & Recommend',
          'Phase 4: Present & Plan',
        ],
      },
      {
        heading: 'Why Orange Data Tech',
        bullets: [
          'Specialist IAM advisory teams with vendor-agnostic guidance.',
          'Holistic people-process-technology assessment framework.',
          'Actionable recommendations mapped to business value and ROI.',
        ],
      },
    ],
  },
  {
    path: '/cybersecurity/solutions',
    title: 'Managed Identity & Access Management Solution',
    subtitle:
      'A unified IAM solution with centralized control, governance, and continuous identity threat defense.',
    sections: [
      {
        heading: 'What the Solution Delivers',
        bullets: [
          'Centralized identity management across systems and platforms.',
          'Consistent role-based access policies aligned to business context.',
          'Reduced manual administration and better access visibility.',
        ],
      },
      {
        heading: 'Core Capabilities',
        bullets: [
          'Identity visibility and control across users, apps, and entitlements.',
          'Continuous threat detection for risky behavior and privilege abuse.',
          'Secure lifecycle orchestration from joiner to mover to leaver.',
          'Built-in governance with certifications, SoD, and audit reporting.',
        ],
      },
      {
        heading: 'Business Challenges We Solve',
        bullets: [
          'Fragmented identity landscapes across cloud and on-prem.',
          'Identity-targeted attacks and privilege escalation risks.',
          'Audit pressure and missing governance evidence.',
          'Operational overload caused by manual IAM operations.',
        ],
      },
    ],
  },
  {
    path: '/cybersecurity/solutions/access-management',
    title: 'Access Management Services',
    subtitle:
      'Secure Every Access Point. Empower Every User.',
    sections: [
      {
        heading: 'The Access Management Challenge',
        intro:
          'Are You Struggling with These Access Management Pain Points? Modern organizations face unprecedented challenges in securing digital identities and managing access across distributed environments.',
        bullets: [
          'Password Fatigue & Help Desk Overload - 20-50% of help desk calls are password-related, draining IT resources and frustrating users.',
          'Compliance Complexity - Meeting regulatory requirements like SOC 2, GDPR, HIPAA, and PCI-DSS for access controls and authentication.',
          'MFA Adoption Barriers - User resistance to multi-factor authentication due to complexity or inconvenience.',
          'Third-Party Access - Managing contractor, partner, and vendor authentication without compromising security.',
          'Security Blind Spots - Limited visibility into authentication activities across cloud apps, on-premises systems, and hybrid environments.',
          'Poor User Experience - Multiple login prompts across applications are reducing productivity and user satisfaction.',
          'Integration Headaches - Managing access across disconnected systems, legacy applications, and modern cloud platforms.',
          'Credential-Based Attacks - 80% of breaches involve compromised credentials through phishing, password spraying, or credential stuffing.',
          'Excessive Permissions - Users retaining access long after job changes, creating unnecessary risk exposure.',
          'Shadow IT - Unmanaged applications and unauthorized access create security vulnerabilities.',
          'More than 50% of security breaches involve compromised credentials. Without modern access management, you are not just creating friction - you are leaving your organization vulnerable.',
        ],
      },
      {
        heading: 'Our Access Management Services',
        intro: 'Comprehensive Access Management Services.',
        bullets: [
          'Advisory & Strategy Services - Build the right access management foundation. We assess your current authentication and authorization landscape, design a comprehensive strategy aligned with business objectives, and create a practical roadmap for implementation.',
          'Managed Access Management Services - Your ongoing access management team. Focus on your core business while our specialists handle day-to-day access management operations, continuous optimization, and program management.',
          'Implementation Services - Expert deployment, rapid results. Our certified access management specialists handle complete platform deployment from design through go-live, ensuring best practices, proper integration, and optimal configuration.',
          'Compliance & Audit Support - Audit-ready access controls. Ensure continuous compliance and pass audits confidently with expert preparation, evidence collection, and regulatory expertise.',
        ],
      },
      {
        heading: 'Your First Line of Digital Defense',
        intro: 'What is Access Management?',
      },
      {
        heading: 'What is Access Management?',
        intro:
          'Access Management is a comprehensive cybersecurity framework that controls and monitors how users authenticate and gain authorization to access digital resources. It encompasses the technologies, policies, and processes that verify user identity (authentication), determine appropriate access levels (authorization), and maintain detailed audit trails of all access activities, ensuring the right users access the right resources securely and seamlessly.',
        bullets: [
          '1. User Authentication',
          '2. Multi-Factor Verification',
          '3. Single Sign-On (SSO)',
          '4. Session Monitoring',
          '5. Adaptive Authentication',
          '6. Comprehensive Audit & Logging',
          '7. Authorization & Policy Enforcement',
        ],
      },
      {
        heading: 'Why Choose Us?',
        bullets: [
          'Proven Methodology - Our structured approach, developed across multiple access management implementations, ensures predictable outcomes and rapid value delivery.',
          'Vendor Independence - We recommend and implement the best access management solution for your needs without vendor bias or sales quotas.',
        ],
      },
    ],
  },
  {
    path: '/cybersecurity/solutions/identity-governance-administration',
    title: 'Identity Governance and Administration (IGA) Services',
    subtitle:
      'Know who has access to what, control it, and prove it with policy-driven identity governance.',
    sections: [
      {
        heading: 'IGA Challenges',
        bullets: [
          'Identity sprawl across SaaS, on-prem, and partner ecosystems.',
          'Manual access reviews and slow provisioning cycles.',
          'Access creep, orphaned accounts, and SoD violations.',
          'Compliance burden without a single source of access truth.',
        ],
      },
      {
        heading: 'IGA Services',
        bullets: [
          'Advisory and strategic roadmap planning.',
          'Managed IGA operations and continuous optimization.',
          'Implementation services with best-practice architecture.',
          'Compliance and audit readiness support.',
        ],
      },
      {
        heading: 'IGA Lifecycle',
        bullets: [
          'Identity onboarding and access approval.',
          'Continuous monitoring and certification.',
          'Automatic access modification and immediate deprovisioning.',
          'Audit-ready reporting and controls.',
        ],
      },
    ],
  },
  {
    path: '/cybersecurity/solutions/privilege-access-management',
    title: 'Privileged Access Management (PAM) Services',
    subtitle:
      'Protect your most powerful accounts with intelligent vaulting, monitoring, JIT access, and credential governance.',
    sections: [
      {
        heading: 'Critical PAM Risks',
        bullets: [
          'Credential theft and privileged abuse.',
          'Excessive standing privileges and shadow admin accounts.',
          'Shared passwords, hardcoded secrets, and slow rotation.',
          'Unmonitored sessions and third-party privileged access exposure.',
        ],
      },
      {
        heading: 'PAM Services',
        bullets: [
          'Advisory and strategy for privileged identity architecture.',
          'Managed PAM operations with continuous monitoring.',
          'Implementation services for secure deployment and integration.',
          'Compliance and audit evidence support.',
        ],
      },
      {
        heading: 'PAM Control Model',
        bullets: [
          'Privileged account discovery and inventory.',
          'Credential vaulting and MFA for privileged access.',
          'JIT provisioning and session monitoring.',
          'Automated rotation with full audit trails.',
        ],
      },
    ],
  },
];

export const SERVICE_TECH_PAGES: CyberPageContent[] = [
  {
    path: '/services',
    title: 'Services',
    subtitle:
      'Full-cycle software development and consulting services to accelerate innovation and business value.',
    sections: [
      {
        heading: 'Software Development Services',
        bullets: [
          'Dedicated teams with niche engineering expertise.',
          'Product strategy support to streamline workflows and tech decisions.',
          'Mobile app development for brand-aligned digital products.',
          'Web development and enterprise software modernization.',
        ],
      },
      {
        heading: 'How We Deliver',
        bullets: [
          'End-to-end delivery from strategy and planning to execution and support.',
          'Technology roadmaps aligned to business outcomes.',
          'Scalable solutions tailored to project and industry requirements.',
        ],
      },
    ],
  },
  {
    path: '/services/mobile-app-development-services',
    title: 'App Development',
    subtitle:
      'Comprehensive mobile app development from ideation and UX to deployment and post-launch support.',
    sections: [
      {
        heading: 'Mobile App Development Services',
        bullets: [
          'Custom iOS and Android app development.',
          'Native and cross-platform app delivery.',
          'UI/UX design, consulting, and prototyping.',
          'Automated QA/testing and lifecycle support.',
          'Geofencing, notifications, and embedded Android customizations.',
        ],
      },
      {
        heading: 'Technologies',
        bullets: ['Swift/SwiftUI', 'Kotlin', 'React Native', 'Xcode', 'Java'],
      },
    ],
  },
  {
    path: '/services/data-analytics',
    title: 'Data Analytics',
    subtitle:
      'Data analytics services designed to uncover insights, improve decisions, and optimize business performance.',
    sections: [
      {
        heading: 'Analytics Focus Areas',
        bullets: [
          'Finance analytics for forecasting, risk, and profitability.',
          'Marketing analytics for segmentation, personalization, and ROI.',
          'Sales analytics with dashboarding and performance insights.',
          'Risk analytics for proactive monitoring and fraud detection.',
        ],
      },
    ],
  },
  {
    path: '/services/data-analytics/dataanalytics-for-finance',
    title: 'Data Analytics for Finance',
    subtitle:
      'Tailored analytics for financial institutions to improve decisions, efficiency, and risk posture.',
    sections: [
      {
        heading: 'Why It Matters',
        bullets: [
          'Enhanced data-driven decision-making using market and customer insights.',
          'Operational efficiency through process optimization and automation.',
          'Risk mitigation and fraud detection with pattern analysis.',
          'Personalized customer experience through behavior insights.',
        ],
      },
      {
        heading: 'Solutions for Finance',
        bullets: [
          'Financial performance and KPI analysis.',
          'Predictive analytics for investment strategy and portfolio optimization.',
          'Risk management and anomaly/fraud detection.',
          'Customer segmentation and churn prediction.',
        ],
      },
    ],
  },
  {
    path: '/services/data-analytics/data-analytics-for-marketing',
    title: 'Data Analytics for Marketing',
    subtitle:
      'Use marketing analytics to improve targeting, personalization, and campaign performance.',
    sections: [
      {
        heading: 'Marketing Analytics Outcomes',
        bullets: [
          'Enhance targeted marketing using audience and behavior data.',
          'Personalize customer journeys and engagement touchpoints.',
          'Optimize channel performance and budget allocation.',
          'Measure effectiveness using CAC, CLV, and campaign ROI.',
        ],
      },
      {
        heading: 'Why Choose Orange Data Tech',
        bullets: [
          'Experienced marketing analytics experts and custom solution design.',
          'Advanced tools, algorithms, and continuous innovation approach.',
          'Comprehensive support from data prep to optimization.',
        ],
      },
    ],
  },
  {
    path: '/services/data-analytics/data-analytics-for-sales',
    title: 'Data Analytics for Sales',
    subtitle:
      'Power BI focused analytics services to visualize data, improve reporting, and support faster sales decisions.',
    sections: [
      {
        heading: 'Power BI Services',
        bullets: [
          'Data modeling and transformation for robust reporting.',
          'Data integration and automation across multiple sources.',
          'Interactive dashboard and report development.',
          'Custom Power BI solutions for specific sales needs.',
        ],
      },
      {
        heading: 'Delivery Advantages',
        bullets: [
          'Tailored implementation based on business objectives.',
          'Training and enablement for internal teams.',
          'End-to-end support across the Power BI lifecycle.',
        ],
      },
    ],
  },
  {
    path: '/services/data-analytics/data-analytics-for-risk-management',
    title: 'Data Analytics for Risk Management',
    subtitle:
      'Power BI and analytics-driven approach to monitor risk, visualize trends, and improve decision confidence.',
    sections: [
      {
        heading: 'Risk Analytics Capabilities',
        bullets: [
          'Data modeling and integration for consolidated risk reporting.',
          'Interactive dashboards for trend and anomaly visibility.',
          'Custom analytics workflows for risk and compliance use cases.',
          'Training and support for sustained internal adoption.',
        ],
      },
    ],
  },
  {
    path: '/technologies',
    title: 'Technologies',
    subtitle:
      'Leverage modern software technologies to build mobile, web, desktop, and cross-platform solutions.',
    sections: [
      {
        heading: 'Technology Areas',
        bullets: [
          'Expert iPhone app development.',
          'Hybrid app development across platforms.',
          'Cloud computing strategy and optimization.',
        ],
      },
    ],
  },
  {
    path: '/technologies/bi-tech/embedded-analytics',
    title: 'Embedded Analytics',
    subtitle:
      'Embed real-time dashboards and insights directly in your applications for better user decisions.',
    sections: [
      {
        heading: 'Embedded Analytics Services',
        bullets: [
          'Seamless in-app integration of dashboards and reports.',
          'Real-time data connectivity within business workflows.',
          'Security and governance with role-based controls.',
          'Custom visualizations aligned with brand/UI standards.',
          'Scalable architecture with ongoing support and maintenance.',
        ],
      },
    ],
  },
  {
    path: '/technologies/bi-tech/embedded-analytics-with-powerbi',
    title: 'Embedded Analytics with Power BI',
    subtitle:
      'Integrate Power BI into your products to provide interactive analytics and real-time insights.',
    sections: [
      {
        heading: 'Power BI Embedded Services',
        bullets: [
          'Seamless embedding of Power BI dashboards and reports.',
          'Secure real-time data connectivity and governance controls.',
          'Interactive visualizations for self-service exploration.',
          'Custom branded analytics experience for your applications.',
          'Performance optimization and continuous support.',
        ],
      },
    ],
  },
  {
    path: '/technologies/data-engineering-services',
    title: 'Data Engineering',
    subtitle:
      'Build robust, scalable data foundations that turn raw data into reliable business intelligence.',
    sections: [
      {
        heading: 'Data Engineering Services',
        bullets: [
          'Data integration and ETL pipelines.',
          'Automated, secure data pipeline development.',
          'Data warehousing and scalable architecture design.',
          'Data quality and governance implementation.',
        ],
      },
      {
        heading: 'Why It Matters',
        bullets: [
          'Provides the foundation for advanced analytics and decision-making.',
          'Improves data reliability, accessibility, and scalability.',
          'Enables innovation with efficient data operations.',
        ],
      },
    ],
  },
  {
    path: '/technologies/data-engineering-services/azure-data-factory',
    title: 'Azure Data Factory',
    subtitle:
      'Orchestrate and automate enterprise data pipelines with scalable integration and transformation.',
    sections: [
      {
        heading: 'Azure Data Factory Capabilities',
        bullets: [
          'Seamless data integration across databases, files, and cloud sources.',
          'Scheduled and event-triggered pipelines for batch and real-time needs.',
          'Flexible transformations for cleansing, joining, and enrichment.',
          'Monitoring, alerting, and error handling for reliability.',
          'Hybrid and multi-cloud integration support.',
        ],
      },
    ],
  },
  {
    path: '/technologies/data-engineering-services/advanced-analytics-with-azure-sql',
    title: 'Advanced Analytics with Azure SQL',
    subtitle:
      'Use Azure SQL analytics and in-database ML to generate faster, real-time insights.',
    sections: [
      {
        heading: 'Azure SQL Analytics',
        bullets: [
          'In-database machine learning for real-time predictions.',
          'Streaming analytics with Azure Stream Analytics integration.',
          'Data visualization and reporting using Power BI.',
          'Scalable data warehousing with Azure SQL Data Warehouse.',
        ],
      },
    ],
  },
];

export const ALL_CONTENT_PAGES: CyberPageContent[] = [...CYBER_PAGES, ...SERVICE_TECH_PAGES];

export function getCyberPage(path: string): CyberPageContent | undefined {
  return CYBER_PAGES.find((page) => page.path === path);
}

export function getContentPage(path: string): CyberPageContent | undefined {
  return ALL_CONTENT_PAGES.find((page) => page.path === path);
}
