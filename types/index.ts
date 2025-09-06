import z from 'zod'
import {insertProductSchema} from '~/lib/validator'

type InsertProduct = z.infer<typeof insertProductSchema>

type Product = InsertProduct  & {
  id: string
  createdAt: Date
  rating: string
  numReviews: number
}

export type {Product}
