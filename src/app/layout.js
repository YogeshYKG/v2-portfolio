import { Geist, Geist_Mono, Inter } from "next/font/google";

import "./globals.css";

import { getSeoMetaData } from "@/app/data/seo/seo";

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

export const generateMetadata = async ({ params }) => {
  const segments = params?.slug || [];
  const pathname = "/" + segments.join("/");

  return getSeoMetaData(pathname || "/");
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
        style={defaultCssVariables}
      >
        {children}
      </body>
    </html>
  );
}
