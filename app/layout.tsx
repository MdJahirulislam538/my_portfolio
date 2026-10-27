import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Jahirul Islam | Full-Stack Web Developer & Engineer",
  description: "Portfolio of Md Jahirul Islam - Full-Stack Web Developer specializing in Next.js, React, Node.js, TypeScript, and modern scalable web architecture. Explore featured projects, skill matrix, and interactive scope estimator.",
  keywords: [
    "Md Jahirul Islam",
    "Web Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Frontend Engineer",
    "Backend Developer",
    "Bangladesh Web Developer",
    "Remote Software Engineer"
  ],
  authors: [{ name: "Md Jahirul Islam" }],
  creator: "Md Jahirul Islam",
  openGraph: {
    title: "Md Jahirul Islam | Full-Stack Web Developer",
    description: "Building fast, scalable, and visually stunning web applications with modern tech stacks.",
    url: "https://jahirul-dev.vercel.app",
    siteName: "Md Jahirul Islam Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Jahirul Islam | Full-Stack Web Developer",
    description: "Building fast, scalable, and visually stunning web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#070913] text-[#f3f4f6] selection:bg-indigo-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
