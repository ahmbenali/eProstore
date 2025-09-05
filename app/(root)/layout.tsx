import {PropsWithChildren} from 'react'

function RootLayout({children}: Readonly<PropsWithChildren>) {
  return (
    <div className='flexCol h-screen'>
      <main className='flex-1 wrapper'>{children}</main>
    </div>
  )
}

export default RootLayout
