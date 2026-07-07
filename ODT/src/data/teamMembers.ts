export type TeamCategory = 'leader' | 'core';

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  category: TeamCategory;
  bio: string;
  fullBio: string;
  photo: string;
  skills: string[];
  experience?: string;
  location?: string;
  focus?: string;
};

const TEAM_PHOTO_BASE = 'https://orangedatatech.com/wp-content/uploads';

const teamPhotoUrls: Record<string, string> = {
  'lovleet-jain': `${TEAM_PHOTO_BASE}/2024/11/IMG_0598-150x150.jpeg`,
  'samanvay-gupta': `${TEAM_PHOTO_BASE}/2025/10/Image_20250122_195652-e1760424994950-150x150.jpeg`,
  'deepesh-bhatia': `${TEAM_PHOTO_BASE}/2026/04/shared-image-4-150x150.jpg`,
  'shalini-jain': `${TEAM_PHOTO_BASE}/2025/10/Image-3-150x150.jpeg`,
  'aditya-upadhyay': `${TEAM_PHOTO_BASE}/2025/10/WhatsApp-Image-2025-10-14-at-12.08.52-PM-e1760425312736-150x150.jpeg`,
  'aman-soni': `${TEAM_PHOTO_BASE}/2025/10/IMG20250827200137__1_-removebg-preview-150x150.jpg`,
  'ansh-jain': `${TEAM_PHOTO_BASE}/2026/04/image-26-150x150.jpg`,
  'arun-mewada': `${TEAM_PHOTO_BASE}/2025/10/Image-4-150x150.jpeg`,
  astha: `${TEAM_PHOTO_BASE}/2025/03/linkedin.png`,
  'chetan-dubey': `${TEAM_PHOTO_BASE}/2025/12/Untitled-design-150x150.jpg`,
  'chhaya-sharma': `${TEAM_PHOTO_BASE}/2025/10/IMG_20251013_194112-150x150.jpeg`,
  'christina-james': `${TEAM_PHOTO_BASE}/2025/10/WhatsApp-Image-2025-10-14-at-12.27.41-PM-e1760425786725-150x150.jpeg`,
  'harsh-dubey': `${TEAM_PHOTO_BASE}/2026/04/1732125229507__1__1-removebg-preview-150x150.jpg`,
  'himanshi-joshi': `${TEAM_PHOTO_BASE}/2025/10/IMG-20250805-WA0001-e1760424610512-150x150.jpeg`,
  'himanshu-vaish': `${TEAM_PHOTO_BASE}/2025/10/WhatsApp-Image-2025-10-14-at-12.39.38-PM-e1760426018668-150x150.jpeg`,
  'ira-prasad': `${TEAM_PHOTO_BASE}/2026/04/1770100920746-removebg-preview-150x150.jpg`,
  'isha-thakur': `${TEAM_PHOTO_BASE}/2025/10/Image-1-150x150.jpeg`,
  'mithun-yadav': `${TEAM_PHOTO_BASE}/2025/10/Mithun-Photo1-150x150.jpg`,
  'muskan-agrawal': `${TEAM_PHOTO_BASE}/2026/04/Image-31-150x150.jpg`,
  'mustafa-pithewan': `${TEAM_PHOTO_BASE}/2026/04/shared-image-1-150x150.jpg`,
  'nishchay-patel': `${TEAM_PHOTO_BASE}/2026/04/shared-image-2-1-150x150.jpg`,
  'pragati-gupta': `${TEAM_PHOTO_BASE}/2026/04/Media-4-150x150.jpg`,
  'praveen-mewada': `${TEAM_PHOTO_BASE}/2025/10/Image-150x150.jpg`,
  'preet-hora': `${TEAM_PHOTO_BASE}/2026/04/Media-2-150x150.jpg`,
  'priyanka-sharma': `${TEAM_PHOTO_BASE}/2025/10/WhatsApp-Image-2025-10-14-at-2.18.37-PM-150x150.jpeg`,
  'raghav-mehta': `${TEAM_PHOTO_BASE}/2025/11/1750425021363__1_-removebg-preview-1-1-150x150.png`,
  'rishika-jain': `${TEAM_PHOTO_BASE}/2026/04/Media-1-150x150.jpg`,
  'ritik-jaiswal': `${TEAM_PHOTO_BASE}/2025/10/shared-image-150x150.jpeg`,
  'saji-temre': `${TEAM_PHOTO_BASE}/2025/10/WhatsApp-Image-2025-10-14-at-11.31.31-AM-1-e1760433188797-150x150.jpeg`,
  'saloni-saxena': `${TEAM_PHOTO_BASE}/2025/10/Media-150x150.jpeg`,
  'shashank-chhoker': `${TEAM_PHOTO_BASE}/2025/10/WhatsApp-Image-2025-10-14-at-12.31.29-PM-150x150.jpeg`,
  'shraddha-dogne': `${TEAM_PHOTO_BASE}/2025/10/WhatsApp-Image-2025-10-14-at-12.18.25-PM-e1760433027896-150x150.jpeg`,
  'shreya-jain': `${TEAM_PHOTO_BASE}/2025/10/shared-image-1-150x150.jpeg`,
  'sourabh-kosti': '/team/sourabh-kosti.png',
};

