import styled from "styled-components"

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;
  max-width: 25.6rem;
  background: ${props => props.theme["--base-card"]};
  border-radius: 0.6rem 3.6rem;

  img {
    margin-top: -20%;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    & > strong {
      background: ${props => props.theme["--yellow-light"]};
      border-radius: 100px;
      padding: 0.4rem 0.8rem;
      margin-block: 1.2rem 1.6rem;

      color: ${props => props.theme["--yellow-dark"]};
      font-size: 1rem;
      text-transform: uppercase;
    }
  }

  header > 

  h4 {
    color: ${props => props.theme["--base-subtitle"]};
  }

  p {
    color: ${props => props.theme["--base-label"]};
    text-align: center;
    font-size: 1.4rem;

    margin-block: 0.8rem 3.3rem;
  }
`

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.3rem;

  span {
    font-size: 1.4rem;
  }

  strong {
    font-family: var(--font-ballo-2), sans-serif;
    font-size: 2.4rem;
    font-weight: 800;
  }
`

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    padding: 0.8rem;
    background: ${props => props.theme["--base-button"]};
    border-radius: 0.6rem;

    input {
      background: transparent;
      max-width: 2rem;

      color: ${props => props.theme["--base-title"]};
      text-align: center;
      
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
    }

    & > button {
      display: flex;
      align-items: center;

      background: transparent;
      cursor: pointer;

      svg {
        color: ${props => props.theme["--purple"]};
        transition: color .2s;
      }

      svg:hover {
        color: ${props => props.theme["--purple-dark"]};
      }
    }
  }

  & > button {
    border-radius: 6px;
    background: ${props => props.theme["--purple-dark"]};
    padding: 0.8rem; 
    cursor: pointer;

    line-height: 0;
    transition: background .2s;

    svg {
      color: ${props => props.theme["--white"]};
    }
  }

  & > button:hover {
    background: ${props => props.theme["--purple"]};
  }
`