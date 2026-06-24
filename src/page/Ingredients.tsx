import { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import Tom from "../components/Tom";
import Baby from "../components/Baby";

export default function Ingredients() {
  const [active, setActive] = useState<"tom" | "baby">("tom");

  return (
    <section className="py-20 sm:py-28 bg-cream-deep">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Ingredients"
          title="What's Inside?"
          sub="Every spoonful taste like mother's love."
        />

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => setActive("tom")}
              className={`rounded-full px-5 py-3 text-left text-xs md:text-sm font-semibold transition cursor-pointer ${
                active === "tom"
                  ? "bg-brown text-cream shadow-soft"
                  : "bg-card text-foreground/90 hover:bg-card-foreground/10"
              }`}
              aria-selected={active === "tom"}
            >
              Tom Brown
            </button>
            <button
              type="button"
              onClick={() => setActive("baby")}
              className={`rounded-full px-5 py-3 text-left text-xs md:text-sm font-semibold transition cursor-pointer ${
                active === "baby"
                  ? "bg-brown text-cream shadow-soft"
                  : "bg-card text-foreground/90 hover:bg-card-foreground/10"
              }`}
              aria-selected={active === "baby"}
            >
              Baby Cereal
            </button>
          </div>

          <p className="max-w-2xl text-lg font-medium text-foreground/80">
            {active === "tom"
              ? "Discover the natural ingredients that make our Tom Brown so special."
              : "Explore the wholesome ingredients designed for your little one's growth."}
          </p>
        </div>

        <div className="mt-10">
          {active === "tom" ? <Tom /> : <Baby />}
        </div>
      </div>
    </section>
  );
}