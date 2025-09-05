import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {PropsWithChildren} from 'react'

import '~/assets/styles/globals.css'
import {
  APP_NAME as appName,
  APP_DESCRIPTION as appDescription,
  SERVER_URL as serverUrl
} from '~/lib/constants'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: {
    template: `%s | ${appName}`,
    default: appName,
  },
  description: appDescription,
  metadataBase: new URL(serverUrl),
}

const RootLayout = ({children}: Readonly<PropsWithChildren>) => {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}

export default RootLayout
