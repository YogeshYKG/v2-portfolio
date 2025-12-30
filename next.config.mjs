import bundleAnalyzer from "@next/bundle-analyzer";
import withPWAFactory from "next-pwa"; // Import as factory for proper option passing

// PWA options go HERE, in the factory
const withPWA = withPWAFactory({
  dest: "public",          // SW files generated in /public
  register: true,          // Auto-register service worker on page load
  skipWaiting: true,       // Activate updates immediately (no waiting for refresh)
  disable: process.env.NODE_ENV === "development", // Skip SW in dev for faster hot module replacement
  // Exclude problematic files from caching (customize as needed for your app)
  exclude: [
    /\/api\/.*/,           // Exclude dynamic API routes (e.g., /api/contact)
    /\.html$/,             // Exclude HTML files
    /\.(js|jsx|ts|tsx)$/,  // Exclude source files
    /\/_next\/static\/[^\/]+/, // Exclude Next.js static chunks
  ],
  // Runtime caching strategies for your 3D assets (ensures offline access)
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/www\.yogeshportfolio\.in\/models\/.*\.gltf/, // Cache GLTF models (e.g., arm_chair__furniture/scene.gltf)
      handler: "CacheFirst",
      options: {
        cacheName: "models-cache",
        expiration: { maxEntries: 50, maxAgeSeconds: 30 * 24 * 60 * 60 }, // 30 days max age
      },
    },
    {
      urlPattern: /^https:\/\/www\.yogeshportfolio\.in\/textures\/.*/, // Cache textures (e.g., Base_baseColor.jpeg)
      handler: "StaleWhileRevalidate",
      options: { cacheName: "textures-cache" },
    },
    {
      urlPattern: /^https:\/\/www\.yogeshportfolio\.in\/og\/.*/, // Cache OG images for SEO/shares
      handler: "CacheFirst",
      options: { cacheName: "og-images" },
    },
  ],
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    // Fully migrated to remotePatterns (deprecates 'domains' for Next.js 15+)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.yogeshportfolio.in',  // Your production domain
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',  // Local development
      },
      // Wildcard for external assets (e.g., Three.js CDNs or third-party textures)
      // Tighten this in production for security (e.g., specific hostnames)
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Optional: Environment-specific configs (e.g., for Nodemailer in .env.local)
  env: {
    // Expose env vars to client if needed (e.g., API keys—use with caution)
  },
  // Optional: URL rewrites/redirects (e.g., for legacy routes)
  async rewrites() {
    return [
      // Example: Rewrite /old-path to /new-path
    ];
  },
  // Optional: Headers for security/performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
  experimental: {
    // Enable Next.js 15+ features if needed (e.g., server components optimizations)
    // staleTimes: { dynamic: 30 }, // Example for ISR
  },
};

export default bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(withPWA(nextConfig)); // Chain wrappers: BundleAnalyzer → PWA → Next.js config