import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND } from '../constants/brand';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

const leadersIntro =
  'At Orange Data Tech, our Team Leaders play a pivotal role in driving excellence and innovation across all our projects. With extensive experience and expertise in business intelligence, data analytics, and predictive analysis, our Team Leaders are dedicated to delivering exceptional results. They guide their teams with vision, fostering collaboration, creativity, and a focus on solving complex business challenges. By empowering their teams and aligning efforts with our strategic goals, our Team Leaders ensure that we continue to provide businesses with data-driven insights and support their digital transformation journey.';

const coreTeamIntro =
  'At Orange Data Tech, we are guided by a dedicated and experienced Executive Team that leads our company towards success and innovation. Comprised of industry veterans with deep expertise in business intelligence, data analytics, and predictive analysis, our Executive Team drives our strategic vision and ensures our commitment to empowering businesses with data-driven insights and accelerating their digital transformation journey.';

const leaders: TeamMember[] = [
  {
    name: 'Lovleet Jain',
    role: 'Founder',
    bio: 'Lovleet Jain, a tech evangelist with nearly three decades of experience, began his career as an entrepreneur and has played a key role in the growth of a publicly listed company. As the founder of Orange Data Tech, he specializes in data engineering, analytics, and machine learning.',
  },
  {
    name: 'Samanvay Gupta',
    role: 'Co-founder & CTO',
    bio: 'With over 25 years of experience in IT, Samanvay leads technology strategy and innovation in data engineering, analytics, and cloud platforms such as AWS, Microsoft Fabric, and Snowflake. He is passionate about building scalable data solutions.',
  },
  {
    name: 'Deepesh Bhatia',
    role: 'Product & Technology Leader',
    bio: 'Deepesh Bhatia is an experienced product and technology leader with over 20 years in software development, delivery, and management, specializing in AI, Cloud, DevOps, front-end engineering, and microservices architecture.',
  },
  {
    name: 'Shalini Jain',
    role: 'Co-founder',
    bio: 'Shalini co-founded Orange Data Tech alongside Lovleet and balances strategic direction with hands-on execution across multiple functions. She plays a pivotal role in Accounts Payable/Receivable and HR operations.',
  },
];

const coreTeam: TeamMember[] = [
  { name: 'Aditya Upadhyay', role: 'Frontend Developer', bio: 'Skilled Frontend Developer with 3 years of experience crafting dynamic, user-friendly, and visually appealing web applications using modern frontend technologies.' },
  { name: 'Aman Soni', role: 'Software Engineer', bio: 'Accomplished Software Engineer with hands-on experience in Java Spring Boot, SQL, Azure DevOps, backend APIs, CI/CD pipelines, and secure enterprise applications.' },
  { name: 'Ansh Jain', role: 'Software Engineer - Data Engineering', bio: 'Specializes in Microsoft Fabric and Python with experience building scalable ETL/ELT pipelines, Lakehouse architectures, and data warehousing solutions.' },
  { name: 'Arun Mewada', role: 'Data Engineer', bio: 'Talented Data Engineer with experience in building and optimizing data pipelines and scalable data architectures using strong ETL foundations.' },
  { name: 'Astha', role: 'Team Member', bio: 'Contributing member of the Orange Data Tech team focused on delivering high-quality client outcomes.' },
  { name: 'Chetan Dubey', role: 'Marketing Associate', bio: 'Dynamic Marketing Associate with expertise in market research, content creation, and campaign execution to drive brand growth and engagement.' },
  { name: 'Chhaya Sharma', role: 'Data Quality Engineer', bio: 'Dedicated Data Quality Engineer with 5 years of experience ensuring accuracy, consistency, and reliability through strong data validation practices.' },
  { name: 'Christina James', role: 'Senior Software Engineer', bio: 'Highly skilled Senior Software Engineer with 10 years of experience building robust, scalable, high-performance software solutions.' },
  { name: 'Harsh Dubey', role: 'Full Stack Developer', bio: 'Results-oriented Full Stack Developer with 4.5+ years of experience building scalable, high-performing web applications and end-to-end digital solutions.' },
  { name: 'Himanshi Joshi', role: 'QA Engineer', bio: 'Dedicated QA Engineer with 2 years of experience in manual testing, defect analysis, and end-to-end validation of web and API-based applications.' },
  { name: 'Himanshu Vaish', role: 'Junior Data Scientist', bio: 'Passionate Data Scientist with 1+ years of experience delivering impactful, data-driven solutions and innovative problem-solving.' },
  { name: 'Ira Prasad', role: 'Business Analyst', bio: 'Business Analyst with 5 years of experience in QA and requirement analysis, translating complex needs into actionable business and technical solutions.' },
  { name: 'Isha Thakur', role: 'Associate Software Engineer', bio: 'Experienced in data analysis, validation, cleansing, ETL processes, and full-stack development to ensure integrity across platforms.' },
  { name: 'Mithun Yadav', role: 'Full Stack BI Developer', bio: 'Talented Full Stack BI Developer with 3 years of experience building and optimizing business intelligence solutions across frontend and backend.' },
  { name: 'Muskan Agrawal', role: 'Software Engineer - Data Engineering', bio: 'Specializes in Microsoft Fabric with experience in scalable ETL/ELT pipelines, Lakehouse architecture, and Power BI reporting support.' },
  { name: 'Mustafa Pithewan', role: 'Team Member', bio: 'Brings fintech experience and exposure to real-world data challenges and analytical problem-solving in fast-paced data environments.' },
  { name: 'Nishchay Patel', role: 'BI / Data Analytics / Data Engineering', bio: 'Strong expertise in Power BI, SQL, Python, and Microsoft Fabric, focused on scalable data-driven solutions and ETL pipeline development.' },
  { name: 'Pragati Gupta', role: 'Data Engineer', bio: 'Contributes to scalable, high-performance data solutions with Microsoft Fabric, ETL pipeline development, and Azure Function-based automation.' },
  { name: 'Praveen Mewada', role: 'Data Engineer', bio: 'Designs and maintains scalable data pipelines and ETL workflows with a focus on data quality, integration, and actionable insights.' },
  { name: 'Preet Hora', role: 'Associate Software Developer', bio: 'Focused on building efficient software solutions with experience in Playwright automation, manual testing, and SQL-based validation.' },
  { name: 'Priyanka Sharma', role: 'Full Stack BI Developer', bio: 'Talented Full Stack BI Developer with 3 years of experience delivering scalable and user-friendly end-to-end business intelligence applications.' },
  { name: 'Raghav Mehta', role: 'AI/ML & Data Engineering Professional', bio: 'Systems-driven professional delivering production LLM/RAG features, medallion ETL, and containerized Azure services with reliability and observability.' },
  { name: 'Rishika Jain', role: 'HR Executive', bio: 'Results-driven HR Executive with 3+ years in recruitment and HR operations, specializing in end-to-end talent acquisition and workforce coordination.' },
  { name: 'Ritik Jaiswal', role: 'Software Engineer', bio: 'Software Engineer with 1.5+ years in API development and data engineering using Django REST Framework, PySpark, SQL, Power BI, and Fabric.' },
  { name: 'Saji Temre', role: 'Senior Software Engineer', bio: 'Senior Software Engineer with 15 years of experience delivering innovative, scalable, and high-performance software systems.' },
  { name: 'Saloni Saxena', role: 'Full Stack Developer', bio: 'Skilled full-stack developer with strong expertise in ETL, data cleaning, and BI development across the full data lifecycle.' },
  { name: 'Shashank Chhoker', role: 'Data Scientist', bio: 'Data scientist with 2 years in data engineering and analytics, focused on statistical analysis, machine learning, and scalable data solutions.' },
  { name: 'Shraddha Dogne', role: 'HR & Operations Executive', bio: 'Experienced HR & Operations Executive with expertise in recruitment, onboarding, payroll, employee engagement, and HR compliance.' },
  { name: 'Shreya Jain', role: 'Business Analyst', bio: 'Business Analyst with three years of progressive experience aligning technical solutions with business strategy using data-informed decision making.' },
  { name: 'Sourabh Kosti', role: 'Software Development Professional', bio: 'Dedicated professional with a strong software development background, focused on solving complex problems and driving innovation.' },
];

