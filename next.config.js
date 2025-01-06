/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// Import the Sentry configuration wrapper
const { withSentryConfig } = require("@sentry/nextjs");

// Sentry configuration options
const sentryWebpackOptions = {
  // Organization and project info
  org: "kirspeek",
  project: "javascript-nextjs",

  // Suppress logs outside of CI environments
  silent: !process.env.CI,

  // Upload a larger set of source maps
  widenClientFileUpload: true,

  // Annotate React components for debugging
  reactComponentAnnotation: {
    enabled: true,
  },

  // Route browser requests through a Next.js rewrite to avoid ad-blockers
  tunnelRoute: "/monitoring",

  // Hide source maps from client bundles
  hideSourceMaps: true,

  // Tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enable automatic Vercel Cron Monitors
  automaticVercelMonitors: true,

  // Automatically delete source maps after uploading them to Sentry
  sourcemaps: {
    deleteSourcemapsAfterUpload: true, // Automatically clean up source maps
  },
};

// Export the configuration wrapped with Sentry
module.exports = withSentryConfig(nextConfig, sentryWebpackOptions);