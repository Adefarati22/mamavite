import Logo from "./Logo";
import { navLink } from "./link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid gap-8 md:grid-cols-3 items-start">
        <div>
            <Logo/>
          <p className="mt-3 text-muted-foreground">Nutritious. Natural. Nigerian.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-foreground/80 md:justify-center">
          {navLink.map((n) => (
            <a key={n.path} href={n.path} className="hover:text-brown">
              {n.name}
            </a>
          ))}
          <a href="#order" className="hover:text-brown">Order Now</a>
          <a href="/privacy-policy" className="hover:text-brown">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-brown">Terms of Service</a>
        </nav>
        <div className="md:text-right">
          <div className="flex md:justify-end gap-3">
            <a
              href="https://instagram.com/mamavite_tombrown"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-cream-deep text-brown hover:bg-gold transition"
            >
              <img src="instagram.svg" alt="Instagram" className="h-5 w-5" />
            </a>
            <a
              href="https://tiktok.com/@mamavite_tombrown"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="grid h-10 w-10 place-items-center rounded-full bg-cream-deep text-brown hover:bg-gold transition"
            >
              <img src="tiktok.svg" alt="TikTok" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-7xl px-5 sm:px-8 py-5 text-sm text-muted-foreground text-center">
          © 2025 Mamavite Tombrown Cereals. Ibadan, Nigeria.
        </p>
      </div>
    </footer>
  );
}