// Not used on server side
import './sentry.client.config.ts'

console.log({ side: 'edge', env: process.env.NEXT_PUBLIC_ENVIRONMENT })