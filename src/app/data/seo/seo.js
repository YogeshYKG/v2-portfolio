// src/app/data/seo/seo.js
import seoData from "./seo.json";

const HOST = "https://www.yogeshportfolio.in";

const DEFAULT = {
  title: "Yogesh Gupta | Frontend & Fullstack Developer",
  description: "Fullstack Engineer with 3.5+ years of experience building scalable and SEO-friendly web applications.",
  ogImage: "/og/home.png",
  canonical: `${HOST}/`,
  noindex: false,
};

/**
 * Returns static SEO metadata for Next.js `generateMetadata()`
 * Safe for prerendering — no dynamic functions, all plain JSON-serializable values.
 */
export function getSeoMetaData(pathname = "/") {
  try {
    // Normalize path: remove trailing slash except root
    const cleanPath = pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
    const pageData = seoData[cleanPath] || {};

    // Construct canonical URL safely
    const canonicalUrl = (pageData.canonical || `${HOST}${cleanPath}`)
      .replace("https://yourdomain.com", HOST);

    // Robots handling
    const robots = pageData.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true };

    // Return strictly serializable SEO metadata
    return {
      title: pageData.title || DEFAULT.title,
      description: pageData.description || DEFAULT.description,
      openGraph: {
        title: pageData.title || DEFAULT.title,
        description: pageData.description || DEFAULT.description,
        images: [
          { url: pageData.ogImage || DEFAULT.ogImage },
        ],
        url: canonicalUrl,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        images: [pageData.ogImage || DEFAULT.ogImage],
      },
      robots,
      alternates: { canonical: canonicalUrl },
    };
  } catch (error) {
    console.error("Error generating SEO metadata:", error);
    // Fall back to default to ensure build never breaks
    return DEFAULT;
  }
}
