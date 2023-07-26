import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Providers } from '@/components/Providers'
import { Header } from '@/components/Header'
import StyledComponentsRegistry from '@/components/StyledRegistry'

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
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
