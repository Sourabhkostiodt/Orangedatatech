import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const clients = [
  { name: 'Innovapptive', logo: '/clients/logos/innovapptive.png' },
  { name: 'Streetleaf', logo: '/clients/logos/streetleaf.png' },
  { name: 'Give Please', logo: '/clients/logos/give-please.png' },
  { name: 'CT Pult', logo: '/clients/logos/ct-pult.png' },
  { name: 'InfoBeans', logo: '/clients/logos/infobeans.png' },
  { name: 'YASH Technologies', logo: '/clients/logos/yash.png' },
  { name: 'Mobicule', logo: '/clients/logos/mobicule.png' },
];

export default function ClientsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="clients" className="relative py-20 lg:py-24 bg-fort-dark overflow-hidden">
      <div className="absolute inset-0 grid-dark opacity-40" />

      <div className="container-fort relative">
        <div className="text-center mb-12 lg:mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-fort-purple-light mb-4 block"
          >
            Trusted by leading firms
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white leading-tight"
          >
            Securing your digital world
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-px bg-white/10 rounded-[20px] overflow-hidden"
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center px-4 sm:px-5 py-8 lg:py-10 min-h-[100px] bg-[#0D0828]/80"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-10 sm:max-h-12 w-auto max-w-[90%] object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
