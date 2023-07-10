import { createGlobalStyle } from "styled-components";

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
    box-shadow: 0 0 0 1px ${props => props.theme["--yellow-dark"]};
  }

  body {
    background: ${props => props.theme["--backgroud"]};
    color: ${props => props.theme["--base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea {
    font-size: 1.6rem;
    line-height: 130%;
    font-weight: 400;
  }

  button {
    font-size: 1.4rem;
    line-height: 160%;
    font-weight: 400;
  }
`