'use server'

import {db} from '~/db/client'

const getLatestProducts = async () => {
  const data = await db.product.findMany({
    take: 4,
    orderBy: {
      createdAt: 'desc',
    },
  })

  return data
}

export {getLatestProducts}
