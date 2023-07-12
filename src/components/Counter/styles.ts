import styled from "styled-components";

export const CounterContainer = styled.div`
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
`