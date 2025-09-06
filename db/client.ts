import {neonConfig, Pool} from '@neondatabase/serverless'
import {PrismaNeon} from '@prisma/adapter-neon'
import {PrismaClient} from '~/lib/generated/prisma'
// import {PrismaClient} from '@prisma/client'
import ws from 'ws'
import {de} from 'zod/v4/locales'

// Sets up WebSocket connections, which enables Neon to use WebSocket communication.

neonConfig.webSocketConstructor = ws
const connectionString = `${process.env.DATABASE_URL}`

if (!connectionString) {
  throw new Error('DATABASE_URL is not set in environment variables')
}


// Creates a new connection pool using the provided connection string, allowing multiple concurrent connections.
// const pool = new Pool({connectionString})

// Instantiates the Prisma adapter using the Neon connection pool to handle the connection between Prisma and Neon.
// const adapter = new PrismaNeon({connectionString})


// Use the pool's connection method
// const adapter = new PrismaNeon({pool} )
const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! })

// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
// const prisma = new PrismaClient({adapter}).$extends({
//   result: {
//     product: {
//       price: {
//         compute(product) {
//           return product.price.toString()
//         },
//       },
//       rating: {
//         compute(product) {
//           return product.rating.toString()
//         },
//       },
//     },
//   },
// })

const prisma = new PrismaClient({adapter}).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString()
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString()
        },
      },
    },
  },
})


// export const prisma = new PrismaClient({
//   datasources: {
//     db: {
//       url: connectionString,
//     },
//   },
// }).$extends({
//   result: {
//     product: {
//       price: {
//         compute(product) {
//           return product.price.toString();
//         },
//       },
//       rating: {
//         compute(product) {
//           return product.rating.toString();
//         },
//       },
//     },
//   },
// });

export {prisma as db}
