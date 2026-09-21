import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Send, Check } from 'lucide-react';
import { portfolioData } from '../data';

export default function Contact() {
  const { contact } = portfolioData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<{ title: string }>;
      if (customEvent.detail?.title) {
        setFormState((prev) => ({
          ...prev,
          subject: `Inquiry: ${customEvent.detail.title}`
        }));
      }
    };
    window.addEventListener('select-service', handleSelectService);
    return () => {
      window.removeEventListener('select-service', handleSelectService);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) return;

    setIsSubmitting(true);

    const subjectText = formState.subject.trim() || `Inquiry from ${formState.name}`;
    const bodyText = `Hi Cyahman,\n\n${formState.message}\n\n---\nSender Name: ${formState.name}\nSender Email: ${formState.email}`;
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

    setMailtoUrl(mailto);

    window.location.href = mailto;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 400);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-navy text-navy-foreground relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--navy-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy-foreground)) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--primary))] font-semibold">
            Get In Touch
          </span>
          <h2
            id="contact-heading"
            className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight"
          >
            Let's Build Something Useful
          </h2>
          <p className="mt-5 text-[17px] text-navy-foreground/75 leading-[1.75] max-w-2xl">
            {contact.intro}
          </p>

          <div className="mt-8 rounded-2xl border border-navy-border bg-[hsl(var(--navy-muted))]/30 p-6 sm:p-7">
            <h3 className="font-heading font-bold text-xl text-navy-foreground mb-4">
              Send a Message
            </h3>

            {formSubmitted ? (
              <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 space-y-2.5">
                <div className="flex items-center gap-2 font-bold text-[16px]">
                  <Check size={20} className="text-emerald-400" />
                  <span>Email Client Launched!</span>
                </div>
                <p className="text-[14px] text-emerald-300/85 leading-relaxed">
                  Your message was drafted and addressed directly to{' '}
                  <span className="font-semibold text-emerald-200">{contact.email}</span>. Simply review and press send in your email app.
                </p>
                {mailtoUrl && (
                  <p className="text-[13px] text-emerald-300/70 pt-1">
                    Didn't open automatically?{' '}
                    <a
                      href={mailtoUrl}
                      className="underline font-semibold text-emerald-200 hover:text-white transition-colors"
                    >
                      Click here to open email directly
                    </a>
                  </p>
                )}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-[13px] font-semibold text-emerald-400 hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[12px] font-mono uppercase tracking-wider text-navy-foreground/70 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-navy/80 border border-navy-border text-navy-foreground placeholder:text-navy-foreground/40 text-[14px] focus:outline-none focus:border-[hsl(var(--primary))]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[12px] font-mono uppercase tracking-wider text-navy-foreground/70 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-navy/80 border border-navy-border text-navy-foreground placeholder:text-navy-foreground/40 text-[14px] focus:outline-none focus:border-[hsl(var(--primary))]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-[12px] font-mono uppercase tracking-wider text-navy-foreground/70 mb-1.5">
                    Subject / Project Type
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Website Development / Software Project"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-navy/80 border border-navy-border text-navy-foreground placeholder:text-navy-foreground/40 text-[14px] focus:outline-none focus:border-[hsl(var(--primary))]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[12px] font-mono uppercase tracking-wider text-navy-foreground/70 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your goals, timeframe, or technical questions..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-navy/80 border border-navy-border text-navy-foreground placeholder:text-navy-foreground/40 text-[14px] focus:outline-none focus:border-[hsl(var(--primary))] resize-y"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[hsl(var(--primary))] text-navy font-bold text-[14px] hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer text-center"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                    <Send size={15} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-navy-border bg-[hsl(var(--navy-muted))]/40 p-5 sm:p-7 shadow-xl">
            <h3 className="font-heading font-bold text-xl text-navy-foreground">
              Reach Out Directly
            </h3>
            <p className="mt-2 text-[14px] text-navy-foreground/70 leading-relaxed">
              Use any of the verified channels below. All are fully monitored and functional.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
              <a
                id="btn-direct-email"
                href={`mailto:${contact.email}`}
                className="btn-cta w-full"
              >
                <Mail size={16} />
                <span>Email Me</span>
              </a>

              <a
                id="btn-direct-phone"
                href={`tel:${contact.phoneRaw}`}
                className="btn-cta w-full"
              >
                <Phone size={16} />
                <span>Call Me</span>
              </a>

              <a
                id="btn-direct-linkedin"
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-cta w-full"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                id="btn-direct-github"
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="btn-cta w-full"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-navy-border">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[13px] font-medium text-navy-foreground/80">
                  Available for full-time roles &amp; select contracts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
