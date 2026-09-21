export interface ServiceDetails {
  deliverables: string[];
  technologies: string[];
  idealFor: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
  details?: ServiceDetails;
}

export interface SkillCategory {
  icon: string;
  title: string;
  items: string[];
}

export interface ValuePillar {
  icon: string;
  label: string;
}

export interface PortfolioData {
  headline: string;
  roles: string[];
  bio: string;
  techBadges: string[];
  aboutParagraphs: string[];
  valuePillars: ValuePillar[];
  services: ServiceItem[];
  skillCategories: SkillCategory[];
  contact: {
    email: string;
    phone: string;
    phoneRaw: string;
    intro: string;
    linkedin: string;
    github: string;
    credly: string;
  };
}
