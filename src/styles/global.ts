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
    backgroundColor: '$gray900',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: '160%',
    color: '$gray100',
  },
})
