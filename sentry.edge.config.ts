// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
<<<<<<< HEAD
  dsn: "https://9188245dfd8946fa35a1d36a36221870@o4508597575548928.ingest.de.sentry.io/4508597675032656",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
=======
  dsn: "https://c0858c8d4c3fefe972982c8df23e41ca@o4507487063441408.ingest.de.sentry.io/4507487070847056",

  // Adjust this value in production, or use tracesSampler for greater control
>>>>>>> f25775c (Initial commit for issue-tracker)
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
