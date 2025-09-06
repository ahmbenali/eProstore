import z from 'zod'
import {insertProductSchema} from '~/lib/validator'

type Product = z.infer<typeof insertProductSchema> & {
  id: string
  createdAt: Date
  rating: string
  numReviews: number
}

export type {Product}
