import {Reveal} from "../components/Reveal";
import founder from "../assets/founder.png";

export default function About() {
  return (
    <section className="py-20 sm:py-28 bg-cream-deep">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <Reveal>
          <div className="relative mx-auto max-w-">
            <div className="absolute -inset-4 rounded-4xl bg-forest/15 blur-2xl" aria-hidden />
            <img
              src={founder}
              alt="The founder of Mamavite"
              loading="lazy"
              className="relative rounded-4xl shadow-warm w-full h-auto object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-forest">Our Story</span>
          <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl md:text-5xl text-brown">
            Made by a Mama, for Every Mama.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Mamavite was born in Ibadan, Nigeria, out of a simple belief: every baby and every family deserves
            real, wholesome food. We carefully source natural ingredients and craft them with love — no
            shortcuts, no preservatives, no compromise.
          </p>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Today, we deliver nationwide so mothers everywhere can nourish their families with confidence.
          </p>
          <div className="mt-6 flex items-center gap-3 text-forest">
            <span className="font-semibold">Wholesome. Affordable. Nigerian.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}