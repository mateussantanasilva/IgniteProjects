import { ReactNode } from 'react'
import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'To-do List',
  description:
    'Uma lista de tarefas para controlar todos os compromissos, desenvolvida com React, Next.js e TypeScript.',
  keywords: [
    'To-do',
    'Tasks',
    'Next.js',
    'React',
    'TypeScript',
    'tarefas',
    'lista',
  ],
  authors: [{ name: 'Mateus Santana' }],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
