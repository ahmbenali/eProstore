import {Product} from '~/types'
import ProductCard from './product-card'

type Props = {
  products: Product[]
  title?: string
  limit?: number
}

function ProductList({products, title, limit}: Props) {
  // return a limit number of products or all products
  const limitedProducts = !limit
    ? products
    : products.slice(0, limit)

  const {length} = limitedProducts

  const productCards = limitedProducts.map(product => (
    <ProductCard
      key={product.slug}
      product={product}
    />
  ))

  return (
    <div className='my-10'>
      <h2 className='h2-bold'>{title}</h2>

      {!length && (
        <div>
          <p>No product found</p>
        </div>
      )}

      {!!length && (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 justify-items-center'>
          {productCards}
        </div>
      )}
    </div>
  )
}

export default ProductList
