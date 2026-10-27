import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-8 h-8" }: TechIconProps) {
  const n = name.toLowerCase().trim();

  // 1. React
  if (n.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2.2" fill="#00D8FF" />
      </svg>
    );
  }

  // 2. Next.js
  if (n.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#000000" stroke="#FFFFFF" strokeWidth="1.2" />
        <path d="M7 7.5V16.5M17 7.5L9.5 17" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17 7.5V14" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // 3. TypeScript
  if (n.includes("typescript") || n === "ts") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="22" height="22" x="1" y="1" rx="4" fill="#3178C6" />
        <path d="M4 9H11.5M7.7 9V17" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="square" />
        <path d="M13.2 15.5C14.2 16.5 15.6 17 17.2 17C18.8 17 20 16.2 20 15C20 13.8 19 13.2 17 12.6C15 12 13.5 11.4 13.5 9.8C13.5 8.2 14.8 7 17 7C18.5 7 19.8 7.5 20.6 8.3L19.2 9.8C18.6 9.2 17.8 8.8 16.8 8.8C15.8 8.8 15.2 9.2 15.2 9.8C15.2 10.4 15.8 10.8 17.6 11.4C19.6 12 21.2 12.8 21.2 14.8C21.2 16.8 19.6 18.5 17.2 18.5C15.2 18.5 13.6 17.8 12.5 16.5L13.2 15.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 4. JavaScript
  if (n.includes("javascript") || n === "js") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="22" height="22" x="1" y="1" rx="4" fill="#F7DF1E" />
        <path d="M7 12V16.5C7 17.3 6.3 18 5.5 18C4.7 18 4.2 17.4 4 16.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
        <path d="M13.5 12H18.5M16 12V18" stroke="#000000" strokeWidth="0" />
        <path d="M13 16.2C13.8 17.3 15 18 16.5 18C18 18 19 17.2 19 16C19 14.8 18 14.2 16.5 13.6C15 13 13.8 12.4 13.8 11C13.8 9.6 15 8.5 16.8 8.5C18.2 8.5 19.2 9 19.8 10L18.4 11.2C18 10.6 17.4 10.2 16.6 10.2C15.8 10.2 15.4 10.5 15.4 11C15.4 11.5 15.8 11.8 17.2 12.4C18.8 13 20.4 13.7 20.4 15.8C20.4 17.8 18.8 19.5 16.5 19.5C14.5 19.5 13.2 18.6 12.2 17.2L13 16.2Z" fill="#000000" />
      </svg>
    );
  }

  // 5. Tailwind CSS
  if (n.includes("tailwind")) {
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

  // 6. Bootstrap
  if (n.includes("bootstrap")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="22" height="22" x="1" y="1" rx="5" fill="#7952B3" />
        <path
          d="M7.5 6H13C15 6 16.5 7 16.5 8.7C16.5 9.8 15.8 10.8 14.8 11.2C16 11.6 17 12.8 17 14.3C17 16.2 15.3 17.5 13 17.5H7.5V6ZM10.5 8.2V10.5H12.8C13.8 10.5 14.3 10 14.3 9.3C14.3 8.6 13.8 8.2 12.8 8.2H10.5ZM10.5 12.7V15.3H13.2C14.2 15.3 14.8 14.8 14.8 14C14.8 13.2 14.2 12.7 13.2 12.7H10.5Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 7. HTML5
  if (n.includes("html")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 2L5.6 20L12 22L18.4 20L20 2H4Z" fill="#E44D26" />
        <path d="M12 3.8V20.2L16.8 18.8L18.1 3.8H12Z" fill="#F16529" />
        <path d="M12 7.5H7.8L8.1 11H12V7.5ZM12 14.2L9.8 13.6L9.6 11H7.8L8.2 15.5L12 16.6V14.2Z" fill="#EBEBEB" />
        <path d="M12 7.5V11H15.8L16.1 7.5H12ZM12 14.2V16.6L15.8 15.5L16 12.8H14.2L14.1 13.6L12 14.2Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 8. CSS3
  if (n.includes("css")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 2L5.6 20L12 22L18.4 20L20 2H4Z" fill="#1572B6" />
        <path d="M12 3.8V20.2L16.8 18.8L18.1 3.8H12Z" fill="#33A9DC" />
        <path d="M12 7.5H7.8L8.1 11H12V7.5ZM12 14.2L9.8 13.6L9.6 11H7.8L8.2 15.5L12 16.6V14.2Z" fill="#EBEBEB" />
        <path d="M12 7.5V11H15.8L16.1 7.5H12ZM12 14.2V16.6L15.8 15.5L16 12.8H14.2L14.1 13.6L12 14.2Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 9. jQuery
  if (n.includes("jquery")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="22" height="22" x="1" y="1" rx="5" fill="#0769AD" />
        <path
          d="M6 7C9 7 11 9 11 12C11 15 9 17 6 17M12 12C14 10 16 9 19 9M13 14C15 16 17 17 19 17"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 10. Redux / Zustand
  if (n.includes("redux") || n.includes("zustand") || n.includes("state")) {
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

  // 11. Figma
  if (n.includes("figma")) {
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

  // 12. Adobe Photoshop
  if (n.includes("photoshop") || n === "ps") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="22" height="22" x="1" y="1" rx="5" fill="#001E36" stroke="#00C8FF" strokeWidth="1" />
        <text x="7.5" y="16" fill="#31A8FF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
          P
        </text>
        <text x="14.5" y="16" fill="#31A8FF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
          s
        </text>
      </svg>
    );
  }

  // 13. Adobe Illustrator
  if (n.includes("illustrator") || n === "ai") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="22" height="22" x="1" y="1" rx="5" fill="#330000" stroke="#FF9A00" strokeWidth="1" />
        <text x="7" y="16" fill="#FF9A00" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
          A
        </text>
        <text x="15" y="16" fill="#FF9A00" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
          i
        </text>
      </svg>
    );
  }

  // 14. Adobe XD
  if (n.includes("adobe xd") || n.includes("xd")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="22" height="22" x="1" y="1" rx="5" fill="#470137" stroke="#FF61F6" strokeWidth="1" />
        <text x="7" y="16" fill="#FF61F6" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
          X
        </text>
        <text x="15" y="16" fill="#FF61F6" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
          d
        </text>
      </svg>
    );
  }

  // 15. UI/UX, Wireframing & Usability Testing
  if (n.includes("ux") || n.includes("wireframe") || n.includes("usability") || n.includes("prototype") || n.includes("testing")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="18" rx="4" stroke="#A855F7" strokeWidth="1.8" />
        <path d="M2 8H22" stroke="#A855F7" strokeWidth="1.8" />
        <rect x="5" y="11" width="6" height="7" rx="1.5" fill="#C084FC" opacity="0.4" />
        <path d="M14 11H19M14 14H19M14 17H17" stroke="#E9D5FF" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="5" cy="5.5" r="1" fill="#A855F7" />
        <circle cx="8" cy="5.5" r="1" fill="#A855F7" />
      </svg>
    );
  }

  // 16. Responsive Web & Mobile Design
  if (n.includes("responsive") || n.includes("mobile")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="2" stroke="#06B6D4" strokeWidth="1.8" />
        <rect x="13" y="9" width="9" height="12" rx="2" stroke="#38BDF8" strokeWidth="1.8" fill="#0b1020" />
        <path d="M7 14V17M4 17H10" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="17.5" cy="18.5" r="0.8" fill="#38BDF8" />
      </svg>
    );
  }

  // 17. Design Systems
  if (n.includes("system") || n.includes("design system")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="2" fill="#EC4899" />
        <rect x="13" y="3" width="8" height="8" rx="2" fill="#8B5CF6" />
        <rect x="3" y="13" width="8" height="8" rx="2" fill="#3B82F6" />
        <circle cx="17" cy="17" r="4" fill="#10B981" />
      </svg>
    );
  }

  // 18. Node.js
  if (n.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L20.6 7V17L12 22L3.4 17V7L12 2Z" fill="#339933" />
        <path d="M12 5.5L17.5 8.7V15.2L12 18.5L6.5 15.2V8.7L12 5.5Z" fill="#026E00" />
        <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // 19. Express.js
  if (n.includes("express")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="22" height="22" x="1" y="1" rx="5" fill="#1A1A1A" stroke="#444444" strokeWidth="1.2" />
        <text x="12" y="16" fill="#FFFFFF" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          ex
        </text>
      </svg>
    );
  }

  // 20. MongoDB
  if (n.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 6 7 6 13C6 17 9 20.5 12 22C15 20.5 18 17 18 13C18 7 12 2 12 2Z" fill="#47A248" />
        <path d="M12 2V22C12 22 12.5 20 14 17C15.5 14 15 10 12 6V2Z" fill="#499D4A" opacity="0.6" />
        <path d="M12 2V22" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
      </svg>
    );
  }

  // 21. MySQL
  if (n.includes("mysql")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M3 13C3.5 10 5.5 8 9 7.5C13 7 15 9 17 8.5C18.5 8 19.5 7 20 6C20.5 8 20 10.5 18.5 12C17 13.5 15.5 14 13.5 13.5C11.5 13 10 14 8.5 16C7 18 5 18.5 3 17V13Z"
          fill="#00758F"
        />
        <path d="M12 11C13 9 15.5 8 18 8.5C16 10 14.5 11.5 13 12C12.5 12.2 12.2 11.6 12 11Z" fill="#F29111" />
      </svg>
    );
  }

  // 22. PostgreSQL
  if (n.includes("postgre") || (n.includes("sql") && !n.includes("mongo") && !n.includes("my"))) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3C7 3 5 5.5 5 8.5C5 12 7.5 13.5 9 14.5C9 17 9.5 20 12 21C13.5 20 14 18 14 16C15 16 16.5 15.5 17.5 14C19 12 19 8.5 18 6.5C17 4 14.5 3 12 3Z"
          fill="#336791"
        />
        <circle cx="9.5" cy="8" r="1" fill="#FFFFFF" />
        <path d="M9.5 10C10.5 10.8 12.5 10.8 13.5 10" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }

  // 23. RESTful APIs
  if (n.includes("rest") || n.includes("api")) {
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

  // 24. Authentication / JWT / Security
  if (n.includes("auth") || n.includes("jwt")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L4 5.5V11.5C4 16.5 7.4 21.1 12 22.5C16.6 21.1 20 16.5 20 11.5V5.5L12 2Z"
          fill="#10B981"
          opacity="0.25"
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

  // 25. AI Acceleration / ChatGPT / Claude / Gemini / Copilot
  if (n.includes("ai") || n.includes("chatgpt") || n.includes("claude") || n.includes("gemini") || n.includes("copilot")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill="url(#aiGrad)"
        />
        <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
        <defs>
          <linearGradient id="aiGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981" />
            <stop offset="0.5" stopColor="#06B6D4" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 26. Git & GitHub
  if (n.includes("git")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="18" height="18" x="3" y="3" rx="4" transform="rotate(45 12 12)" fill="#F05032" />
        <circle cx="12" cy="8" r="1.5" fill="#FFFFFF" />
        <circle cx="12" cy="16" r="1.5" fill="#FFFFFF" />
        <circle cx="16" cy="12" r="1.5" fill="#FFFFFF" />
        <path d="M12 9.5V14.5M12 12H14.5" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    );
  }

  // 27. Postman
  if (n.includes("postman")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF6C37" />
        <path d="M7 13.5L16 8L12.5 17L11 13L7 13.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 28. Vercel & Deployment
  if (n.includes("vercel") || n.includes("deploy")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 3L22 20H2L12 3Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 29. SEO & Speed Optimization / Performance
  if (n.includes("speed") || n.includes("seo") || n.includes("performance") || n.includes("vitals")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#EAB308" strokeWidth="2" />
        <path d="M12 7V12L15.5 14" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 3H15" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 30. Docker
  if (n.includes("docker")) {
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
        <circle cx="5" cy="15" r="0.8" fill="#FFFFFF" />
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
