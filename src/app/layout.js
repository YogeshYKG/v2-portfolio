import { Geist, Geist_Mono, Inter } from "next/font/google";

import "./globals.css";

import CursorOverlay from "@/app/components/cursorOverlay/CursorOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const defaultCssVariables = {
  "--body-background": "rgba(15, 23, 42, 1)",
  "--box-hover": "rgba(68, 87, 129, 0.1)",
  "--text-mute": "rgba(75, 95, 135, 1)",
  "--text-slate-muted": "rgba(148, 163, 184, 1)",
  "--text-slate": "rgba(210, 220, 238, 1)",
  "--shade-green": " rgba(18, 43, 57, 1)",
  "--text-green": "rgba(94, 234, 182, 1)",
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yogesh Gupta",
    jobTitle: "Frontend & Fullstack Developer",
    url: "https://www.yogeshportfolio.in",
    sameAs: [
      "https://www.linkedin.com/in/yogeshkrgupta/",
      "https://github.com/YogeshYKG",
      "https://leetcode.com/u/user4816XH/",
      "guptayogesh484.dev@gmail.com",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "MEAN Stack",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI (MUI)",
      "RESTful APIs",
      "JWT Authentication",
      "Performance Optimization",
      "SEO Optimization",
      "Responsive Web Design",
      "Web Accessibility (a11y)",
      "Three.js",
      "WebGL",
      "Framer Motion",
      "Redux",
      "Git & GitHub",
      "CI/CD Deployment",
      "Project Architecture",
      "Fullstack Web Development",
      "UI/UX Implementation",
      "Cross-Browser Compatibility",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/svg/favicon.svg" type="iamge/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
        style={defaultCssVariables}
      >
        <CursorOverlay />
        {children}
      </body>
    </html>
  );
}
