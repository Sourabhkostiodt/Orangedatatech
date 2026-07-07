import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND } from '../constants/brand';

type BlogPost = {
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
};

const posts: BlogPost[] = [
  {
    title: 'Power BI and Amazon QuickSight: A Detailed Comparison',
    author: 'Deepali Tomar',
    date: 'Mar 27, 2026',
    category: 'BI Tech',
    excerpt:
      'In today’s rapidly evolving business intelligence landscape, choosing the right tool is essential for effective data analysis and decision-making.',
  },
  {
    title: 'How to Trigger Microsoft Fabric Pipelines Using HTTP Request',
    author: 'Apeksha Saraf',
    date: 'Mar 26, 2026',
    category: 'Data Engineering',
    excerpt:
      'Microsoft Fabric data pipeline capabilities provide powerful tools for orchestrating and automating data workflows while scheduled triggers are not enough.',
  },
  {
    title: 'Optimize Power BI Sharing Through SharePoint Easily: The Minimum Permission Approach',
    author: 'Apeksha Saraf',
    date: 'Mar 25, 2026',
    category: 'Data Security',
    excerpt:
      'How to optimize Power BI sharing through SharePoint with minimum permission logic to maximize business intelligence.',
  },
  {
    title: 'Implementing Row-Level Security Power BI: A Practical Approach',
    author: 'Sailu Soma',
    date: 'Dec 4, 2024',
    category: 'Data Engineering',
    excerpt:
      'Row-Level Security (RLS) in Power BI is a feature that restricts data access for users based on roles, allowing them to view only specific data.',
    image: BRAND.images.aboutBlog1,
  },
  {
    title: 'Static IPs in Azure: A Guide to Assigning Unwavering Addresses',
    author: 'Apeksha Saraf',
    date: 'Jun 21, 2024',
    category: 'Data Security',
    excerpt:
      'Static IPs in Azure: a guide to assigning unwavering addresses in the ever-shifting cloud landscape for enhanced consistency.',
    image: BRAND.images.aboutBlog2,
  },
  {
    title: 'Unlocking the Power of Data: How Microsoft Fabric Analytics Transforms Enterprise',
    author: 'Lokesh Jain',
    date: 'Jul 1, 2024',
    category: 'Data Engineering',
    excerpt:
      'As the volume and variety of data explode, enterprises face increasing complexity challenges in extracting meaningful insights to drive strategy.',
    image: BRAND.images.blogBg,
  },
  {
    title: 'Mastering The Art Of Writing Effective User Stories',
    author: 'Shreya Jain',
    date: 'Jun 19, 2024',
    category: 'Project Management',
    excerpt:
      'Starting out in project management can be daunting. One often-overlooked skill can improve sprint outcomes dramatically.',
    image: BRAND.images.aboutSolutions,
  },
  {
    title: 'Safeguarding Your Data In A Digital World',
    author: 'Lokesh Jain',
    date: 'May 28, 2024',
    category: 'Data Security',
    excerpt:
      'Encryption tactics: a comprehensive guide for safeguarding your data in a digital world where every endpoint matters.',
    image: BRAND.images.trust,
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <Navbar />
      <main className="pt-[76px]">
        <section className="relative h-[130px] sm:h-[170px] overflow-hidden">
          <img src={BRAND.images.blogBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#06021D]/70" />
          <div className="container-fort relative h-full flex items-center">
            <h1 className="text-white text-3xl font-extrabold">Blogs</h1>
          </div>
        </section>

        <section className="container-fort py-10 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12"
          >
            {posts.map((post) => (
              <article key={post.title} className="group">
                {post.image ? (
                  <div className="mb-4 overflow-hidden rounded-md bg-white border border-[#E5E8EF]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-[170px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-[170px] mb-4" />
                )}
                <h2 className="text-[#06021D] text-[25px] leading-tight font-bold mb-2 group-hover:text-fort-purple transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#7A8198] text-[12px] mb-2">
                  by {post.author} | {post.date} | {post.category}
                </p>
                <p className="text-[#5A6078] text-[13px] leading-relaxed mb-3">{post.excerpt}</p>
                <a href="#" className="text-fort-purple text-xs font-semibold hover:text-fort-purple-dark transition-colors">
                  Read More
                </a>
              </article>
            ))}
          </motion.div>
        </section>

        <section className="border-t border-[#E3E7EE] bg-[#f7f8fa]">
          <div className="container-fort py-6 flex items-center justify-between">
            <div className="text-xs text-[#8B8FA3]">FOLLOW US</div>
            <div className="text-xs text-[#8B8FA3]">Privacy Policy &nbsp; Terms of Service</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
