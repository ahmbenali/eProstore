import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {PropsWithChildren} from "react";

import '~/assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Commerce App',
  description: 'A modern store built with Next.js, ShadCN, and Prisma.',
}

function RootLayout({children}: Readonly<PropsWithChildren>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}

export default RootLayout;
