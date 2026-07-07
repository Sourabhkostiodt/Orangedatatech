import CyberServicePageLayout, { type CyberServicePageConfig } from '../components/CyberServicePageLayout';

const config: CyberServicePageConfig = {
  breadcrumb: 'Cybersecurity / Services',
  title: 'Strategic Consulting',
  heroParagraphs: [
    'Strategic Identity Planning for Enterprise Success',
    'In a rapidly evolving threat landscape, organizations need more than operational IAM—they need strategic clarity. Our Identity & Access Management (IAM) Advisory Services provide the expertise to assess your current identity posture, define a clear roadmap aligned with business objectives, and chart the path to identity maturity. From initial assessment to vendor selection to implementation guidance, we help you transform identity from a compliance burden into a competitive advantage.',
  ],
  challengeSection: {
    title: 'Why IAM Advisory Services?',
    intro:
      'Organizations across all sectors struggle with identity complexity. Whether you’re modernizing legacy systems, preparing for a major cloud migration, facing audit pressure, or simply uncertain about your IAM direction—advisory services close the gap between current state chaos and desired state transformation.',
    items: [
      {
        title: 'Strategic Misalignment',
        text: 'Many organizations deploy IAM tools without first understanding business priorities, resulting in misaligned solutions that fail to deliver ROI.',
      },
      {
        title: 'Vendor Selection Paralysis',
        text: 'With dozens of IAM platforms available, choosing the right technology is daunting without independent, objective guidance.',
      },
      {
        title: 'Unclear Current State',
        text: 'Without a comprehensive assessment, you don’t know what you have, where the risks are, or which areas need immediate attention.',
      },
      {
        title: 'Compliance Risk Exposure',
        text: 'Fragmented IAM practices leave audit trails incomplete, create compliance violations, and expose organizations to regulatory fines and reputational damage.',
      },
      {
        title: 'Capability & Maturity Gaps',
        text: 'Most organizations lack visibility into their IAM maturity across identity lifecycle management, access management, and governance—making it impossible to prioritize improvements.',
      },
      {
        title: 'Resource & Skill Constraints',
        text: 'Internal teams lack the bandwidth, expertise, and tools to conduct thorough assessments while continuing day-to-day operations.',
      },
    ],
  },
  servicesSection: {
    title: 'Our IAM Advisory Services',
    intro:
      'We offer comprehensive advisory and assessment services tailored to your strategic needs. Our team of identity architects, governance experts, and technology specialists brings decades of experience in advising enterprises on complex identity transformations. Our integrated advisory approach combines assessment, strategy, design, and compliance guidance into one cohesive engagement.',
    blocks: [
      {
        title: 'Current-State Assessment',
        items: [
          'Architecture Review & Technology Inventory',
          '57+ Critical Data Point Evaluation',
          'Cross-Functional Stakeholder Interviews (IT, Security, Compliance, HR, Business)',
          'Process, Policy & Procedure Gap Analysis',
          'Risk & Compliance Exposure Identification',
        ],
      },
      {
        title: 'Maturity & Capability Analysis',
        items: [
          'Maturity Scoring Across Three IAM Pillars (ILM, AM, IGA)',
          'Peer Benchmarking Against Industry Standards',
          'Capability Gap Analysis with Visibility by Function',
          'Program Performance & Tool Effectiveness Review',
        ],
      },
      {
        title: 'Strategic Roadmap & Recommendations',
        items: [
          'Business Requirements & Strategic Objectives Alignment',
          'Future-State IAM Vision Definition',
          'Phased Implementation Roadmap (12-36 months) with timelines & resource estimates',
          'Technology Stack Recommendations (Vendor-Agnostic)',
          'ROI Business Case & Financial Justification',
        ],
      },
      {
        title: 'Governance, Architecture & Compliance',
        items: [
          'IAM Governance Framework & Operating Model Design',
          'Identity Architecture Planning (Cloud, Hybrid, On-Prem, Zero Trust)',
          'Regulatory Compliance Gap Analysis',
          'Policy Architecture, RBAC Design, SoD Framework',
          'Audit-Ready Evidence & Documentation Planning',
        ],
      },
      {
        title: 'Implementation Readiness & Change Planning',
        items: [
          'Vendor Evaluation & Selection Support',
          'Organization & Change Management Strategy',
          'Implementation Risk Assessment & Mitigation Plans',
          'Success Metrics, KPIs & Performance Dashboard Design',
          'Post-Assessment Implementation Planning & Kick-Off Support',
        ],
      },
    ],
  },
  engagementSection: {
    title: 'IAM Advisory Engagement Models',
    models: [
      {
        title: 'Health Check Assessment (Quick-Start)',
        idealFor: 'Organizations wanting a quick baseline or preparing for larger transformation.',
        items: [
          'Focus on current-state discovery and quick wins',
          'Assessment report with findings and recommendations',
          'Executive summary and stakeholder briefing',
        ],
        output: 'Clear picture of where you are today; immediate improvement opportunities',
      },
      {
        title: 'Strategic Roadmap Assessment',
        idealFor: 'Organizations ready to plan a multi-year IAM transformation.',
        items: [
          'Comprehensive current-state assessment',
          'Future-state vision definition aligned with business strategy',
          'Phased implementation roadmap (6-36 months)',
          'Technology stack recommendations',
          'Business case & ROI analysis',
        ],
        output: 'Detailed, executable roadmap; vendor-agnostic technology recommendations; justified investment case',
      },
    ],
  },
  methodologySection: {
    title: 'Our Assessment Methodology',
    phases: [
      {
        title: 'Phase 1: Discover & Assess (Weeks 1-2)',
        items: [
          'Stakeholder interviews across IT, Security, Compliance, HR, and Business units',
          'Current architecture and technology inventory',
          'Policy, process, and procedure documentation review',
          'Compliance & regulatory requirement analysis',
          'Data collection across 57 assessment criteria',
        ],
      },
      {
        title: 'Phase 2: Analyze & Evaluate (Weeks 2-3)',
        items: [
          'Gap analysis: Current state vs. industry best practices',
          'Maturity scoring across three IAM pillars',
          'Risk & compliance exposure assessment',
          'Technology effectiveness evaluation',
          'Capability & resource analysis',
        ],
      },
      {
        title: 'Phase 3: Design & Recommend (Week 4)',
        items: [
          'Strategic roadmap development',
          'Technology recommendations (vendor-agnostic)',
          'Governance & operating model design',
          'Prioritized recommendations with business context',
          'ROI modeling & financial justification',
          'Implementation timelines & resource estimates',
        ],
      },
      {
        title: 'Phase 4: Present & Plan (Week 5-6)',
        items: [
          'Executive briefing with scorecard & findings',
          'Stakeholder workshops to align on recommendations',
          'Detailed assessment report delivery (20-30 pages)',
          'Implementation readiness review',
          'Next-steps planning',
        ],
      },
    ],
  },
  whyChooseSection: {
    title: 'Why Choose Orange Data Tech for Managed Identity?',
    intro: 'More than two decades of IAM experience on identity transformations, maturity improvements, and strategic modernization',
    blocks: [
      {
        title: 'Specialist IAM Advisory Teams (Not Generic IT Consultants)',
        items: [
          'Framework-Based Approach: Maturity Models, Reference Architectures',
          'Cross-Industry Experience & Best Practices',
          'Technology-Vendor Relationships (Objective, Not Proprietary)',
          'Published Methodologies & Proven Accelerators',
          'Continuous Industry Engagement & Trend Awareness',
        ],
      },
      {
        title: 'Holistic Assessment Methodology',
        text: 'Comprehensive approach capturing people, process, and technology dimensions of identity.',
        items: [
          'Multi-Stakeholder Interview Process (Cross-Functional Teams)',
          '57 Critical Data Point Assessment',
          'Technical Infrastructure Deep-Dive',
          'Policy, Procedure & Governance Review',
          'Compliance & Audit Framework Validation',
          'Maturity Benchmarking Against Industry Standards',
        ],
      },
      {
        title: 'Vendor-Agnostic Guidance',
        text: 'Our recommendations are driven by your business needs and security requirements—not vendor partnerships or commission structures.',
        items: [
          'Multi-Platform Expertise (Saviynt, Entra, Okta, SailPoint, ForgeRock, Ping, Oracle etc.)',
          'Objective Technology Assessments',
          'No Vendor Lock-In Recommendations',
          'Best-of-Breed Solution Architecture',
          'Independent Tool Comparisons',
          'Future Flexibility & Scalability Planning',
        ],
      },
      {
        title: 'Actionable Recommendations',
        text: 'Every assessment delivers clear, prioritized, actionable findings—not theoretical analysis.',
        items: [
          'Executive-Ready Scorecards & Dashboards',
          'Detailed Findings with Business Context',
          'Prioritized Roadmap (Quick Wins to Long-Term Strategy)',
          'Implementation Timelines & Resource Estimates',
          'Risk Assessment & Mitigation Plans',
          'Success Metrics & Progress Tracking',
        ],
      },
      {
        title: 'Strategic Business Alignment',
        text: 'Advisory focused on connecting IAM initiatives to measurable business outcomes—revenue impact, risk reduction, compliance savings, operational efficiency.',
        items: [
          'Business Case Development & ROI Modeling',
          'Executive Stakeholder Engagement',
          'Risk & Compliance Quantification',
          'Organizational Change & Adoption Planning',
          'KPI Definition & Measurement Frameworks',
          'Governance & Accountability Structures',
        ],
      },
      {
        title: 'Advisory to Implementation Continuum',
        text: 'Advisory services that naturally transition into implementation, managed operations, or ongoing optimization—ensuring strategy becomes reality.',
        items: [
          'Strategy-to-Execution Alignment',
          'Implementation Readiness Planning',
          'Vendor Onboarding & Project Kick-Off Support',
          'Post-Implementation Optimization',
          'Ongoing Advisory & Strategic Partnerships',
          'Quarterly Business Reviews & Roadmap Updates',
        ],
      },
    ],
  },
};

export default function StrategicConsultingPage() {
  return <CyberServicePageLayout config={config} />;
}
