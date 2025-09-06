import {PrismaClient} from '~/lib/generated/prisma'
import sampleData from './sample-data'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.product.deleteMany()

  await prisma.product.createMany({
    data: sampleData.products,
  })

  console.log('Data seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
