const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // Disable PWA in development
  register: true, // Automatically register the service worker
  skipWaiting: true, // Activate new service worker as soon as it's available
});

module.exports = withPWA({
  reactStrictMode: true,
  env: {
    DATABASE_URL: process.env.DATABASE_URL, // PostgreSQL URL
    NEXT_PUBLIC_API_URL: "https://api.example.com", // Public API URL for frontend
  },
  images: {
    domains: ["example.com", "assets.example.com"], // Allowed domains for images
  },
});
