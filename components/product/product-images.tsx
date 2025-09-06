'use client'

import Image from 'next/image'
import {useState} from 'react'
import {cn} from '~/lib/utils'

type Props = {
  images: string[]
}

function ProductImages({images}: Props) {
  // keep track of the current image
  const [current, setCurrent] = useState(0)

  return (
    <div className='space-y-4'>
      <Image
        src={images[current]}
        alt='Hero image'
        width={1000}
        height={1000}
        className='min-h-[300px] object-center object-cover'
      />

      <div className='flex'>
        {
          images.map((img, idx) => (
            <div
              key={img}
              className={cn(
                'border mr-2 cursor-pointer hover:border-orange-600',
                current === idx && 'border-orange-500'
              )}
              onClick={() => setCurrent(idx)}
            >
              <Image
                src={img}
                alt={'image'}
                width={100}
                height={100}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductImages
