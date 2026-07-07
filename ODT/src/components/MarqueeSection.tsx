const words = ['cyber', 'defense', 'secure', 'protect', 'compliance', 'threats', 'privacy', 'resilience'];

export default function MarqueeSection() {
  const items = [...words, ...words];
  return (
    <section className="bg-fort-purple py-3.5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((word, i) => (
          <span key={i} className="flex items-center mx-6 text-white font-bold text-sm uppercase tracking-[0.15em]">
            {word}
            <span className="ml-6 text-white/60 text-xs">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
