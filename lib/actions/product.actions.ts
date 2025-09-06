'use server'

import {db} from '~/db/client'
import {LATEST_PRODUCTS_LIMIT} from '../constants'
import {convertToPlainObject} from '../utils'

const getLatestProducts = async () => {
  const data = await db.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {
      createdAt: 'desc',
    },
  })

  return convertToPlainObject(data)
}

export {getLatestProducts}
