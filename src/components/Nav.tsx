import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navLink } from "./link";
import Drawer from "./Drawer";
import Logo from "./Logo";
import Whatsapp from "./Whatsapp";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ease-[ease] ${
          scrolled
            ? 'bg-background/90 backdrop-blur border-b border-border/60 shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-4'
            : 'bg-transparent backdrop-blur-none py-6'
        }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 min-h-[20px]">
          <Logo />

          <div className="hidden md:flex items-center gap-10 lg:gap-20">
            <ul className="flex items-center gap-8">
              {navLink.map((link) => (
                <li key={link.path} className="list-none">
                  <a
                    href={link.path}
                    className={`hidden md:inline-flex text-lg font-medium transition text-brown hover:text-brown/80 `}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Whatsapp
              label="Order Now"
              message="Hello, I would like to place an order, can you please assist me?"
            />
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/95 text-foreground shadow-sm transition hover:bg-background md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}