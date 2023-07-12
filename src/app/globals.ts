import { createGlobalStyle, css } from "styled-components";

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
    outline: 0;
  }

  :focus {
    box-shadow: 0 0 0 1px ${props => props.theme['--yellow-dark']};
  }

  body, input, textarea, button {
    font-family: var(--font-roboto), sans-serif;
    color: ${props => props.theme["--base-text"]};
    font-weight: 400;
  }

  body, input, textarea {
    font-size: 1.6rem;
    line-height: 130%;
  }

  body {
    background: ${props => props.theme["--backgroud"]};
    -webkit-font-smoothing: antialiased;
  }

  button {
    font-size: 1.4rem;
    line-height: 160%;
  }

  h1, h2, h3, h4, h5 {
    line-height: 130%;
    font-family: var(--font-ballo-2), sans-serif;
  }

  h1 {
    font-size: ${props => props.theme["--title-xl"]};
    font-weight: 800;
  }

  h2 {
    font-size: ${props => props.theme["--title-l"]};
    font-weight: 800;
  }

  h3 {
    font-size: ${props => props.theme["--title-m"]};
    font-weight: 800;
  }

  h4 {
    font-size: ${props => props.theme["--title-s"]};
  }

  h5 {
    font-size: ${props => props.theme["--title-xs"]};
  }
`

export const WrapperStyle = css`
  width: min(90%, 112rem);
  margin: 0 auto;
`