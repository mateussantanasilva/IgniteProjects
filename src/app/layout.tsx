import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { globalStyles } from '@/styles/global'
import { getCssText } from '@/styles'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Ignite Shop',
  description:
    'Ignite Shop é uma aplicação web para compras de produtos originais da Rocketseat.',
  keywords: ['Ignite', 'Shop', 'Next.js', 'StitchesJS', 'produtos'],
  authors: [{ name: 'Mateus Santana' }],
}

globalStyles() // avoid unnecessary rendering

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{getCssText()}</style>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
