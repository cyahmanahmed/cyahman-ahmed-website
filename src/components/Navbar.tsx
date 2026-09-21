import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks } from '../data';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-navy'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <nav id="navbar" className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          id="nav-logo"
          href="#home"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <span className="grid place-items-center h-9 w-9 rounded-md bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-heading font-extrabold text-lg shadow-sm transition-transform group-hover:scale-105">
            C
          </span>
          <span className="font-heading font-bold text-navy-foreground tracking-tight text-lg">
            Cyahman<span className="text-[hsl(var(--primary))]">.</span>
          </span>
        </a>

        <ul id="desktop-nav-links" className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-[14px] font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-[hsl(var(--primary))] font-semibold'
                      : 'text-navy-foreground/80 hover:text-[hsl(var(--primary))]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[hsl(var(--primary))] rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            id="nav-cta-button"
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-[14px] font-semibold hover:brightness-110 active:scale-[0.98] transition-all shadow-sm"
          >
            <span>Get In Touch</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          id="mobile-menu-trigger"
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden text-navy-foreground p-2 rounded-lg hover:bg-navy-muted/40 transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-menu-dropdown" className="md:hidden bg-navy border-t border-navy-border shadow-2xl">
          <ul className="px-5 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2.5 px-3 rounded-md text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'bg-navy-muted/50 text-[hsl(var(--primary))] font-semibold'
                        : 'text-navy-foreground/85 hover:bg-navy-muted/30 hover:text-[hsl(var(--primary))]'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-[15px] font-semibold hover:brightness-110 transition-all shadow-sm"
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={16} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
