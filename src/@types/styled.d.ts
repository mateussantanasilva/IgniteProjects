import 'styled-components'
import { defaultTheme } from '@/styles/theme/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  // update library module type
  export interface DefaultTheme extends ThemeType { }
}