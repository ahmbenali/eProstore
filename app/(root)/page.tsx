import ProductList from '~/components/product/product-list'
import {getLatestProducts} from '~/lib/actions/product.actions'

async function HomePage() {
  // fetch products from db with server actions
  const latestProducts = await getLatestProducts()

  return (
    <div className='flexCol gap-8'>
      <title>Home</title>
      <h2 className='h2-bold'>Latest Products</h2>
      <ProductList
        products={latestProducts}
        title='Newest Arrivals'
        // limit={4}
      />
    </div>
  )
}

export default HomePage
