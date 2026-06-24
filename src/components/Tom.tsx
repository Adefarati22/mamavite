import { tom } from "./link";
import { Reveal } from "./Reveal";
export default function Tom() {
  return (
    <section id="tom" className="py-20 sm:py-28 bg-cream-deep">
     <Reveal>
      <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {tom.map((it) => (
          <li
            key={it.name}
            className="rounded-2xl bg-card border border-border/60 p-4 text-center shadow-soft hover:-translate-y-0.5 transition"
          >
            {/* <div className="text-3xl" aria-hidden>{it.icon}</div> */}
            <p className="mt-2 font-display font-bold text-brown">{it.name}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{it.b}</p>
          </li>
        ))}
      </ul>
    </Reveal>
    </section>
  )
}
