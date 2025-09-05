/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  data: any[]
  title?: string
  limit?: number
}

function ProductList({data, title, limit}: Props) {
  // return a limit of products or all products
  const limitedData = !limit
    ? data
    : data.slice(0, limit)

  const {length} = limitedData

  return (
    <div className='my-10'>
      <h2 className='h2-bold'>{title}</h2>
      {
        !length && (
          <div>
            <p>No product found</p>
          </div>
        )
      }
      {
        !!length && (
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
              limitedData.map(({name}: any) => (
                <div key={name}>{name}</div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default ProductList
