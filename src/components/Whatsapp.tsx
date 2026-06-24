

interface WhatsappProps {
  label: string;
  message?: string;
  className?: string;
}

export default function Whatsapp({ label, message, className }: WhatsappProps) {
  const WHATSAPP_BASE = "https://wa.me/2349011182301";
  const waLink = (msg: string) => `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
  const href = message ? waLink(message) : WHATSAPP_BASE;

  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={`rounded-full bg-gold px-5 py-2.5 font-semibold text-gold-foreground shadow-soft hover:brightness-105 transition ${className}`}
      >
        {label}
      </a>
    </div>
  );
}





