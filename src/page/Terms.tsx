import { SectionHeading } from "../components/SectionHeading";

export default function Terms() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Terms of Service"
          title="The rules that govern your use of Mamavite"
          sub="These terms explain how you can use the site and place orders for our cereals."
        />
        <div className="mt-10 space-y-6 text-foreground/80">
          <p>
            By using this website, you agree to our terms and to the process of placing an order through our site and WhatsApp.
          </p>
          <h2 className="text-xl font-semibold text-brown">Ordering</h2>
          <p>
            All orders are submitted via WhatsApp or the order form on this site. We reserve the right to confirm stock availability and delivery details before accepting an order.
          </p>
          <h2 className="text-xl font-semibold text-brown">Pricing and payment</h2>
          <p>
            Prices shown are in Nigerian Naira. Payment is confirmed through the payment method agreed during checkout or on WhatsApp with our team.
          </p>
          <h2 className="text-xl font-semibold text-brown">Delivery</h2>
          <p>
            Delivery times depend on your location. We aim to deliver fresh cereal within the time frame provided at checkout.
          </p>
          <h2 className="text-xl font-semibold text-brown">Changes to terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the site after changes means you accept the updated terms.
          </p>
        </div>
      </div>
    </section>
  );
}
