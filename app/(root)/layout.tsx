import {PropsWithChildren} from 'react'

import Footer from '~/components/shared/footer'
import Header from '~/components/shared/header'


function RootLayout({children}: Readonly<PropsWithChildren>) {
  return (
    <div className='flexCol h-screen'>
      <Header />
      <main className='flex-1 wrapper'>{children}</main>
      <Footer />
    </div>
  )
}

export default RootLayout
