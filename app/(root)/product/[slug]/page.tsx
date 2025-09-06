import {notFound} from 'next/navigation'
import ProductPrice from '~/components/product/product-price'
import {getProductBySlug} from '~/lib/actions/product.actions'
import {
  Badge,
  Button,
  Card,
  CardContent
} from '~/components/ui'
import ProductImages from '~/components/product/product-images'

type Props = {
  params: Promise<{slug: string}>
}

async function ProductDetailsPage({params}: Props) {
  const {slug} = await params

  // fetch product from db
  const product = await getProductBySlug(slug)
  if (!product) notFound()

  const {
    brand,
    category,
    description,
    stock,
    name,
    numReviews,
    price,
    rating,
  } = product

  return (
    <>
      <section>
        <div className='grid md:grid-cols-5'>
          {/* Images Column */}
          <div className='col-span-2'>
            <ProductImages images={product.images} />
          </div>

          {/* Details Column */}
          <div className='col-span-2 p-5'>
            <div className='flex flex-col gap-6'>
              <p>
                {brand} {category}
              </p>
              <h1 className='h3-bold'>{name}</h1>
              <p>
                {rating} of {numReviews} reviews
              </p>

              <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                <ProductPrice
                  value={Number(price)}
                  className='w-24 rounded-full bg-green-100 text-green-700 px-5 py-2'
                />
              </div>
            </div>
            <div className='mt-10'>
              <p>Description:</p>
              <p>{description}</p>
            </div>
          </div>
          {/* Action Column */}
          <div>
            <Card>
              <CardContent className='p-4'>
                <div className='mb-2 flex justify-between'>
                  <div>Price</div>
                  <div>
                    <ProductPrice value={+price} />
                  </div>
                </div>
                <div className='mb-2 flex justify-between'>
                  <div>Status</div>
                  {stock > 0 ? (
                    <Badge variant='outline'>In stock</Badge>
                  ) : (
                    <Badge variant='destructive'>Unavailable</Badge>
                  )}
                </div>
                {stock > 0 && (
                  <div className=' flex-center'>
                    <Button className='w-full'>Add to cart</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetailsPage
