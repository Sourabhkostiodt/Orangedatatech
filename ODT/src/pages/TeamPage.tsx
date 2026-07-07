import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamMemberModal from '../components/TeamMemberModal';
import { BRAND } from '../constants/brand';
import {
  coreTeam,
  coreTeamIntro,
  getMemberPhoto,
  getTeamMemberBySlug,
  leaders,
  leadersIntro,
  type TeamMember,
} from '../data/teamMembers';

function MemberCard({
  member,
  onSelect,
  dark = false,
}: Readonly<{
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
  dark?: boolean;
}>) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(member)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`group text-left w-full h-full rounded-[20px] transition-shadow hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-purple/50 ${
        dark ? 'glass-dark p-6' : 'card-fort p-6 card-hover-lift'
      }`}
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={getMemberPhoto(member, 'card')}
          alt={member.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-fort-purple/25 group-hover:border-fort-purple/50 transition-colors mb-4"
        />
        <h3 className={`${dark ? 'text-white' : 'text-[#06021D]'} font-bold text-base leading-tight mb-1`}>{member.name}</h3>
        <p className="text-fort-purple-light text-xs font-semibold mb-3">{member.role}</p>
        <p className={`${dark ? 'text-white/65' : 'text-[#5A6078]'} text-[13px] leading-relaxed line-clamp-4 mb-4 w-full`}>{member.bio}</p>
      </div>
      {member.skills.length > 0 && (
        <div className="flex flex-wrap justify-center gap-1.5 mb-4">
          {member.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className={`px-2 py-1 rounded-full text-[10px] font-semibold ${
                dark ? 'bg-white/8 text-white/70' : 'bg-fort-purple/8 text-fort-purple'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      )}
      <span
        className={`inline-flex items-center justify-center gap-1.5 text-xs font-bold transition-all group-hover:gap-2.5 w-full ${
          dark ? 'text-fort-purple-light' : 'text-fort-purple'
        }`}
      >
        View Profile <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </motion.button>
  );
}

export default function TeamPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const selectedMember = getTeamMemberBySlug(slug);

  useEffect(() => {
    if (slug && !selectedMember) {
      navigate('/team', { replace: true });
    }
  }, [slug, selectedMember, navigate]);

  const openMember = (member: TeamMember) => {
    navigate(`/team/${member.slug}`);
  };

  const closeMember = () => {
    navigate('/team');
  };

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
              <p className="text-white/60 text-sm mt-2 max-w-xl">Click any profile to view skills, focus areas, and full biography.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-fort-light circuit-deco">
          <div className="container-fort">
            <h2 className="text-[#06021D] text-3xl font-extrabold mb-3">Leaders</h2>
            <p className="text-[#5A6078] text-sm leading-relaxed mb-8 max-w-5xl">{leadersIntro}</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {leaders.map((member) => (
                <MemberCard key={member.slug} member={member} onSelect={openMember} />
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
              {coreTeam.map((member) => (
                <MemberCard key={member.slug} member={member} onSelect={openMember} dark />
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <TeamMemberModal member={selectedMember ?? null} onClose={closeMember} />
    </div>
  );
}
