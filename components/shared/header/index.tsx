'use client'

import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useState} from 'react'

import {APP_NAME} from '~/lib/constants'
import Menu from './menu'

function Header() {
  // to fix the hydration error (mostly caused by extensions)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className='w-full border-b'>
      <div className='wrapper  flex-between'>
        <div className='flex-start '>
          <Link href='/' className='flex gap-2'>
            <Image
              priority={true}
              src='/images/logo.svg'
              width={32}
              height={32}
              alt={`${APP_NAME} logo`}
            />
            <span className='hidden lg:block font-bold text-2xl'>
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  )
}

export default Header
