import { ReactNode, createContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { lightTheme } from '../styles/themes/lightTheme'

interface ThemeContextProviderProps {
  children: ReactNode
}

interface ThemeState {
  'layout-height': string

  white: string

  'scrollBar-color': string

  'gray-100': string
  'gray-300': string
  'gray-400': string
  'gray-500': string
  'gray-600': string
  'gray-700': string
  'gray-800': string
  'gray-900': string

  'green-300': string
  'green-500': string
  'green-700': string

  'red-500': string
  'red-700': string

  'yellow-500': string
}

interface ThemeContextType {
  isDefaultTheme: boolean
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<ThemeState>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@ignite-timer:theme-state-1.0.0',
    )

    if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)

    return defaultTheme
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(theme)

    localStorage.setItem('@ignite-timer:theme-state-1.0.0', stateJSON)
  }, [theme])

  const isDefaultTheme = JSON.stringify(theme) === JSON.stringify(defaultTheme)

  function toggleTheme() {
    isDefaultTheme ? setTheme(lightTheme) : setTheme(defaultTheme)
  }

  return (
    <ThemeContext.Provider value={{ isDefaultTheme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
