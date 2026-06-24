import { Star } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { t } from "../components/link";

export default function Review() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Testimonials" title="What Mamas Are Saying" />
        <div className="mt-12 md:grid md:grid-cols-3 md:gap-6 flex md:flex-none gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:overflow-visible -mx-5 px-5 md:mx-0 md:px-0">
          {t.map((it, i) => (
            <Reveal key={it.n} delay={i * 100} className="snap-center shrink-0 w-[85%] md:w-auto">
              <div className="h-full rounded-3xl bg-cream-deep border border-border/60 p-7 shadow-soft">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 font-display text-lg text-brown leading-snug">
                  <span className="text-3xl text-gold leading-none mr-1">"</span>
                  {it.q}
                </p>
                <p className="mt-5 text-sm font-semibold text-foreground/80">
                  — {it.n}, <span className="text-muted-foreground font-medium">{it.c}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}