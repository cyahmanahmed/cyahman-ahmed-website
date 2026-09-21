import { useState, useEffect } from 'react';
import { Globe, Cpu, Database, Sparkles, Headphones, Briefcase, Wrench, ArrowRight, X, CheckCircle2, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data';
import { ServiceItem } from '../types';

const iconMap: Record<string, typeof Globe> = {
  Globe,
  Cpu,
  Database,
  Sparkles,
  Headphones,
  Briefcase,
  Wrench
};

export default function Services() {
  const { services } = portfolioData;
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };

    if (selectedService) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedService]);

  const handleInquire = (service: ServiceItem) => {
    setSelectedService(null);
    window.dispatchEvent(
      new CustomEvent('select-service', { detail: { title: service.title } })
    );
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[hsl(var(--muted))]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2
            id="services-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))]"
          >
            Services
          </h2>
          <p className="mt-4 text-[17px] text-[hsl(var(--muted-foreground))] leading-[1.7]">
            Practical technology solutions for businesses and individuals. Click any service to explore deliverables and tools.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.title}
                onClick={() => setSelectedService(service)}
                className="group relative bg-background rounded-xl border border-[hsl(var(--border))] p-7 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="absolute top-0 left-0 h-1 w-0 bg-[hsl(var(--primary))] rounded-tl-xl group-hover:w-full transition-all duration-500" />

                <div>
                  <span className="grid place-items-center h-12 w-12 rounded-lg bg-navy text-[hsl(var(--primary))] group-hover:scale-110 group-hover:bg-[hsl(var(--primary))] group-hover:text-navy transition-all duration-300 shadow-sm">
                    <IconComponent size={22} />
                  </span>

                  <h3 className="mt-6 font-heading font-bold text-lg text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[15px] text-[hsl(var(--muted-foreground))] leading-[1.65]">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[hsl(var(--border))]/50 flex items-center text-[13px] font-semibold text-[hsl(var(--primary))] group-hover:translate-x-1 transition-all">
                  <span>Learn more</span>
                  <ArrowRight size={14} className="ml-1.5" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl bg-navy text-navy-foreground p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-navy-border shadow-xl">
          <div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl tracking-tight">
              Need help with a technical challenge or digital solution?
            </h3>
            <p className="mt-2 text-navy-foreground/75 text-[15px] max-w-xl">
              Let's discuss your requirements and find a practical, efficient way forward.
            </p>
          </div>

          <a
            id="services-cta-banner"
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[hsl(var(--primary))] text-navy font-bold text-[15px] whitespace-nowrap hover:brightness-110 active:scale-[0.98] transition-all shadow-md shrink-0 text-center"
          >
            <span>Let's Talk</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-7 border-b border-slate-200 flex items-start justify-between bg-slate-50">
              <div className="flex items-center gap-4">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-navy text-[hsl(var(--primary))] shadow-sm shrink-0">
                  {(() => {
                    const IconComp = iconMap[selectedService.icon] || Globe;
                    return <IconComp size={24} />;
                  })()}
                </span>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--primary))] font-bold">
                    Service Overview
                  </span>
                  <h3 id="service-modal-title" className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Close details"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 sm:p-7 overflow-y-auto space-y-6 bg-white">
              <p className="text-[16px] text-slate-700 leading-relaxed font-normal">
                {selectedService.desc}
              </p>

              {selectedService.details?.deliverables && (
                <div>
                  <h4 className="font-heading font-bold text-[14px] uppercase tracking-wider text-slate-900 mb-3">
                    What's Included
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedService.details.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[14px] text-slate-800 font-medium">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedService.details?.technologies && (
                <div>
                  <h4 className="font-heading font-bold text-[14px] uppercase tracking-wider text-slate-900 mb-3">
                    Tools &amp; Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.details.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 font-mono text-[12px] font-semibold text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedService.details?.idealFor && (
                <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-200/80">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-orange-900 font-bold mb-1">
                    Best Suited For
                  </span>
                  <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
                    {selectedService.details.idealFor}
                  </p>
                </div>
              )}
            </div>

            <div className="p-5 sm:p-6 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-[14px] font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors order-2 sm:order-1"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => handleInquire(selectedService)}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[hsl(var(--primary))] text-navy font-bold text-[14px] hover:brightness-110 active:scale-[0.98] transition-all shadow-md order-1 sm:order-2 cursor-pointer"
              >
                <MessageSquare size={16} />
                <span>Inquire About This Service</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
