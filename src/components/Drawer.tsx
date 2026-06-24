import { X } from "lucide-react";
import { navLink } from "./link";
import Whatsapp from "./Whatsapp";
import Logo from "./Logo";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function Drawer({ open, onClose }: DrawerProps) {
  return (
    <div
      className={`fixed inset-0 z-[1100] transition duration-300 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        onClick={onClose}
        className={`absolute inset-0 bg-slate-950/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        aria-label="Close menu"
      />

      <aside
        className={`fixed right-0 top-0 h-full w-[90vw] max-w-xs bg-background p-6 shadow-2xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <Logo/>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background text-foreground transition hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="space-y-4">
          {navLink.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={onClose}
              className="block rounded-2xl border border-border/50 px-4 py-3 text-lg font-medium text-slate-900 transition hover:border-gold hover:bg-gold/10"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/privacy-policy"
            onClick={onClose}
            className="block rounded-2xl border border-border/50  px-4 py-3 text-lg font-medium text-slate-900 transition hover:border-gold hover:bg-gold/10"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            onClick={onClose}
            className="block rounded-2xl border border-border/50 px-4 py-3 text-lg font-medium text-slate-900 transition hover:border-gold hover:bg-gold/10"
          >
            Terms of Service
          </a>
        </nav>

        <div className="mt-8">
          <Whatsapp
            label="Order on WhatsApp"
            message="Hi, I would like to place an order for Mamavite products."
            className="w-full"
          />
        </div>
      </aside>
    </div>
  );
}