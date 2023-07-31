import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ServerStylesheet } from '@/components/ServerStylesheet'
import { CartContextProvider } from '@/contexts/CartContext'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: {
    default: 'Ignite Shop',
    template: '%s | Ignite Shop', // applies less to the house
  },
  description:
    'Ignite Shop é uma aplicação web para compras de produtos originais da Rocketseat.',
  keywords: ['Ignite', 'Shop', 'Next.js', 'StitchesJS', 'produtos'],
  authors: [{ name: 'Mateus Santana' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <CartContextProvider>
          <ServerStylesheet>{children}</ServerStylesheet>
        </CartContextProvider>
      </body>
    </html>
  )
}
