import { Code, Layers, Database, Workflow, Terminal, Compass } from 'lucide-react';
import { portfolioData } from '../data';

const iconMap: Record<string, typeof Code> = {
  Code,
  Layers,
  Database,
  Workflow,
  Terminal,
  Compass
};

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-20 sm:py-28 bg-navy text-navy-foreground relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--navy-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy-foreground)) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2
            id="skills-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight"
          >
            Skills &amp; Capabilities
          </h2>
          <p className="mt-4 text-[17px] text-navy-foreground/70 leading-[1.7]">
            A focused technical toolkit built through formal study and hands-on practice.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Code;
            return (
              <div
                key={cat.title}
                className="rounded-xl border border-navy-border bg-[hsl(var(--navy-muted))]/40 p-6 sm:p-7 hover:border-[hsl(var(--primary))]/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center h-11 w-11 rounded-lg bg-[hsl(var(--primary))]/15 text-[hsl(var(--primary))] shrink-0">
                      <IconComponent size={20} />
                    </span>
                    <h3 className="font-heading font-bold text-[17px] text-navy-foreground">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-[12px] px-3 py-1.5 rounded-md border border-navy-border bg-navy/60 text-navy-foreground/85 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] hover:bg-navy-muted/60 transition-all cursor-default select-none"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
