import tom1 from "../assets/tom1.png";
import tom2 from "../assets/tom2.png";
import tom3 from "../assets/tom3.png";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { steps } from "../components/link";

const stepImages = [tom1, tom2, tom3];

export default function Prepare() {
  return (
    <section id="prepare" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="How to Prepare" title="Ready in 3 Simple Steps" sub="A warm, wholesome bowl in under a minute." />
        <div className="mt-12 grid md:grid-cols-3 gap-5 lg:gap-7">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="group overflow-hidden rounded-3xl bg-cream border border-border/60 shadow-soft transition hover:-translate-y-0.5">
                <div className="relative h-80 overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(245,166,35,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(76,100,57,0.12),transparent_35%)]">
                  <img
                    src={stepImages[i]}
                    alt={`Step ${s.n} illustration`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <span className="font-display font-black text-5xl text-gold">{s.n}</span>
                  <p className="mt-3 text-foreground/80 text-lg">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}