import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    text-decoration: none;
    outline:0;
  }

  :focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme['--blue']};
  }

  body {
    background: ${(props) => props.theme['--base-backgroud']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['--base-text']};
  }
`
