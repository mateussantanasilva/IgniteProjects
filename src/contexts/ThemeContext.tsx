'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/theme/default'

interface ThemeContextProviderProps {
  children: ReactNode
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}
