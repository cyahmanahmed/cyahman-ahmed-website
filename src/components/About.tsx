import { Laptop, ShieldCheck, Lightbulb, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data';

const iconMap: Record<string, typeof Laptop> = {
  Laptop,
  ShieldCheck,
  Lightbulb,
  GraduationCap
};

export default function About() {
  const { aboutParagraphs, valuePillars } = portfolioData;

  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <h2
            id="about-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))]"
          >
            About Me
          </h2>
          
          <div className="mt-8 p-5 rounded-xl bg-[hsl(var(--muted))] border border-[hsl(var(--border))]">
            <p className="text-[14px] text-[hsl(var(--muted-foreground))] leading-relaxed">
              Based in South Africa. Passionate about software engineering, scalable data architectures, and building digital tools that solve real operational bottlenecks.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 text-[16px] lg:text-[17px] leading-[1.8] text-[hsl(var(--muted-foreground))]">
          <p>
            I am an IT professional with a{' '}
            <span className="font-semibold text-[hsl(var(--foreground))]">
              qualification in Information Technology
            </span>
            , specialising in Software Development.
          </p>

          <p>
            My technical background covers software development, databases, web technologies, business systems, and technical problem solving. I enjoy understanding how people and businesses operate and using technology to improve efficiency, organisation, and productivity.
          </p>

          <p>
            I bring a combination of technical knowledge, reliability, attention to detail, problem solving ability, and a commitment to continuous learning.
          </p>

          <div className="grid sm:grid-cols-2 gap-3.5 pt-4">
            {valuePillars.map((pillar) => {
              const IconComponent = iconMap[pillar.icon] || Laptop;
              return (
                <div
                  key={pillar.label}
                  className="flex items-center gap-3.5 px-4 py-3.5 rounded-lg bg-[hsl(var(--muted))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/50 transition-colors shadow-xs"
                >
                  <span className="grid place-items-center h-10 w-10 rounded-md bg-navy text-[hsl(var(--primary))] shrink-0 shadow-xs">
                    <IconComponent size={19} />
                  </span>
                  <span className="font-semibold text-[15px] text-[hsl(var(--foreground))]">
                    {pillar.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
