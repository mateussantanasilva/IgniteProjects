'use client'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/themes/default'
import { GlobalStyle } from '@/app/globals'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/libs/queryClient'
import { PostsProvider } from '@/contexts/PostsContext'
import { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <PostsProvider>{children}</PostsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
