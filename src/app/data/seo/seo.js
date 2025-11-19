import seoData from "./seo.json";

const HOST = "https://www.yogeshportfolio.in";

const DEFAULT = {
  title: "Yogesh Gupta | Frontend & Fullstack Developer",
  description:
    "Fullstack Engineer with 3.5+ years of experience building scalable and SEO-friendly web applications.",
  ogImage: "/og/home.png",
  canonical: `${HOST}/`,
  noindex: false,
};

/**
 * Returns static SEO metadata for Next.js `generateMetadata()`
 * Works reliably for WhatsApp, LinkedIn, Twitter, etc.
 */
export function getSeoMetaData(pathname = "/") {
  try {
    // Normalize path
    const cleanPath = pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
    const pageData = seoData[cleanPath] || {};

    // Construct canonical URL
    const canonicalUrl = (pageData.canonical || `${HOST}${cleanPath}`).replace(
      "https://yourdomain.com",
      HOST
    );

    // ✅ Always make OG image absolute
    const ogImage =
      pageData.ogImage?.startsWith("http")
        ? pageData.ogImage
        : `${HOST}${pageData.ogImage || DEFAULT.ogImage}`;

    // Robots control
    const robots = pageData.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true };

    // Return structured SEO metadata
    return {
      metadataBase: new URL(HOST),
      title: pageData.title || DEFAULT.title,
      description: pageData.description || DEFAULT.description,
      openGraph: {
        title: pageData.title || DEFAULT.title,
        description: pageData.description || DEFAULT.description,
        images: [{ url: ogImage }],
        url: canonicalUrl,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        images: [ogImage],
      },
      robots,
      alternates: { canonical: canonicalUrl },
    };
  } catch (error) {
    console.error("Error generating SEO metadata:", error);
    return DEFAULT;
  }
}
