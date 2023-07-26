import { globalCss } from '.'

export const globalStyles = globalCss({
  ':root': {
    fontSize: '62.5%',
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    border: 'none',
    textDecoration: 'none',
    outline: 'none',
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight: '100vh',
    backgroundColor: '$gray900',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontSize: '$md',
    fontWeight: 400,
    lineHeight: '160%',
    color: '$gray100',
  },
})
