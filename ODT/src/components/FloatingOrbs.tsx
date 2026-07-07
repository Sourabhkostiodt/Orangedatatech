import { motion } from 'framer-motion';

const orbs = [
  { size: 280, top: '12%', left: '8%', color: 'rgba(244,121,32,0.18)', duration: 14, x: 30, y: -20 },
  { size: 200, top: '55%', left: '75%', color: 'rgba(255,154,77,0.12)', duration: 18, x: -25, y: 35 },
  { size: 140, top: '70%', left: '15%', color: 'rgba(244,121,32,0.1)', duration: 12, x: 20, y: -30 },
  { size: 100, top: '25%', left: '85%', color: 'rgba(217,106,16,0.15)', duration: 16, x: -15, y: 25 },
];

export default function FloatingOrbs({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[80px]"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            background: orb.color,
          }}
          animate={{
            x: [0, orb.x, 0],
            y: [0, orb.y, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
