import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Baloo_2, Roboto } from 'next/font/google'

import { ThemeContextProvider } from '@/contexts/ThemeContext'
import { GlobalStyleContextProvider } from '@/contexts/GlobalStyleContext'
import { Header } from '@/components/Header'
import { ShoppingCartContextProvider } from '@/contexts/ShoppingCartContext'
import { AddressContextProvider } from '@/contexts/AddressContext'

export const ballo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-ballo-2',
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Coffee Delivery',
  description:
    'Coffee Delivery é uma página de catálogo e compra de cafés desenvolvida com ReactJS, NextJS e TypeScript na trilha Ignite.',
  keywords: [
    'Coffee',
    'Delivery',
    'Catálogo',
    'Cafés',
    'ReactJS',
    'NextJS',
    'TypeScript',
  ],
  authors: [{ name: 'Mateus Santana' }],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${ballo2.variable}`}>
        <ThemeContextProvider>
          <GlobalStyleContextProvider />
          <ShoppingCartContextProvider>
            <AddressContextProvider>
              <Header />
              {children}
            </AddressContextProvider>
          </ShoppingCartContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
