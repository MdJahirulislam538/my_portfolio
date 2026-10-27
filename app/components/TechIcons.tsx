import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-5 h-5" }: TechIconProps) {
  const normalized = name.toLowerCase();

  // React
  if (normalized.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#00D8FF" />
      </svg>
    );
  }

  // Next.js
  if (normalized.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="black" stroke="white" strokeWidth="1.2" />
        <path d="M7 7.5V16.5M17 7.5L9.5 17" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17 7.5V14" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes("typescript") || normalized === "ts") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="22" height="22" x="1" y="1" rx="4" fill="#3178C6" />
        <path d="M4 9H11.5M7.7 9V17" stroke="white" strokeWidth="2.2" strokeLinecap="square" />
        <path d="M13.2 15.5C14.2 16.5 15.6 17 17.2 17C18.8 17 20 16.2 20 15C20 13.8 19 13.2 17 12.6C15 12 13.5 11.4 13.5 9.8C13.5 8.2 14.8 7 17 7C18.5 7 19.8 7.5 20.6 8.3L19.2 9.8C18.6 9.2 17.8 8.8 16.8 8.8C15.8 8.8 15.2 9.2 15.2 9.8C15.2 10.4 15.8 10.8 17.6 11.4C19.6 12 21.2 12.8 21.2 14.8C21.2 16.8 19.6 18.5 17.2 18.5C15.2 18.5 13.6 17.8 12.5 16.5L13.2 15.5Z" fill="white" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M6 8C7.5 5 10 4.5 12 6C13.5 7.2 14.5 8 16 8C18.5 8 20 6.5 21 4.5C20 8 18 9.5 16 8C14.5 6.8 13.5 6 12 6C9.5 6 8 7.5 6 8ZM3 15C4.5 12 7 11.5 9 13C10.5 14.2 11.5 15 13 15C15.5 15 17 13.5 18 11.5C17 15 15 16.5 13 15C11.5 13.8 10.5 13 9 13C6.5 13 5 14.5 3 15Z"
          fill="url(#tailwindGrad)"
        />
        <defs>
          <linearGradient id="tailwindGrad" x1="3" y1="4.5" x2="21" y2="16.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // HTML5 / Semantic CSS3
  if (normalized.includes("html") || normalized.includes("css")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 2L5.6 20L12 22L18.4 20L20 2H4Z" fill="#E44D26" />
        <path d="M12 3.8V20.2L16.8 18.8L18.1 3.8H12Z" fill="#F16529" />
        <path d="M12 7.5H7.8L8.1 11H12V7.5ZM12 14.2L9.8 13.6L9.6 11H7.8L8.2 15.5L12 16.6V14.2Z" fill="#EBEBEB" />
        <path d="M12 7.5V11H15.8L16.1 7.5H12ZM12 14.2V16.6L15.8 15.5L16 12.8H14.2L14.1 13.6L12 14.2Z" fill="white" />
      </svg>
    );
  }

  // State Management (Redux / Zustand)
  if (normalized.includes("state") || normalized.includes("redux") || normalized.includes("zustand")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M16.5 4.5C14.5 2.5 11 2.5 9 4.5C7.5 6 7 8 8 9.8L5.5 12C3.5 13.8 3.5 16.8 5.2 18.5C7 20.2 10 20.2 11.8 18.5L14 16C15.8 17 18 16.5 19.5 15C21.5 13 21.5 9.5 19.5 7.5L16.5 4.5Z"
          stroke="#764ABC"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2.5" fill="#764ABC" />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L20.6 7V17L12 22L3.4 17V7L12 2Z"
          fill="#339933"
        />
        <path
          d="M12 5.5L17.5 8.7V15.2L12 18.5L6.5 15.2V8.7L12 5.5Z"
          fill="#026E00"
        />
        <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // Express.js
  if (normalized.includes("express")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="22" height="22" x="1" y="1" rx="5" fill="#222" stroke="#555" strokeWidth="1" />
        <text x="12" y="16" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          ex
        </text>
      </svg>
    );
  }

  // Next.js API & Server Actions
  if (normalized.includes("server") || normalized.includes("action")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="6" rx="2" fill="#6366F1" />
        <rect x="3" y="11" width="18" height="6" rx="2" fill="#4F46E5" />
        <circle cx="7" cy="6" r="1" fill="#A5B4FC" />
        <circle cx="10" cy="6" r="1" fill="#A5B4FC" />
        <circle cx="7" cy="14" r="1" fill="#A5B4FC" />
        <circle cx="10" cy="14" r="1" fill="#A5B4FC" />
        <path d="M12 19L15 22L18 19" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // RESTful Architecture
  if (normalized.includes("rest") || normalized.includes("api")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#E11D48" strokeWidth="1.8" />
        <path d="M12 3V21M3 12H21" stroke="#E11D48" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="12" cy="7" r="1.5" fill="#F43F5E" />
        <circle cx="12" cy="17" r="1.5" fill="#F43F5E" />
        <circle cx="7" cy="12" r="1.5" fill="#F43F5E" />
        <circle cx="17" cy="12" r="1.5" fill="#F43F5E" />
      </svg>
    );
  }

  // Authentication (NextAuth / JWT)
  if (normalized.includes("auth") || normalized.includes("jwt")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L4 5.5V11.5C4 16.5 7.4 21.1 12 22.5C16.6 21.1 20 16.5 20 11.5V5.5L12 2Z"
          fill="#10B981"
          opacity="0.2"
        />
        <path
          d="M12 2L4 5.5V11.5C4 16.5 7.4 21.1 12 22.5C16.6 21.1 20 16.5 20 11.5V5.5L12 2Z"
          stroke="#10B981"
          strokeWidth="2"
        />
        <path d="M9 12L11 14L15 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // WebSockets & Socket.io
  if (normalized.includes("socket") || normalized.includes("websocket")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#010101" stroke="#00D8FF" strokeWidth="1.5" />
        <path d="M13 3L6 14H12L11 21L18 10H12L13 3Z" fill="#FACC15" stroke="#EAB308" strokeWidth="1" />
      </svg>
    );
  }

  // PostgreSQL
  if (normalized.includes("postgre") || normalized.includes("sql") && !normalized.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3C7 3 5 5.5 5 8.5C5 12 7.5 13.5 9 14.5C9 17 9.5 20 12 21C13.5 20 14 18 14 16C15 16 16.5 15.5 17.5 14C19 12 19 8.5 18 6.5C17 4 14.5 3 12 3Z"
          fill="#336791"
        />
        <circle cx="9.5" cy="8" r="1" fill="white" />
        <path d="M9.5 10C10.5 10.8 12.5 10.8 13.5 10" stroke="white" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C12 2 6 7 6 13C6 17 9 20.5 12 22C15 20.5 18 17 18 13C18 7 12 2 12 2Z"
          fill="#47A248"
        />
        <path d="M12 2V22C12 22 12.5 20 14 17C15.5 14 15 10 12 6V2Z" fill="#499D4A" opacity="0.6" />
        <path d="M12 2V22" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
      </svg>
    );
  }

  // Prisma ORM
  if (normalized.includes("prisma")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M4.5 18.5L12 3L19.5 18.5L12 15L4.5 18.5Z"
          fill="#2D3748"
          stroke="#5A67D8"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M12 3V15M12 15L19.5 18.5" stroke="#5A67D8" strokeWidth="1.5" />
      </svg>
    );
  }

  // Supabase & Firebase
  if (normalized.includes("supabase") || normalized.includes("firebase")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M13.8 2.5L3.5 14.5H11.5L9.5 21.5L20.5 9.5H12.5L13.8 2.5Z"
          fill="url(#supaGrad)"
        />
        <defs>
          <linearGradient id="supaGrad" x1="3.5" y1="2.5" x2="20.5" y2="21.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22C55E" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Redis
  if (normalized.includes("redis")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3 8L12 4L21 8L12 12L3 8Z" fill="#DC382D" />
        <path d="M3 12L12 16L21 12" stroke="#A71E15" strokeWidth="2" strokeLinejoin="round" />
        <path d="M3 16L12 20L21 16" stroke="#A71E15" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }

  // Vercel & Deployment
  if (normalized.includes("vercel") || normalized.includes("deploy")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 3L22 20H2L12 3Z" fill="white" />
      </svg>
    );
  }

  // Git & GitHub
  if (normalized.includes("git")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="18" height="18" x="3" y="3" rx="4" transform="rotate(45 12 12)" fill="#F05032" />
        <circle cx="12" cy="8" r="1.5" fill="white" />
        <circle cx="12" cy="16" r="1.5" fill="white" />
        <circle cx="16" cy="12" r="1.5" fill="white" />
        <path d="M12 9.5V14.5M12 12H14.5" stroke="white" strokeWidth="1.5" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M22 12.5C21.8 12.5 19.5 12.5 18.2 13.8C17 12 14.5 12 14.5 12H2C2 17 6 19.5 11 19.5C18 19.5 22 15 22 12.5Z"
          fill="#2496ED"
        />
        <rect x="7" y="9" width="2" height="2" fill="#2496ED" />
        <rect x="10" y="9" width="2" height="2" fill="#2496ED" />
        <rect x="13" y="9" width="2" height="2" fill="#2496ED" />
        <rect x="10" y="6" width="2" height="2" fill="#2496ED" />
        <circle cx="5" cy="15" r="0.8" fill="white" />
      </svg>
    );
  }

  // Postman
  if (normalized.includes("postman")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF6C37" />
        <path
          d="M7 13.5L16 8L12.5 17L11 13L7 13.5Z"
          fill="white"
        />
      </svg>
    );
  }

  // Figma
  if (normalized.includes("figma")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="6" y="3" width="6" height="6" rx="3" fill="#F24E1E" />
        <rect x="12" y="3" width="6" height="6" rx="3" fill="#FF7262" />
        <rect x="6" y="9" width="6" height="6" rx="3" fill="#A259FF" />
        <circle cx="15" cy="12" r="3" fill="#1ABCFE" />
        <rect x="6" y="15" width="6" height="6" rx="3" fill="#0ACF83" />
      </svg>
    );
  }

  // Performance & SEO
  if (normalized.includes("speed") || normalized.includes("performance") || normalized.includes("vitals")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#EAB308" strokeWidth="2" />
        <path d="M12 7V12L15.5 14" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 3H15" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Generic fallback code icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
