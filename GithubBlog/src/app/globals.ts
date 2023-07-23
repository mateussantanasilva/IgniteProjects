import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  :focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme['--blue']};
  }

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${(props) => props.theme['--base-input']};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme['--base-post']};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    text-decoration: none;
    outline:0;
  }

  body {
    background: ${(props) => props.theme['--base-backgroud']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, a {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['--base-text']};
  }

  @media (max-width: 768px) {
    :root {
      font-size: 54.6876%; // 16px -> 14px
    }
  }
`
