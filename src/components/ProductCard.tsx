import { TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";
import Whatsapp from "./Whatsapp";
export default function ProductCard({
  img, tag, title, desc, badges, price, waMessage, delay, popular,
}: { img: string; tag: string; title: string; desc: string; badges: string[]; price: string; waMessage: string; delay: number; popular?: boolean }) {
  return (
    <Reveal delay={delay}>
      <article className="group relative h-full bg-card rounded-3xl border border-border/60 shadow-soft overflow-hidden transition duration-500 hover:-translate-y-1.5 hover:shadow-warm">
        {popular && (
          <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-forest text-forest-foreground px-3 py-1 text-xs font-bold shadow-warm">
            <TrendingUp className="h-3.5 w-3.5" /> Most Popular
          </div>
        )}
        <div className="aspect-[4/3] overflow-hidden bg-cream-deep">
          <img
            src={img}
            alt={title}
            width={1024}
            height={768}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-6 sm:p-7">
          <span className="inline-block rounded-full bg-gold/25 text-brown text-xs font-bold px-3 py-1">{tag}</span>
          <h3 className="mt-3 font-display font-extrabold text-2xl text-brown">{title}</h3>
          <p className="mt-2 text-muted-foreground">{desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b} className="text-xs font-semibold rounded-full bg-forest/10 text-forest px-2.5 py-1">
                {b}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="font-display font-extrabold text-lg text-brown">{price}</p>
            <Whatsapp
                label="Order on whatsapp"
              message={waMessage}
            /> 
          </div>
          
        </div>
      </article>
    </Reveal>
  );
}
