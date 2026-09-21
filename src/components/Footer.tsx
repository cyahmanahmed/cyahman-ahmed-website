import { Mail, Phone, Linkedin, Github, Award, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data';

export default function Footer() {
  const { contact } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-navy border-t border-navy-border text-navy-foreground"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-9 w-9 rounded-md bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-heading font-extrabold text-lg">
              C
            </span>
            <span className="font-heading font-bold text-lg text-navy-foreground">
              Cyahman Ahmed
            </span>
          </div>
          <p className="mt-3 text-[14px] text-navy-foreground/70">
            Junior Software Developer | IT Professional
          </p>
          <p className="mt-1 text-[13px] text-navy-foreground/50">
            Crafting practical digital solutions that make work better.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--primary))] mb-3 font-semibold">
            Contact
          </h4>
          <ul className="space-y-2.5 text-[14px] text-navy-foreground/80">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Mail size={15} />
                <span>{contact.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phoneRaw}`}
                className="inline-flex items-center gap-2 hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Phone size={15} />
                <span>{contact.phone}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--primary))] mb-3 font-semibold">
            Connect
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            <a
              id="footer-linkedin"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="ic"
            >
              <Linkedin size={18} />
            </a>
            <a
              id="footer-github"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="ic"
            >
              <Github size={18} />
            </a>
            <a
              id="footer-credly"
              href={contact.credly}
              target="_blank"
              rel="noreferrer"
              aria-label="Credly Badges"
              className="ic"
            >
              <Award size={18} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="ic ml-auto hover:bg-[hsl(var(--primary))] hover:text-navy hover:border-[hsl(var(--primary))] transition-all"
              title="Back to top"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-border/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 text-center text-[13px] text-navy-foreground/60">
          <span>Copyright &copy; 2026 Cyahman Ahmed. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
