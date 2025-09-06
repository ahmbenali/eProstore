import Link from 'next/link'
import Image from 'next/image'

import {Product} from '~/types'
import ProductPrice from './product-price'
import {
  Card,
  CardHeader as Header,
  CardContent as Content,
} from '../ui/card'

type Props = {
  product: Product
}

function ProductCard({ product }: Props) {
  const {
    name,
    slug,
    images,
    brand,
    rating,
    stock,
    price
  } = product

  return (
    <Card className='w-full max-w-sm'>
      <Header className='p-0 items-center'>
        <Link href={`/product/${slug}`}>
          <Image
            priority={true}
            src={images![0]}
            alt={name}
            className='aspect-square object-cover rounded'
            height={300}
            width={300}
          />
        </Link>
      </Header>
      <Content className='p-4 grid gap-4'>
        <div className='text-xs'>{brand}</div>
        <Link href={`/product/${slug}`}>
          <h2 className='text-sm font-medium'>{name}</h2>
        </Link>
        <div className='flex-between gap-4'>
          <p>{+rating} stars</p>
          {!!stock && <ProductPrice value={+price} />}
          {!stock && <p className='text-destructive'>Out of Stock</p>}
        </div>
      </Content>
    </Card>
  )
}

export default ProductCard
