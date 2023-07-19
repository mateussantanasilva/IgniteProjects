'use client'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/themes/default'
import { GlobalStyle } from './globals'

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Github Blog',
  description:
    'Aplicação que utilizará da API do GitHub para buscar issues de um repositório, dados do perfil e exibir elas como um blog',
  keywords: [
    'Github',
    'Blog',
    'API',
    'GitHub API',
    'issues',
    'repositório',
    'perfil',
    'Next.js',
    'aplicação',
  ],
  authors: [{ name: 'Mateus Santana' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
