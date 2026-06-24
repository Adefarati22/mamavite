import { useState } from "react";
import { faqItems } from "../components/link";
import { SectionHeading } from "../components/SectionHeading";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Mamas Ask, We Answer"
          sub="Everything you need to know before your first order."
        />
        <div className="mt-10 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                type="button"
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full rounded-3xl border border-border/60 bg-cream px-6 py-5 text-left shadow-soft transition hover:border-brown focus:outline-none focus:ring-2 focus:ring-brown/30 cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-left font-semibold text-foreground">{item.q}</span>
                  <span className="text-2xl text-brown">{isOpen ? "−" : "+"}</span>
                </div>
                {isOpen && (
                  <div
                    id={`faq-panel-${index}`}
                    className="mt-4 text-sm md:text-lg leading-7 text-foreground/80"
                  >
                    {item.a}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
