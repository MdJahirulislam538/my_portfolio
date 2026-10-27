<div align="center">

# ⚡ Md Jahirul Islam — Full-Stack Developer Portfolio

<p align="center">
  <strong>A modern, high-performance, and visually captivating portfolio website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.</strong>
</p>

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

[🌐 Live Demo](#) • [💼 Contact Me](#-get-in-touch) • [⭐ Star Repository](https://github.com/MdJahirulislam538/my_portfolio)

</div>

---

## 📖 Overview

This repository houses the personal portfolio and software engineering showcase of **Md Jahirul Islam**, a passionate Full-Stack Web Developer. Designed with an ultra-sleek cyberpunk dark aesthetic, glassmorphic UI elements, and interactive micro-animations, this portfolio delivers a fast, responsive, and memorable experience for clients, recruiters, and fellow engineers.

---

## ✨ Key Features

### 1. 🚀 Cyberpunk Hero & Interactive Sandbox
- **Dynamic Typewriter Subtitle**: Seamlessly cycles through core roles (*Full-Stack Web Developer*, *Next.js Specialist*, *UI/UX Craftsman*, *API Architect*).
- **Interactive Code Terminal / Sandbox**:
  - Live tabbed viewer (`Developer.ts`, `metrics.json`, `stack.config`).
  - Syntax highlighted code with an instant 1-click clipboard copy feature.
  - Production benchmark telemetry (100/100 Core Web Vitals, <38ms TTFB, strict type safety).
- **Interactive CV Preview Modal**: Download and review professional credentials directly.

### 2. 📊 Live Performance Stats
- Highlights core metrics: **3+ Years Experience**, **45+ Delivered Projects**, **99% Client Satisfaction**, and **120K+ Clean Lines of Code**.

### 3. 🎨 Skills & Modern Tech Matrix
- Categorized across **Frontend**, **Backend & APIs**, **Databases & Cloud**, and **DevOps & Tooling**.
- Authentic, custom **Vector SVG Logos** for each technology (React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, Docker, etc.).
- Real-time search filter and proficiency level meters.
- "Future Stack Radar" section highlighting ongoing exploration into AI Agent SDKs, Rust, and WebAssembly.

### 4. 💼 Curated Projects & Deep Case Studies
- Showcase of real-world production applications:
  1. **DevFlow AI Platform** — AI developer assistant & real-time sandbox.
  2. **NexusShop Ultra** — Headless Next.js e-commerce store with Stripe.
  3. **TaskPulse Enterprise** — Real-time team kanban & collaboration platform.
  4. **CryptoScope Pro** — Live cryptocurrency terminal with TradingView charts.
- **Case Study Modals**: Deep dives into the architectural challenge, engineering solution, and production metrics for each project.

### 5. 🧮 Interactive Project Scope Estimator
- An innovative tool enabling clients to configure:
  - Project Archetypes (Landing Page, Full-Stack SaaS MVP, Headless E-Commerce, Custom API).
  - Feature Integrations (Auth & Roles, Stripe Payments, AI Chatbot, WebSockets, Analytics).
  - Delivery Pace (Standard vs Fast-Track).
- Dynamically outputs turnaround timelines, recommended architecture, and **auto-populates the contact form** with the exact specifications!

### 6. 🏆 Career Progression & Education Timeline
- Interactive toggle between **Work Experience** and **Education & Certifications** (B.Sc. in Computer Science & Meta Frontend Certification).

### 7. 📬 Interactive Contact Form & Direct Channels
- 1-click email copy button featuring an energetic confetti celebration (`canvas-confetti`).
- Interactive inquiry form with live validation and confirmation status.
- Direct links to GitHub, LinkedIn, and email.
- Frequently Asked Questions (FAQ) accordion answering common hiring inquiries.

---

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/), Glassmorphism, CSS Modules |
| **Icons & Visuals** | [Lucide React](https://lucide.dev/), Custom Tech SVG Logos |
| **Animations** | Native CSS Animations, Canvas Confetti |
| **Deployment & Hosting** | [Vercel](https://vercel.com/) |

---

## 📁 Project Directory Structure

```plaintext
my_portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx             # Floating glassmorphic header & mobile drawer
│   │   ├── Hero.tsx               # Typewriter hero, terminal & CV modal
│   │   ├── StatsSection.tsx       # Achievement counter cards
│   │   ├── AboutSection.tsx       # Bio, 3D avatar & engineering pillars
│   │   ├── SkillsSection.tsx      # Filterable skills grid with tech logos
│   │   ├── ProjectsSection.tsx    # Project cards & case study modals
│   │   ├── ProjectEstimator.tsx   # Interactive scope & pricing calculator
│   │   ├── ExperienceSection.tsx  # Work timeline & education tabs
│   │   ├── TestimonialsSection.tsx# Client reviews with avatar fallbacks
│   │   ├── ContactSection.tsx     # Contact form, confetti & FAQ
│   │   ├── Footer.tsx             # Quick links, copyright & back-to-top
│   │   ├── TechIcons.tsx          # Authentic vector SVG brand logos
│   │   └── Icons.tsx              # Brand social icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.ts       # Centralized configuration & content data
│   ├── globals.css                # Global dark theme tokens & keyframes
│   ├── layout.tsx                 # Root layout with SEO metadata & Geist font
│   └── page.tsx                   # Main assembled single-page application
├── public/
│   └── images/                    # HD avatars & project mockups
├── next.config.ts                 # Next.js config & remote patterns
├── package.json                   # Project dependencies and scripts
└── tsconfig.json                  # TypeScript compiler settings
```

---

## 🚀 Getting Started Locally

Follow these instructions to run the portfolio on your local machine:

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.18.0 or later recommended)
- `npm`, `pnpm`, or `yarn`

### 1. Clone the repository
```bash
git clone https://github.com/MdJahirulislam538/my_portfolio.git
cd my_portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 🚢 Deployment

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com):

1. Push your changes to GitHub.
2. Import your `my_portfolio` repository into [Vercel](https://vercel.com/new).
3. Vercel will automatically detect Next.js and deploy your portfolio with zero configuration!

---

## 👨‍💻 Author

**Md Jahirul Islam**
- **Role**: Full-Stack Web Developer & Software Engineer
- **GitHub**: [@MdJahirulislam538](https://github.com/MdJahirulislam538)
- **LinkedIn**: [Connect on LinkedIn](https://linkedin.com)
- **Email**: [jahirul.islam.dev@gmail.com](mailto:jahirul.islam.dev@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to use it as inspiration for your own web development journey.

<div align="center">
  <sub>Designed &amp; Built with ❤️ by Md Jahirul Islam</sub>
</div>
