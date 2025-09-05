const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'E-Commerce'

const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'A modern store built with Next.js 15, ShadCN, and Prisma.'

const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export {
  APP_NAME,
  APP_DESCRIPTION,
  SERVER_URL
}
