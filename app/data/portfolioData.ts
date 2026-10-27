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
    experience: string;
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

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export const PERSONAL_INFO = {
  name: "Md Jahirul Islam",
  role: "Full-Stack Web Developer",
  status: "Available for New Projects & Remote Roles",
  location: "Bangladesh (Working Globally)",
  experienceYears: "3+",
  completedProjects: "45+",
  clientSatisfaction: "99%",
  codeLines: "120K+",
  email: "jahirul.islam.dev@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  whatsapp: "+8801700000000",
  bio: "Passionate Full-Stack Web Developer specialized in building scalable, ultra-fast web applications with Next.js, React, Node.js, and modern TypeScript architectures. Dedicated to clean code, pixel-perfect UX, and resilient cloud backends.",
};

export const PROJECTS: Project[] = [
  {
    id: "devflow-ai",
    title: "DevFlow AI Platform",
    tagline: "Next-gen AI assistant & real-time developer sandbox",
    category: "SaaS & AI",
    description: "An intelligent web developer workspace combining an in-browser code editor, automated code optimization, AI code review, and live performance metrics with sub-50ms latency.",
    image: "/images/project-devflow.jpg",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "OpenAI API", "Monaco Editor", "PostgreSQL"],
    features: [
      "Real-time AI code explanation and refactoring",
      "Interactive code playground with instant preview",
      "Syntax highlighting with custom dark theme",
      "API latency telemetry & execution graphs",
    ],
    metrics: "48ms Avg Latency • 99.9% Uptime",
    githubUrl: "https://github.com",
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
    tags: ["Next.js", "React 19", "Stripe API", "Zustand", "Tailwind CSS", "Prisma"],
    features: [
      "Sub-second optimistic cart operations using Zustand",
      "End-to-end encrypted Stripe Checkout integration",
      "Responsive luxury UI with smooth glassmorphism",
      "Search-as-you-type with fuzzy search indexing",
    ],
    metrics: "98+ Lighthouse Score • Instant Cart Operations",
    githubUrl: "https://github.com",
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
    githubUrl: "https://github.com",
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
    githubUrl: "https://github.com",
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
    description: "Building responsive, accessible, and high-performance user interfaces.",
    skills: [
      { name: "React / React 19", level: 95, experience: "3+ Years", icon: "react" },
      { name: "Next.js (App Router)", level: 92, experience: "3+ Years", icon: "next" },
      { name: "TypeScript", level: 90, experience: "2+ Years", icon: "ts" },
      { name: "Tailwind CSS", level: 96, experience: "3+ Years", icon: "tailwind" },
      { name: "HTML5 / Semantic CSS3", level: 98, experience: "4+ Years", icon: "html" },
      { name: "State Management (Zustand/Redux)", level: 88, experience: "2+ Years", icon: "state" },
    ],
  },
  {
    title: "Backend & API Development",
    icon: "Server",
    description: "Architecting resilient servers, RESTful microservices, and secure APIs.",
    skills: [
      { name: "Node.js", level: 90, experience: "3+ Years", icon: "node" },
      { name: "Express.js", level: 92, experience: "3+ Years", icon: "express" },
      { name: "Next.js API & Server Actions", level: 94, experience: "2+ Years", icon: "server" },
      { name: "RESTful Architecture", level: 95, experience: "3+ Years", icon: "api" },
      { name: "Authentication (NextAuth / JWT)", level: 90, experience: "2+ Years", icon: "auth" },
      { name: "WebSockets & Socket.io", level: 85, experience: "2 Years", icon: "socket" },
    ],
  },
  {
    title: "Databases & Cloud",
    icon: "Database",
    description: "Designing normalized schemas, optimizing queries, and deploying to cloud.",
    skills: [
      { name: "PostgreSQL", level: 88, experience: "2+ Years", icon: "postgres" },
      { name: "MongoDB / Mongoose", level: 92, experience: "3+ Years", icon: "mongo" },
      { name: "Prisma ORM", level: 90, experience: "2+ Years", icon: "prisma" },
      { name: "Supabase & Firebase", level: 86, experience: "2+ Years", icon: "cloud" },
      { name: "Redis Caching", level: 80, experience: "1+ Years", icon: "redis" },
      { name: "Vercel & Netlify Deployment", level: 95, experience: "3+ Years", icon: "deploy" },
    ],
  },
  {
    title: "Tools, Architecture & DevOps",
    icon: "Terminal",
    description: "Ensuring code quality, automated workflows, and developer productivity.",
    skills: [
      { name: "Git & GitHub Collaboration", level: 94, experience: "4+ Years", icon: "git" },
      { name: "Docker Basics", level: 78, experience: "1 Year", icon: "docker" },
      { name: "Postman & API Testing", level: 92, experience: "3+ Years", icon: "postman" },
      { name: "Figma to Pixel-Perfect Code", level: 95, experience: "3+ Years", icon: "figma" },
      { name: "Performance & Core Web Vitals", level: 90, experience: "2+ Years", icon: "speed" },
      { name: "SEO & Semantic Optimization", level: 92, experience: "3+ Years", icon: "seo" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2023 - Present",
    role: "Senior Full-Stack Web Developer",
    company: "Freelance & Remote Engineering",
    location: "Global Remote",
    type: "Full-Time / Contract",
    description: [
      "Engineered full-stack SaaS solutions, modern landing portals, and custom e-commerce stores for international clients across USA, Europe, and Asia.",
      "Delivered over 25 successful production deployments using Next.js, TypeScript, Tailwind CSS, Node.js, and PostgreSQL with zero downtime.",
      "Optimized Core Web Vitals across client applications, consistently achieving 95+ performance scores and under 1.2s Largest Contentful Paint (LCP).",
    ],
    technologies: ["Next.js", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe"],
  },
  {
    period: "2022 - 2023",
    role: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    description: [
      "Collaborated with cross-functional design and backend teams to convert complex Figma mockups into responsive, accessible web interfaces.",
      "Spearheaded the migration of legacy jQuery/HTML codebases to modern React and Tailwind CSS, increasing page load speed by 60%.",
      "Integrated RESTful APIs, form validations, and user session handling with JSON Web Tokens.",
    ],
    technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Redux", "REST APIs", "Git"],
  },
  {
    period: "2021 - 2022",
    role: "Junior Web Developer & Intern",
    company: "WebCraft Studio",
    location: "Bangladesh",
    type: "Contract",
    description: [
      "Developed interactive UI modules, landing pages, and responsive components for SMB clients.",
      "Assisted in backend API creation with Express.js and MongoDB database schema design.",
      "Performed cross-browser testing, accessibility enhancements, and SEO meta tags auditing.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "MongoDB"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "Vance Digital Labs (USA)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    content: "Jahirul is a phenomenal developer! He built our Next.js web application from scratch with astonishing speed and immaculate code quality. He's communicative, proactive, and deeply knowledgeable.",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    role: "Product Lead",
    company: "FinFlow Analytics (UK)",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    content: "Working with Md Jahirul Islam was one of the smoothest experiences our team has had. His attention to detail on responsive layouts and API integrations saved us weeks of development time.",
    rating: 5,
  },
  {
    name: "Tariq Al-Mansoor",
    role: "E-Commerce Director",
    company: "Apex Retailers (UAE)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content: "Our online store conversion increased notably after Jahirul redesigned and optimized our storefront in Next.js. Fast loading, beautiful animations, and flawless Stripe checkout integration!",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "What types of web projects do you specialize in?",
    a: "I specialize in modern full-stack web applications, dynamic Next.js/React websites, SaaS platforms, headless e-commerce stores, custom REST/GraphQL APIs, and converting Figma designs into high-performance code.",
  },
  {
    q: "Are you available for freelance projects or full-time remote roles?",
    a: "Yes! I am actively available for both freelance contract projects and long-term remote software engineering positions with global teams.",
  },
  {
    q: "How do you manage communication and project timelines?",
    a: "I provide transparent daily/weekly updates via Slack, Discord, WhatsApp, or email, use GitHub for version control, and set clear milestones with live staging previews so you can test progress in real-time.",
  },
  {
    q: "What is your typical turnaround time for a project?",
    a: "Turnaround depends on scope: a high-converting landing page takes 3-5 days, while a full-stack SaaS MVP typically takes 2-4 weeks. I pride myself on on-time, bug-free delivery.",
  },
];
