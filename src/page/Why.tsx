import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { items } from "../components/link";

export default function Why() {
 
  return (
    <section id="why" className="py-20 sm:py-28 bg-cream-deep">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Why Mamavite" title="Why Mamas Choose Mamavite" />
        <div className="mt-12 grid md:grid-cols-3 gap-5 lg:gap-7">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 120}>
              <div className="h-full bg-card rounded-3xl p-7 border border-border/60 shadow-soft hover:-translate-y-1 transition">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/25 text-3xl" aria-hidden>
                  {it.icon}
                </div>
                <h3 className="mt-5 font-display font-extrabold text-xl text-brown">{it.title}</h3>
                <p className="mt-2 text-muted-foreground">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}