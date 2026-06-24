import { SectionHeading } from "../components/SectionHeading";

export default function Privacy() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Privacy Policy"
          title="Your privacy is important to us"
          sub="We only collect the minimum data required to serve you better."
        />
        <div className="mt-10 space-y-6 text-foreground/80">
          <p>
            At Mamavite, we respect your privacy and handle your personal information with care.
            We collect only what is necessary for order processing, delivery, and customer support.
          </p>
          <h2 className="text-xl font-semibold text-brown">What we collect</h2>
          <ul className="list-disc space-y-2 pl-6 text-foreground/80">
            <li>Name, phone number, and delivery address for order fulfillment.</li>
            <li>WhatsApp communication messages and order details to support your purchase.</li>
            <li>Payment confirmation information for order processing.</li>
          </ul>
          <h2 className="text-xl font-semibold text-brown">How we use it</h2>
          <p>
            Your data is used to process orders, coordinate delivery, answer questions, and improve our service.
            We do not sell or share your personal information with third-party marketers.
          </p>
          <h2 className="text-xl font-semibold text-brown">Security</h2>
          <p>
            We take reasonable measures to keep your information safe, but please also keep your phone and WhatsApp secure.
          </p>
          <h2 className="text-xl font-semibold text-brown">Contact us</h2>
          <p>
            If you have any privacy concerns, contact us on WhatsApp and we will respond promptly.
          </p>
        </div>
      </div>
    </section>
  );
}
