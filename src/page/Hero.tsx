import Whatsapp from "../components/Whatsapp";
import {Reveal} from "../components/Reveal";
import hero3 from "../assets/hero3.png";


export default function Hero() {
  return (
    <section
      id="home"
      className="py-25 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 600px at 90% -10%, color-mix(in oklab, var(--gold) 22%, transparent), transparent), linear-gradient(180deg, var(--cream) 0%, var(--cream-deep) 100%)",
      }}
    >
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 pt-12 pb-16 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <Reveal className="order-2 md:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-forest/10 px-3 py-1.5 text-xs font-semibold text-forest">
            Made in Ibadan, Nigeria
          </span>
          <h1 className="mt-5 font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-brown">
            Nutritious. Natural.
            <br />
            <span className="text-forest">Made with Love.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
            Tom Brown cereal for babies and families — no preservatives, no artificial flavour, just goodness in
            every spoon.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
         <Whatsapp
         label="Order Now"
         message="Hello, I would like to place an order, can you please assist me?"
                       className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3.5 font-semibold text-forest-foreground shadow-warm hover:brightness-110 transition"

         />
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-cream border border-brown/15 px-6 py-3.5 font-semibold text-brown hover:bg-cream-deep transition"
            >
              See Our Products
            </a>
          </div>
        </Reveal>
        <Reveal delay={150} className="order-1 md:order-2">
          <div className="relative mx-auto max-w-m">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gold/30 blur-2xl" aria-hidden />
            <img
              src={hero3}
              alt="Mamavite Tom Brown cereal pack"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative rounded-[2rem] shadow-warm w-full h-auto object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