export const leadersIntro =
  'At Orange Data Tech, our Team Leaders play a pivotal role in driving excellence and innovation across all our projects. With extensive experience and expertise in business intelligence, data analytics, and predictive analysis, our Team Leaders are dedicated to delivering exceptional results.';

export const coreTeamIntro =
  'At Orange Data Tech, we are guided by a dedicated and experienced Executive Team that leads our company towards success and innovation. Comprised of industry veterans with deep expertise in business intelligence, data analytics, and predictive analysis, our Executive Team drives our strategic vision.';

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function member(
  name: string,
  role: string,
  category: TeamCategory,
  bio: string,
  extras: Partial<Omit<TeamMember, 'slug' | 'name' | 'role' | 'category' | 'bio' | 'photo'>> = {},
): TeamMember {
  const slug = slugify(name);
  return {
    slug,
    name,
    role,
    category,
    bio,
    fullBio: extras.fullBio ?? bio,
    photo: teamPhotoUrls[slug] ?? `${TEAM_PHOTO_BASE}/2025/10/banner_uwp_banner_thumb.png`,
    skills: extras.skills ?? [],
    experience: extras.experience,
    location: extras.location,
    focus: extras.focus,
  };
}

export const teamMembers: TeamMember[] = [
  member('Lovleet Jain', 'Founder', 'leader', 'Lovleet Jain, a tech evangelist with nearly three decades of experience, began his career as an entrepreneur and has played a key role in the growth of a publicly listed company.', {
    fullBio:
      'Lovleet Jain, a tech evangelist with nearly three decades of experience, began his career as an entrepreneur and has played a key role in the growth of a publicly listed company. As the founder of Orange Data Tech, he specializes in data engineering, analytics, and machine learning, shaping the company vision and long-term technology roadmap.',
    skills: ['Data Engineering', 'Analytics', 'Machine Learning', 'Business Strategy', 'Digital Transformation'],
    experience: '25+ years',
    location: 'India',
    focus: 'Company vision, data platforms, and enterprise analytics delivery',
  }),
  member('Shalini Jain', 'Co-founder', 'leader', 'Shalini co-founded Orange Data Tech alongside Lovleet and balances strategic direction with hands-on execution across multiple functions.', {
    fullBio:
      'Shalini co-founded Orange Data Tech alongside Lovleet and balances strategic direction with hands-on execution across multiple functions. She plays a pivotal role in Accounts Payable/Receivable and HR operations while supporting organizational growth.',
    skills: ['Operations', 'HR', 'Finance', 'Strategic Planning', 'Team Leadership'],
    experience: '15+ years',
    location: 'India',
    focus: 'Operations, people strategy, and organizational growth',
  }),
  member('Samanvay Gupta', 'Co-founder & CTO', 'leader', 'With over 25 years of experience in IT, Samanvay leads technology strategy and innovation in data engineering, analytics, and cloud platforms.', {
    fullBio:
      'With over 25 years of experience in IT, Samanvay leads technology strategy and innovation in data engineering, analytics, and cloud platforms such as AWS, Microsoft Fabric, and Snowflake. He is passionate about building scalable data solutions and mentoring engineering teams.',
    skills: ['AWS', 'Microsoft Fabric', 'Snowflake', 'Cloud Architecture', 'Data Engineering'],
    experience: '25+ years',
    location: 'India',
    focus: 'Technology strategy, cloud platforms, and scalable data architecture',
  }),
  member('Deepesh Bhatia', 'Product & Technology Leader', 'leader', 'Deepesh Bhatia is an experienced product and technology leader with over 20 years in software development, delivery, and management.', {
    fullBio:
      'Deepesh Bhatia is an experienced product and technology leader with over 20 years in software development, delivery, and management, specializing in AI, Cloud, DevOps, front-end engineering, and microservices architecture. He drives product excellence across delivery teams.',
    skills: ['AI', 'Cloud', 'DevOps', 'Microservices', 'Frontend Engineering', 'Product Leadership'],
    experience: '20+ years',
    location: 'India',
    focus: 'Product delivery, engineering excellence, and platform modernization',
  }),
  member('Aditya Upadhyay', 'Frontend Developer', 'core', 'Skilled Frontend Developer with 3 years of experience crafting dynamic, user-friendly, and visually appealing web applications.', {
    skills: ['React', 'TypeScript', 'UI/UX', 'Responsive Design'],
    experience: '3 years',
    focus: 'Modern frontend interfaces and user experience',
  }),
  member('Aman Soni', 'Software Engineer', 'core', 'Accomplished Software Engineer with hands-on experience in Java Spring Boot, SQL, Azure DevOps, and secure enterprise applications.', {
    skills: ['Java Spring Boot', 'SQL', 'Azure DevOps', 'REST APIs', 'CI/CD'],
    experience: '3+ years',
    focus: 'Backend services and enterprise application delivery',
  }),
  member('Ansh Jain', 'Software Engineer - Data Engineering', 'core', 'Specializes in Microsoft Fabric and Python with experience building scalable ETL/ELT pipelines and Lakehouse architectures.', {
    skills: ['Microsoft Fabric', 'Python', 'ETL/ELT', 'Lakehouse', 'Data Warehousing'],
    experience: '2+ years',
    focus: 'Data pipeline engineering and lakehouse solutions',
  }),
  member('Arun Mewada', 'Data Engineer', 'core', 'Talented Data Engineer with experience in building and optimizing data pipelines and scalable data architectures.', {
    skills: ['ETL', 'Data Pipelines', 'SQL', 'Data Architecture'],
    experience: '3+ years',
    focus: 'Pipeline optimization and data platform reliability',
  }),
  member('Astha', 'Team Member', 'core', 'Contributing member of the Orange Data Tech team focused on delivering high-quality client outcomes.', {
    skills: ['Collaboration', 'Client Delivery', 'Problem Solving'],
    focus: 'Client-focused project execution',
  }),
  member('Chetan Dubey', 'Marketing Associate', 'core', 'Dynamic Marketing Associate with expertise in market research, content creation, and campaign execution.', {
    skills: ['Market Research', 'Content Creation', 'Campaigns', 'Brand Growth'],
    experience: '2+ years',
    focus: 'Brand visibility and marketing campaigns',
  }),
  member('Chhaya Sharma', 'Data Quality Engineer', 'core', 'Dedicated Data Quality Engineer with 5 years of experience ensuring accuracy, consistency, and reliability.', {
    skills: ['Data Validation', 'SQL', 'Python', 'Quality Frameworks'],
    experience: '5 years',
    focus: 'Data integrity and quality assurance',
  }),
  member('Christina James', 'Senior Software Engineer', 'core', 'Highly skilled Senior Software Engineer with 10 years of experience building robust, scalable software solutions.', {
    skills: ['Software Architecture', 'Scalable Systems', 'API Design', 'Performance'],
    experience: '10 years',
    focus: 'Enterprise-grade software engineering',
  }),
  member('Harsh Dubey', 'Full Stack Developer', 'core', 'Results-oriented Full Stack Developer with 4.5+ years of experience building scalable web applications.', {
    skills: ['React', 'Node.js', 'REST APIs', 'Full Stack Development'],
    experience: '4.5+ years',
    focus: 'End-to-end web application development',
  }),
  member('Himanshi Joshi', 'QA Engineer', 'core', 'Dedicated QA Engineer with 2 years of experience in manual testing and end-to-end validation.', {
    skills: ['Manual Testing', 'API Testing', 'Defect Analysis', 'Test Planning'],
    experience: '2 years',
    focus: 'Quality assurance across web and API products',
  }),
  member('Himanshu Vaish', 'Junior Data Scientist', 'core', 'Passionate Data Scientist with 1+ years of experience delivering impactful, data-driven solutions.', {
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'Statistics'],
    experience: '1+ years',
    focus: 'Predictive modeling and analytics',
  }),
  member('Ira Prasad', 'Business Analyst', 'core', 'Business Analyst with 5 years of experience in QA and requirement analysis.', {
    skills: ['Requirements Analysis', 'QA', 'Stakeholder Management', 'Documentation'],
    experience: '5 years',
    focus: 'Bridging business needs with technical solutions',
  }),
  member('Isha Thakur', 'Associate Software Engineer', 'core', 'Experienced in data analysis, validation, cleansing, ETL processes, and full-stack development.', {
    skills: ['ETL', 'Data Validation', 'Full Stack', 'SQL'],
    experience: '2+ years',
    focus: 'Data integrity and application development',
  }),
  member('Mithun Yadav', 'Full Stack BI Developer', 'core', 'Talented Full Stack BI Developer with 3 years of experience building business intelligence solutions.', {
    skills: ['Power BI', 'SQL', 'ETL', 'Dashboard Development'],
    experience: '3 years',
    focus: 'BI dashboards and analytics delivery',
  }),
  member('Muskan Agrawal', 'Software Engineer - Data Engineering', 'core', 'Specializes in Microsoft Fabric with experience in scalable ETL/ELT pipelines and Power BI reporting.', {
    skills: ['Microsoft Fabric', 'ETL/ELT', 'Power BI', 'Lakehouse'],
    experience: '2+ years',
    focus: 'Fabric-based data engineering and reporting',
  }),
  member('Mustafa Pithewan', 'Team Member', 'core', 'Brings fintech experience and exposure to real-world data challenges in fast-paced environments.', {
    skills: ['Fintech', 'Data Analysis', 'Problem Solving'],
    focus: 'Financial data and analytical problem-solving',
  }),
  member('Nishchay Patel', 'BI / Data Analytics / Data Engineering', 'core', 'Strong expertise in Power BI, SQL, Python, and Microsoft Fabric for scalable data-driven solutions.', {
    skills: ['Power BI', 'SQL', 'Python', 'Microsoft Fabric', 'ETL'],
    experience: '3+ years',
    focus: 'Analytics engineering and BI solutions',
  }),
  member('Pragati Gupta', 'Data Engineer', 'core', 'Contributes to scalable data solutions with Microsoft Fabric, ETL pipelines, and Azure Function automation.', {
    skills: ['Microsoft Fabric', 'ETL', 'Azure Functions', 'Python'],
    experience: '2+ years',
    focus: 'Automated data pipelines and cloud integration',
  }),
  member('Praveen Mewada', 'Data Engineer', 'core', 'Designs and maintains scalable data pipelines and ETL workflows with a focus on data quality.', {
    skills: ['ETL', 'Data Pipelines', 'SQL', 'Data Integration'],
    experience: '3+ years',
    focus: 'Pipeline design and data integration',
  }),
  member('Preet Hora', 'Associate Software Developer', 'core', 'Focused on building efficient software solutions with Playwright automation and SQL-based validation.', {
    skills: ['Playwright', 'Automation', 'SQL', 'Testing'],
    experience: '1+ years',
    focus: 'Test automation and software quality',
  }),
  member('Priyanka Sharma', 'Full Stack BI Developer', 'core', 'Talented Full Stack BI Developer with 3 years of experience delivering end-to-end BI applications.', {
    skills: ['Power BI', 'SQL', 'Frontend', 'ETL'],
    experience: '3 years',
    focus: 'User-friendly BI application development',
  }),
  member('Raghav Mehta', 'AI/ML & Data Engineering Professional', 'core', 'Systems-driven professional delivering production LLM/RAG features and medallion ETL on Azure.', {
    skills: ['LLM/RAG', 'Azure', 'ETL', 'MLOps', 'Python'],
    experience: '4+ years',
    focus: 'AI-powered data products and production ML',
  }),
  member('Rishika Jain', 'HR Executive', 'core', 'Results-driven HR Executive with 3+ years in recruitment and HR operations.', {
    skills: ['Recruitment', 'HR Operations', 'Talent Acquisition', 'Onboarding'],
    experience: '3+ years',
    focus: 'Talent acquisition and employee experience',
  }),
  member('Ritik Jaiswal', 'Software Engineer', 'core', 'Software Engineer with 1.5+ years in API development and data engineering using Django and PySpark.', {
    skills: ['Django REST', 'PySpark', 'SQL', 'Power BI', 'Fabric'],
    experience: '1.5+ years',
    focus: 'API development and data engineering',
  }),
  member('Saji Temre', 'Senior Software Engineer', 'core', 'Senior Software Engineer with 15 years of experience delivering innovative, scalable software systems.', {
    skills: ['Software Architecture', 'Enterprise Systems', 'Scalability', 'Mentorship'],
    experience: '15 years',
    focus: 'Large-scale software systems and team mentorship',
  }),
  member('Saloni Saxena', 'Full Stack Developer', 'core', 'Skilled full-stack developer with strong expertise in ETL, data cleaning, and BI development.', {
    skills: ['Full Stack', 'ETL', 'Data Cleaning', 'BI Development'],
    experience: '3+ years',
    focus: 'Full data lifecycle and application development',
  }),
  member('Shashank Chhoker', 'Data Scientist', 'core', 'Data scientist with 2 years in data engineering and analytics, focused on machine learning.', {
    skills: ['Machine Learning', 'Statistics', 'Python', 'Data Engineering'],
    experience: '2 years',
    focus: 'ML models and scalable analytics',
  }),
  member('Shraddha Dogne', 'HR & Operations Executive', 'core', 'Experienced HR & Operations Executive with expertise in recruitment, payroll, and compliance.', {
    skills: ['HR Operations', 'Payroll', 'Recruitment', 'Compliance'],
    experience: '4+ years',
    focus: 'People operations and organizational compliance',
  }),
  member('Shreya Jain', 'Business Analyst', 'core', 'Business Analyst with three years of progressive experience aligning technical solutions with business strategy.', {
    skills: ['Business Analysis', 'Requirements', 'Data-Informed Decisions', 'Stakeholder Alignment'],
    experience: '3 years',
    focus: 'Strategy alignment and solution design',
  }),
  member('Sourabh Kosti', 'Software Development Professional', 'core', 'Dedicated professional with a strong software development background, focused on solving complex problems.', {
    skills: ['Software Development', 'Problem Solving', 'Innovation', 'Full Stack'],
    experience: '3+ years',
    focus: 'Engineering solutions and product innovation',
  }),
];

export const leaders = teamMembers.filter((m) => m.category === 'leader');
export const coreTeam = teamMembers.filter((m) => m.category === 'core');

export function getTeamMemberBySlug(slug?: string) {
  if (!slug) return undefined;
  return teamMembers.find((m) => m.slug === slug);
}

export function getMemberPhoto(member: TeamMember, size: 'card' | 'modal' = 'card') {
  if (size === 'modal') {
    return member.photo.replace(/-\d+x\d+(?=\.(jpg|jpeg|png|webp)$)/i, '');
  }
  return member.photo;
}
