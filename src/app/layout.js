import { Geist, Geist_Mono } from "next/font/google";
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

export const generateMetadata = async ({ params }) => {
  const segments = params?.slug || [];
  const pathname = "/" + segments.join("/");

  return getSeoMetaData(pathname || "/");
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
