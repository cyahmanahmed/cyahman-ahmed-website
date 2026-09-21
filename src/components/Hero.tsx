import { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data';

export default function Hero() {
  const { headline, roles, bio, techBadges } = portfolioData;

  const [currentText, setCurrentText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');

  useEffect(() => {
    const fullWord = roles[roleIndex % roles.length];
    let timeoutId: NodeJS.Timeout;

    if (phase === 'typing') {
      if (currentText.length < fullWord.length) {
        timeoutId = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length + 1));
        }, 110);
      } else {
        timeoutId = setTimeout(() => {
          setPhase('deleting');
        }, 1500);
      }
    } else {
      if (currentText.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length - 1));
        }, 55);
      } else {
        setRoleIndex((prev) => prev + 1);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, phase, roleIndex, roles]);

  return (
    <section
      id="home"
      className="relative bg-navy min-h-screen pt-16 flex flex-col justify-between overflow-hidden"
    >
      <div className="grid md:grid-cols-12 min-h-[calc(100vh-4rem)]">
        <div className="md:col-span-7 flex flex-col justify-center px-5 sm:px-10 lg:px-16 py-10 sm:py-14 z-10">
          <h1
            id="hero-headline"
            className="font-heading font-extrabold tracking-tight text-navy-foreground text-4xl sm:text-6xl lg:text-7xl leading-[1.05] break-words"
          >
            {headline}
          </h1>

          <div className="relative inline-flex mt-5 sm:mt-6 self-start max-w-full">
            <span className="absolute -top-1.5 -left-1.5 h-4 w-4 sm:h-5 sm:w-5 border-t-2 border-l-2 border-white pointer-events-none" />
            <span className="absolute -bottom-1.5 -right-1.5 h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-r-2 border-white pointer-events-none" />
            <div className="bg-[hsl(var(--primary))] text-navy font-mono font-bold text-sm sm:text-base md:text-xl tracking-[0.08em] sm:tracking-[0.1em] px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-md truncate">
              <span>{currentText}</span>
              <span className="inline-block animate-pulse font-bold ml-0.5 text-navy">|</span>
            </div>
          </div>

          <p
            id="hero-bio"
            className="mt-6 sm:mt-7 text-[15px] sm:text-[16px] lg:text-[18px] text-navy-foreground/80 max-w-xl leading-[1.75]"
          >
            {bio}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            <a
              id="hero-cta-skills"
              href="#skills"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[hsl(var(--primary))] text-navy font-bold text-[15px] hover:brightness-110 active:scale-[0.98] transition-all shadow-md text-center"
            >
              <span>View My Skills</span>
              <ArrowRight size={17} />
            </a>

            <a
              id="hero-cta-contact"
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-navy-foreground/30 text-navy-foreground font-semibold text-[15px] hover:bg-navy-foreground hover:text-navy active:scale-[0.98] transition-all text-center"
            >
              <span>Get In Touch</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-5 relative bg-[hsl(var(--primary))] overflow-hidden flex flex-col justify-between py-10 md:py-0">
          <div className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-20 pointer-events-none">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-navy font-bold [writing-mode:vertical-rl] rotate-180 select-none">
              My Expertise
            </span>
            <span className="h-20 w-px bg-navy/60" />
          </div>

          <div className="flex-1 flex items-center justify-center p-6 sm:p-10 pb-4">
            <div className="relative w-full max-w-[220px] sm:max-w-[260px]">
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl shadow-black/30 bg-navy">
                <img
                  src="/assets/cyahman-ahmed.jpg"
                  alt="Cyahman Ahmed — Junior Software Developer"
                  loading="eager"
                  decoding="async"
                  className="w-full h-[300px] sm:h-[380px] object-cover object-top"
                />
              </div>

              <Sparkles
                className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 text-white drop-shadow-md"
                size={30}
                fill="white"
              />
              <Sparkles
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 text-white drop-shadow-md"
                size={26}
                fill="white"
              />
            </div>
          </div>

          <div className="relative z-10 px-4 sm:px-5 pb-8 flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-[95%] mx-auto">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="bg-navy text-navy-foreground font-mono text-[11px] sm:text-[12px] font-medium px-3 sm:px-3.5 py-1.5 rounded-full shadow-md hover:scale-105 transition-transform select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden md:flex items-center justify-center gap-1.5 py-3 text-[12px] font-mono text-navy-foreground/40 hover:text-navy-foreground/80 transition-colors"
        aria-label="Scroll to About section"
      >
        <span>SCROLL DOWN</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
