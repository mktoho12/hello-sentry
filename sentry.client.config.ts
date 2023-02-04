// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import { init } from '@sentry/nextjs'

init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,

  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
})

console.log({ side: 'client', env: process.env.NEXT_PUBLIC_ENVIRONMENT })