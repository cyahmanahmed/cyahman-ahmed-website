import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  headline: "Cyahman Ahmed",
  roles: [
    "JUNIOR DEVELOPER",
    "IT PROFESSIONAL",
    "PROBLEM SOLVER"
  ],
  bio: "Cyahman Ahmed is a Junior Developer, IT Professional, and Problem Solver building practical digital solutions that make work better, turning technical challenges into user-friendly tools for businesses and individuals.",
  techBadges: [
    "C#",
    "Python",
    "React",
    "TypeScript",
    "JavaScript",
    "CSS",
    "Odoo"
  ],
  aboutParagraphs: [
    "I am an IT professional with a qualification in Information Technology, specialising in Software Development.",
    "My technical background covers software development, databases, web technologies, business systems, and technical problem solving. I enjoy understanding how people and businesses operate and using technology to improve efficiency, organisation, and productivity.",
    "I bring a combination of technical knowledge, reliability, attention to detail, problem solving ability, and a commitment to continuous learning."
  ],
  valuePillars: [
    { icon: "Laptop", label: "Technical Knowledge" },
    { icon: "ShieldCheck", label: "Reliability" },
    { icon: "Lightbulb", label: "Problem Solving" },
    { icon: "GraduationCap", label: "Continuous Learning" }
  ],
  services: [
    {
      icon: "Globe",
      title: "Web Development",
      desc: "Create modern responsive websites for businesses, organisations, professionals, and individuals.",
      details: {
        deliverables: [
          "Custom responsive web layouts tailored for mobile, tablet, and desktop",
          "Clean, semantic frontend architecture with fast loading speeds",
          "Contact forms, portfolio showcases, and service presentation pages",
          "Search engine optimization (SEO) setup and social preview cards",
          "Deployment assistance to reliable cloud hosting platforms"
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS", "HTML5", "Vite"],
        idealFor: "Businesses, entrepreneurs, and professionals who need an effective, modern online presence."
      }
    },
    {
      icon: "Cpu",
      title: "Business Software Solutions",
      desc: "Develop practical software systems that improve efficiency and support business operations.",
      details: {
        deliverables: [
          "Automated utilities to eliminate repetitive daily manual tasks",
          "Internal tools for data tracking, inventory, or workflow coordination",
          "Business logic implementation and custom scripting solutions",
          "Clear software documentation and handover guides"
        ],
        technologies: ["Python", "C#", ".NET", "Odoo ERP", "REST APIs"],
        idealFor: "Small-to-medium teams looking to streamline operations and save staff hours."
      }
    },
    {
      icon: "Database",
      title: "Database Solutions",
      desc: "Database design, data organisation, management, and maintenance for applications and business systems.",
      details: {
        deliverables: [
          "Relational database schema modeling and normalization",
          "Efficient SQL query authoring, optimization, and indexing",
          "Data migration, CSV spreadsheet imports, and validation routines",
          "Database backup strategies and data integrity checks"
        ],
        technologies: ["SQL", "Microsoft SQL Server", "SSMS", "Relational Modeling", "Database Design"],
        idealFor: "Organizations seeking organized, accurate, and easily retrievable records."
      }
    },
    {
      icon: "Sparkles",
      title: "Website Improvements",
      desc: "Modernise existing websites, improve usability, responsiveness, and functionality.",
      details: {
        deliverables: [
          "Responsive redesign overhaul for mobile devices and tablets",
          "Page speed, core web vitals, and asset loading improvements",
          "Fixing broken links, outdated scripts, and layout bugs",
          "Accessibility (a11y) enhancements and modern visual refreshes"
        ],
        technologies: ["CSS3", "JavaScript", "HTML5", "Performance Auditing"],
        idealFor: "Anyone with an existing website that looks outdated, loads slowly, or struggles on phones."
      }
    },
    {
      icon: "Headphones",
      title: "Technical Support",
      desc: "Assist with software issues, application problems, computer troubleshooting, and user support.",
      details: {
        deliverables: [
          "Diagnostic troubleshooting of application bugs and software conflicts",
          "Assistance with software setup, installation, and environment configuration",
          "Step-by-step user documentation and clear troubleshooting instructions",
          "Reliable, patient remote technical assistance"
        ],
        technologies: ["Windows", "Linux", "Application Debugging", "Hardware Diagnostics"],
        idealFor: "Teams and individuals needing dependable technical guidance to resolve computer and software issues."
      }
    },
    {
      icon: "Briefcase",
      title: "Business System Support",
      desc: "Support digital workflows, business processes, and technology driven operations.",
      details: {
        deliverables: [
          "Odoo ERP setup, module navigation, and workflow customization",
          "Assistance aligning technology tools with actual business processes",
          "System integration support and digital workflow optimization",
          "Staff walkthroughs and practical how-to guides"
        ],
        technologies: ["Odoo", "Business Analysis", "Workflow Automation", "IT Operations"],
        idealFor: "Companies using business systems like Odoo looking to get maximum value from their software."
      }
    },
    {
      icon: "Wrench",
      title: "Software Maintenance",
      desc: "Assist with application updates, debugging, improvements, and ongoing support.",
      details: {
        deliverables: [
          "Regular dependency updates and security maintenance",
          "Bug fixes and patch application for ongoing stability",
          "Feature tweaks, new button actions, and layout adjustments",
          "Ongoing health monitoring and preventative check-ins"
        ],
        technologies: ["Version Control (Git)", "Refactoring", "Testing", "Code Auditing"],
        idealFor: "App and website owners who want peace of mind knowing their software is kept in working order."
      }
    }
  ],
  skillCategories: [
    {
      icon: "Code",
      title: "Programming Languages",
      items: ["C#", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "XML"]
    },
    {
      icon: "Layers",
      title: "Frameworks & Technologies",
      items: ["ASP.NET Core MVC", "Entity Framework", "LINQ", "Next.js", "Tailwind CSS", "REST APIs"]
    },
    {
      icon: "Database",
      title: "Databases",
      items: ["Microsoft SQL Server"]
    },
    {
      icon: "Workflow",
      title: "Business Systems",
      items: ["Odoo ERP", "Business Workflows", "Inventory Systems", "Business Process Concepts"]
    },
    {
      icon: "Terminal",
      title: "Development Tools",
      items: ["Visual Studio", "Visual Studio Code", "PyCharm", "Git", "GitHub", "SQL Server Management Studio"]
    },
    {
      icon: "Compass",
      title: "Software Development Concepts",
      items: ["Object Oriented Programming", "MVC Architecture", "SDLC", "Agile Development", "Testing", "Debugging", "Database Management"]
    }
  ],
  contact: {
    email: "cyahmanahmed@gmail.com",
    phone: "+27 81 789 1742",
    phoneRaw: "+27817891742",
    intro: "Whether you are looking for a Junior Software Developer to join your team or need assistance with a website, software solution, database, business system, or technical issue, I would be happy to hear from you.",
    linkedin: "https://www.linkedin.com/in/cyahman-ahmed",
    github: "https://github.com/cyahmanahmed",
    credly: "https://www.credly.com/users/cyahman-ahmed"
  }
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];
