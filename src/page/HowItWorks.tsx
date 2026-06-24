import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { howSteps } from "../components/link";

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="How It Works" title="Get Your Cereal in 3 Steps" />
        <div className="mt-10 grid md:grid-cols-3 gap-6 lg:gap-8">
          {howSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="h-full rounded-3xl bg-card border border-border/60 p-7 shadow-soft text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold/25 text-brown">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-extrabold text-lg text-brown">{s.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}