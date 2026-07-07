const words = ['analytics', 'insights', 'pipelines', 'dashboards', 'fabric', 'azure', 'bi', 'data'];

export default function MarqueeSection() {
  const items = [...words, ...words];
  return (
    <section className="relative py-4 overflow-hidden bg-gradient-to-r from-[#D96A10] via-[#F47920] to-[#FF9A4D] animate-gradient-shift">
      <div className="absolute inset-0 grid-dark opacity-30" />
      <div className="flex animate-marquee whitespace-nowrap relative">
        {items.map((word, i) => (
          <span key={i} className="flex items-center mx-8 text-white font-bold text-sm uppercase tracking-[0.2em] drop-shadow-sm">
            {word}
            <span className="ml-8 text-white/70 text-xs animate-pulse-glow">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
