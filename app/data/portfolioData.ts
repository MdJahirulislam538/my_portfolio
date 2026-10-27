export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full Stack' | 'Frontend' | 'SaaS & AI' | 'Fintech & E-Com';
  description: string;
  image: string;
  tags: string[];
  features: string[];
  metrics: string;
  githubUrl: string;
  liveUrl: string;
  caseStudy: {
    challenge: string;
    solution: string;
    architecture: string;
  };
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: number;
    experience?: string;
    icon: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  highlights: string[];
  badge: string;
}

export interface CertificationItem {
  title: string;
  institute: string;
  period: string;
  duration: string;
  topics: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export const PERSONAL_INFO = {
  name: "Md. Jahirul Islam",
  role: "UI Engineer & Full-Stack Web Developer",
  status: "Available for Full-time Roles & Remote Projects",
  location: "Dhanmondi, Dhaka, Bangladesh",
  permanentLocation: "Senbag, Noakhali, Bangladesh",
  experienceYears: "7+",
  totalExperience: "8.9 Years",
  completedProjects: "60+",
  clientSatisfaction: "99%",
  codeLines: "180K+",
  email: "mdjahirul.cse@gmail.com",
  phone: "+8801845130283",
  altPhone: "+8801918030009",
  whatsapp: "+8801845130283",
  github: "https://github.com/MdJahirulislam538",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  educationDegree: "B.Sc. in CSE (Daffodil International University)",
  bio: "Completed B.Sc. in CSE from Daffodil International University with over 7+ years of professional experience in Web Design, FrontEnd Development, UI/UX Design, and Web Applications. Experienced in collaborating with international clients from Japan and the UK. Skilled in modern AI tools (ChatGPT, Gemini, Claude, GitHub Copilot, Figma AI) to accelerate design, development, clean architecture, and productivity.",
};

export const PROJECTS: Project[] = [
  {
    id: "devflow-ai",
    title: "DevFlow AI Platform",
    tagline: "Next-gen AI assistant & real-time developer sandbox",
    category: "SaaS & AI",
    description: "An intelligent web developer workspace combining an in-browser code editor, automated code optimization, AI code review, and live performance metrics with sub-50ms latency.",
    image: "/images/project-devflow.jpg",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "OpenAI API", "PostgreSQL"],
    features: [
      "Real-time AI code explanation and refactoring",
      "Interactive code playground with instant preview",
      "Syntax highlighting with custom dark theme",
      "API latency telemetry & execution graphs",
    ],
    metrics: "48ms Avg Latency • 99.9% Uptime",
    githubUrl: "https://github.com/MdJahirulislam538",
    liveUrl: "https://example.com/devflow",
    caseStudy: {
      challenge: "Handling complex AST tokenization and streaming AI responses without freezing the main browser thread.",
      solution: "Implemented Web Workers for syntax parsing and Edge Runtime server-sent events (SSE) for streaming completions.",
      architecture: "Next.js App Router with React Server Components, Edge Middleware, and PostgreSQL database with Prisma.",
    },
  },
  {
    id: "nexus-shop",
    title: "NexusShop Ultra",
    tagline: "High-speed headless e-commerce store with Stripe",
    category: "Fintech & E-Com",
    description: "A luxury headless e-commerce experience featuring instant search, dynamic filter matrices, shopping drawer, secure Stripe checkout, and an automated inventory admin portal.",
    image: "/images/project-ecommerce.jpg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe API", "Zustand"],
    features: [
      "Sub-second optimistic cart operations using Zustand",
      "End-to-end encrypted Stripe Checkout integration",
      "Responsive luxury UI with smooth glassmorphism",
      "Search-as-you-type with fuzzy search indexing",
    ],
    metrics: "98+ Lighthouse Score • Instant Cart Operations",
    githubUrl: "https://github.com/MdJahirulislam538",
    liveUrl: "https://example.com/nexusshop",
    caseStudy: {
      challenge: "Preventing layout shifts (CLS) and optimizing high-res product renders while maintaining lightning-fast load times.",
      solution: "Leveraged Next.js Image optimization with blur placeholders, priority loading for hero banners, and server-side cached catalog queries.",
      architecture: "Headless Next.js frontend communicating with a REST/GraphQL microservice backend and Stripe webhooks.",
    },
  },
  {
    id: "taskpulse",
    title: "TaskPulse Enterprise",
    tagline: "Collaborative project management & real-time kanban",
    category: "Full Stack",
    description: "A comprehensive project management suite tailored for modern engineering teams. Features drag-and-drop Kanban boards, team sprint velocity charts, and instant notifications.",
    image: "/images/project-taskpulse.jpg",
    tags: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Tailwind CSS"],
    features: [
      "Smooth Drag-and-Drop board powered by modern pointer APIs",
      "Real-time multi-user cursor & card synchronization via WebSockets",
      "Sprint burndown chart & project health radar metrics",
      "Role-based access control (Admin, Member, Viewer)",
    ],
    metrics: "10k+ Active Tasks Tracked • Sub-100ms Sync",
    githubUrl: "https://github.com/MdJahirulislam538",
    liveUrl: "https://example.com/taskpulse",
    caseStudy: {
      challenge: "Ensuring conflict-free state resolution when multiple team members move cards simultaneously.",
      solution: "Implemented optimistic UI updates on the client combined with WebSocket room broadcasts and server timestamp validation.",
      architecture: "Node.js Express backend with MongoDB replica sets, connected to a modular React single-page app.",
    },
  },
  {
    id: "cryptoscope",
    title: "CryptoScope Pro",
    tagline: "Live cryptocurrency & fintech analytics dashboard",
    category: "Fintech & E-Com",
    description: "Professional market terminal providing real-time price feeds, interactive candlestick charts, technical indicators (RSI, EMA), portfolio balance tracking, and price alert triggers.",
    image: "/images/project-cryptoscope.jpg",
    tags: ["Next.js", "TypeScript", "WebSocket Feeds", "TradingView Lightweight", "Tailwind CSS"],
    features: [
      "Streaming Binance & CoinGecko WebSocket price ticks",
      "Interactive multi-timeframe charts (1D, 5D, 1M, 1Y)",
      "Portfolio profit/loss calculator with local storage backup",
      "Dark cyber aesthetic with high contrast accessibility",
    ],
    metrics: "Real-time WebSocket Feeds • Zero Lag",
    githubUrl: "https://github.com/MdJahirulislam538",
    liveUrl: "https://example.com/cryptoscope",
    caseStudy: {
      challenge: "Preventing memory leaks and high CPU usage from processing thousands of ticker updates per minute.",
      solution: "Throttled chart render cycles via requestAnimationFrame and optimized state batches with useMemo.",
      architecture: "Next.js frontend with WebSocket listener service workers and lightweight Canvas-rendered chart components.",
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: "Layout",
    description: "Crafting pixel-perfect, accessible, and high-performance user interfaces.",
    skills: [
      { name: "HTML5 / Semantic CSS3", level: 98, icon: "html" },
      { name: "Tailwind CSS & Bootstrap 5", level: 96, icon: "tailwind" },
      { name: "JavaScript (ES6+) & jQuery", level: 94, icon: "js" },
      { name: "React / React 19", level: 92, icon: "react" },
      { name: "Next.js (App Router)", level: 90, icon: "next" },
      { name: "TypeScript", level: 88, icon: "ts" },
    ],
  },
  {
    title: "UI/UX & Product Design",
    icon: "Figma",
    description: "Transforming ideas into interactive wireframes, prototypes, and user experiences.",
    skills: [
      { name: "Figma & Adobe XD", level: 96, icon: "figma" },
      { name: "Adobe Photoshop & Illustrator", level: 95, icon: "adobe" },
      { name: "UI/UX Usability Testing (UT)", level: 92, icon: "ux" },
      { name: "Interface Wireframing & Prototyping", level: 96, icon: "wireframe" },
      { name: "Responsive Web & Mobile Design", level: 98, icon: "responsive" },
      { name: "Design Systems & Visual Design", level: 94, icon: "system" },
    ],
  },
  {
    title: "Backend, Database & CMS",
    icon: "Server",
    description: "Integrating APIs, database models, and dynamic content management.",
    skills: [
      { name: "Node.js & Express.js", level: 86, icon: "node" },
      { name: "MongoDB", level: 88, icon: "mongo" },
      { name: "MySQL", level: 84, icon: "mysql" },
      { name: "RESTful API Development", level: 90, icon: "api" },
      { name: "Authentication (JWT & Auth)", level: 88, icon: "auth" },
    ],
  },
  {
    title: "AI Tools, SEO & DevOps",
    icon: "Terminal",
    description: "Harnessing cutting-edge AI copilot workflows, search ranking, and version control.",
    skills: [
      { name: "AI Acceleration (ChatGPT, Gemini, Claude, Copilot)", level: 96, icon: "ai" },
      { name: "Search Engine Optimization (SEO)", level: 92, icon: "seo" },
      { name: "Git & GitHub Version Control", level: 94, icon: "git" },
      { name: "Core Web Vitals & Speed Optimization", level: 92, icon: "speed" },
      { name: "Postman API Testing", level: 90, icon: "postman" },
      { name: "Vercel & Cloud Deployment", level: 92, icon: "deploy" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Aug 2020 - Present (6 Years)",
    role: "UI Engineer & Web Application Developer",
    company: "ParonSoft Solution Ltd.",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    description: [
      "Led UI/UX design, Usability Testing (UT), GUI application design, and interface wireframing & interactive prototypes for enterprise clients.",
      "Engineered high-performance web applications using HTML5, CSS3, Tailwind CSS, Bootstrap, jQuery, React, and JavaScript.",
      "Collaborated extensively with international product teams and clients from Japan and the UK, delivering responsive, user-friendly digital systems.",
      "Maintained strict cross-browser compatibility, WCAG accessibility, and Core Web Vitals optimization.",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Bootstrap 5", "JavaScript", "Figma", "UI/UX", "Git"],
  },
  {
    period: "Feb 2019 - Jun 2020 (1.4 Years)",
    role: "UI/UX Specialist & Frontend Designer",
    company: "Info Inlet",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    description: [
      "Spearheaded user research, interaction design, information architecture, and visual design for web and mobile products.",
      "Translated complex wireframes into responsive front-end code with HTML, CSS, JavaScript, and modern design principles.",
      "Designed marketing visual collateral, interface mockups, and mobile application experiences.",
    ],
    technologies: ["Figma", "Adobe XD", "HTML5", "CSS3", "JavaScript", "Graphic Design", "Interaction Design"],
  },
  {
    period: "Jan 2017 - Jun 2018 (1.5 Years)",
    role: "Designer & Web Visualizer",
    company: "SBIT",
    location: "Feni, Bangladesh",
    type: "Full-Time",
    description: [
      "Created digital graphics, web layouts, branding assets, and promotional materials using Adobe Illustrator and Photoshop.",
      "Assisted in front-end HTML/CSS prototyping and digital content visualization for small & medium business clients.",
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "HTML", "CSS", "Visual Design"],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)",
    institution: "Daffodil International University (DIU)",
    period: "2017 - 2021",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Comprehensive 4-year curriculum covering Algorithms, Software Architecture, Web Engineering, and Database Systems.",
      "Completed degree with Distinction (Second Division / Class), developing interactive software applications as capstone work.",
    ],
    badge: "Graduated with Certificate",
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    institution: "Institute of Computer Science & Technology (ICST)",
    period: "2014 - 2018",
    location: "Feni, Bangladesh",
    highlights: [
      "CGPA: 3.12 out of 4.00 (4-Year Engineering Diploma).",
      "Focused on Object-Oriented Programming, Data Structures, Web Development, and Computer Hardware Systems.",
    ],
    badge: "CGPA 3.12 / 4.00",
  },
  {
    degree: "Secondary School Certificate (SSC) — Business Studies",
    institution: "Government Ataturk Model High School",
    period: "2013",
    location: "Feni, Bangladesh",
    highlights: [
      "Completed secondary education with Second Division under Comilla Board.",
    ],
    badge: "Secondary Certificate",
  },
];

export const TRAININGS: CertificationItem[] = [
  {
    title: "Web Design and Development",
    institute: "Government LICT (Leveraging ICT for Growth, Employment & Governance)",
    period: "2018 - 2019",
    duration: "200 Hours",
    topics: "HTML, CSS, JavaScript, jQuery, Bootstrap, PHP & Responsive Web Development",
  },
  {
    title: "UI/UX Design Professional Training",
    institute: "Government LICT, Dhaka",
    period: "2018 - 2020",
    duration: "80 Hours",
    topics: "Adobe Photoshop, Adobe XD, Figma, Sketch, Usability Testing & Wireframing",
  },
  {
    title: "Search Engine Optimization (SEO)",
    institute: "SEIP (Skills for Employment Investment Program), Karwan Bazar, Dhaka",
    period: "2018",
    duration: "60 Hours",
    topics: "Keyword Research, Google Analytics, Technical SEO Auditing & Reporting",
  },
  {
    title: "Graphic Design Certification",
    institute: "Government LEDP (Learning and E-earning Development Project)",
    period: "2016",
    duration: "200 Hours",
    topics: "Adobe Photoshop, Adobe Illustrator, Adobe InDesign & Vector Art",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Kenji Sato",
    role: "Technical Lead",
    company: "Tokyo Digital Systems (Japan)",
    avatar: "",
    content: "Md. Jahirul is a tremendous UI Engineer. His ability to build pixel-perfect, responsive web interfaces and conduct usability testing made our cross-border project run seamlessly.",
    rating: 5,
  },
  {
    name: "Oliver Wright",
    role: "Product Director",
    company: "Nova Media UK (United Kingdom)",
    avatar: "",
    content: "Working with Jahirul on our web application was a delight. He brings over 7 years of deep front-end experience and utilizes modern AI tools to deliver clean code with high efficiency.",
    rating: 5,
  },
  {
    name: "Tanvir Ahmed",
    role: "Managing Director",
    company: "ParonSoft Solution Ltd. (Dhaka)",
    avatar: "",
    content: "Jahirul has been an invaluable asset to our engineering team for 6 years. His dedication to UI/UX excellence, usability testing, and web standards is consistently top-notch.",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "How many years of professional experience do you have?",
    a: "I have over 7+ years of professional experience in Web Design, FrontEnd Development, and UI/UX Design (Total experience: 8.9 years), having worked with ParonSoft Solution Ltd, Info Inlet, and SBIT.",
  },
  {
    q: "Have you worked with international clients?",
    a: "Yes! Throughout my career at ParonSoft Solution Ltd. and remote contracts, I have collaborated extensively with international clients and product teams from Japan and the United Kingdom (UK).",
  },
  {
    q: "What AI tools do you leverage in your workflow?",
    a: "I actively utilize ChatGPT, Google Gemini, Claude, GitHub Copilot, and Figma AI to accelerate research, unit testing, prototyping, design iteration, and writing clean, maintainable code.",
  },
  {
    q: "Are you open to full-time remote or on-site roles?",
    a: "Yes! I am actively available for mid/senior-level UI Engineer and Full-Stack Web Developer roles, both remote (worldwide) and hybrid/on-site in Dhaka, Bangladesh.",
  },
];
