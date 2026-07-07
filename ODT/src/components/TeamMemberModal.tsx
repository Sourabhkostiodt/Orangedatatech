import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, MapPin, Briefcase, Sparkles, ArrowRight } from 'lucide-react';
import type { TeamMember } from '../data/teamMembers';
import { getMemberPhoto } from '../data/teamMembers';

type TeamMemberModalProps = Readonly<{
  member: TeamMember | null;
  onClose: () => void;
}>;

export default function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  useEffect(() => {
    if (!member) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    globalThis.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      globalThis.removeEventListener('keydown', onKeyDown);
    };
  }, [member, onClose]);

  const isLeader = member?.category === 'leader';

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close profile"
            className="absolute inset-0 bg-[#06021D]/75 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-member-name"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-[24px] sm:rounded-[24px] bg-white shadow-2xl border border-white/10"
          >
            <div className={`relative px-6 sm:px-8 pt-8 pb-6 ${isLeader ? 'bg-gradient-to-br from-[#06021D] via-[#12082F] to-[#1A0F3D] text-white' : 'bg-fort-light text-[#06021D]'}`}>
              <button
                type="button"
                onClick={onClose}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full inline-flex items-center justify-center transition-colors ${
                  isLeader ? 'bg-white/10 hover:bg-white/15 text-white' : 'bg-white hover:bg-white/80 text-[#06021D] border border-black/5'
                }`}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row sm:items-end gap-5">
                <img
                  src={getMemberPhoto(member, 'modal')}
                  alt={member.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-white/20 shadow-lg"
                />
                <div className="flex-1">
                  <p className={`text-xs font-bold uppercase tracking-[0.18em] mb-2 ${isLeader ? 'text-fort-purple-light' : 'text-fort-purple'}`}>
                    {isLeader ? 'Leadership' : 'Core Team'}
                  </p>
                  <h2 id="team-member-name" className="text-2xl sm:text-3xl font-extrabold leading-tight mb-1">
                    {member.name}
                  </h2>
                  <p className={`text-sm font-semibold ${isLeader ? 'text-white/80' : 'text-fort-purple'}`}>{member.role}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {member.experience && (
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${isLeader ? 'bg-white/10 text-white/85' : 'bg-white text-[#5A6078] border border-black/5'}`}>
                    <Briefcase className="w-3.5 h-3.5" />
                    {member.experience}
                  </span>
                )}
                {member.location && (
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${isLeader ? 'bg-white/10 text-white/85' : 'bg-white text-[#5A6078] border border-black/5'}`}>
                    <MapPin className="w-3.5 h-3.5" />
                    {member.location}
                  </span>
                )}
              </div>
            </div>

            <div className="px-6 sm:px-8 py-7 space-y-6">
              <section>
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-fort-purple mb-3">About</h3>
                <p className="text-[#5A6078] text-sm sm:text-[15px] leading-relaxed">{member.fullBio}</p>
              </section>

              {member.focus && (
                <section className="rounded-2xl border border-fort-purple/15 bg-fort-purple/5 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-fort-purple" />
                    <h3 className="text-sm font-bold text-[#06021D]">Focus Area</h3>
                  </div>
                  <p className="text-[#5A6078] text-sm leading-relaxed">{member.focus}</p>
                </section>
              )}

              {member.skills.length > 0 && (
                <section>
                  <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-fort-purple mb-3">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#06021D]/5 text-[#06021D] border border-[#06021D]/8"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              <div className="flex flex-wrap gap-3 pt-2 border-t border-black/5">
                <button type="button" onClick={onClose} className="btn-fort-outline px-5 py-2.5 text-sm">
                  Back to Team
                </button>
                <Link to="/careers" onClick={onClose} className="btn-fort px-5 py-2.5 text-sm inline-flex items-center gap-2">
                  Join Our Team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
