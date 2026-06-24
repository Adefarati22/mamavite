import { Phone } from "lucide-react";
import {Reveal} from "../components/Reveal";
import Whatsapp from "../components/Whatsapp";
export default function Order() {
  return (
    <section
      id="order"
      className="relative overflow-hidden text-brown-foreground"
      style={{
        background:
          "radial-gradient(800px 400px at 80% 0%, color-mix(in oklab, var(--gold) 35%, transparent), transparent), linear-gradient(135deg, var(--brown) 0%, color-mix(in oklab, var(--brown) 80%, black) 100%)",
      }}
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8 py-20 sm:py-28 text-center">
        <Reveal>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl">Ready to Order?</h2>
          <p className="mt-5 text-base sm:text-lg text-brown-foreground/85 max-w-2xl mx-auto">
            Message us on WhatsApp to place your order. Fast, easy, and delivered to your door anywhere in Nigeria.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Whatsapp
              className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 font-bold text-gold-foreground shadow-warm hover:brightness-105 transition"
                label="Chat with Us on WhatsApp"
                message="Hello, I would like to inquire about your products and place an order. Can you please assist me?"
            />
            <a
              href="tel:+2349011182301"
              className="inline-flex items-center gap-2 rounded-full border border-brown-foreground/30 px-6 py-3.5 font-semibold text-brown-foreground hover:bg-brown-foreground/10"
            >
              <Phone className="h-4 w-4" /> 09011182301
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}