import ProductList from '~/components/product/product-list'
import sampleData from '~/db/sample-data'

async function HomePage() {
  // simulate a server delay to show the loading state
  await delay(1000)

  return (
    <div className='flexCol gap-8'>
      <title>Home</title>
      <h2 className='h2-bold'>Latest Products</h2>
      <ProductList
        data={sampleData.products}
        title='Newest Arrivals'
        limit={4}
      />
    </div>
  )
}

export default HomePage

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