function MemberCard({ member, index, dark = false }: { member: TeamMember; index: number; dark?: boolean }) {
  return (
    <article className={dark ? 'glass-dark rounded-[20px] p-5 h-full' : 'card-fort p-5 h-full'}>
      <div className="flex items-center gap-3 mb-3">
        <img
          src={`https://i.pravatar.cc/120?img=${(index % 70) + 1}`}
          alt={member.name}
          className="w-14 h-14 rounded-full object-cover border border-fort-purple/20"
        />
        <div>
          <h3 className={`${dark ? 'text-white' : 'text-[#06021D]'} font-bold text-sm leading-tight`}>{member.name}</h3>
          <p className="text-fort-purple-light text-xs font-semibold">{member.role}</p>
        </div>
      </div>
      <p className={`${dark ? 'text-white/65' : 'text-[#5A6078]'} text-[13px] leading-relaxed`}>{member.bio}</p>
    </article>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[76px]">
        <section className="relative h-[170px] sm:h-[220px] overflow-hidden bg-fort-dark">
          <img src={BRAND.images.aboutHero} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06021D]/92 via-[#06021D]/72 to-[#06021D]/55" />
          <div className="absolute inset-0 grid-dark opacity-35" />
          <div className="container-fort relative h-full flex items-center">
            <div>
              <p className="text-fort-purple-light text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Our People</p>
              <h1 className="text-white text-3xl sm:text-4xl font-extrabold">Team</h1>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-fort-light circuit-deco">
          <div className="container-fort">
          <h2 className="text-[#06021D] text-3xl font-extrabold mb-3">Leaders</h2>
          <p className="text-[#5A6078] text-sm leading-relaxed mb-8 max-w-5xl">{leadersIntro}</p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leaders.map((member, idx) => (
              <MemberCard key={member.name} member={member} index={idx} />
            ))}
          </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-fort-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-dark opacity-30" />
          <div className="container-fort relative">
          <h2 className="text-white text-3xl font-extrabold mb-3">Core Team</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-5xl">{coreTeamIntro}</p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {coreTeam.map((member, idx) => (
              <MemberCard key={member.name} member={member} index={idx + 10} dark />
            ))}
          </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
