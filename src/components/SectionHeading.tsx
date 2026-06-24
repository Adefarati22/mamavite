import { Reveal } from './Reveal';
export function SectionHeading({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <Reveal className="max-w-2xl">
      {eyebrow && (
        <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-forest">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl md:text-5xl text-brown">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground text-base sm:text-lg">{sub}</p>}
    </Reveal>
  );
}