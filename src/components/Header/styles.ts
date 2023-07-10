import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: min(90%, 112rem);
  margin: 0 auto;
  padding-block: 3.2rem;
`

export const NavContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  button {
    display: flex;
    align-items: center;
    gap: .4rem;

    border-radius: 6px;
    background: ${props => props.theme["--purple-light"]};
    padding: 0.8rem;

    color: ${props => props.theme["--purple-dark"]};
    line-height: 130%;
  }

  a {
    border-radius: 6px;
    background: ${props => props.theme["--yellow-light"]};
    padding: 0.8rem; 

    line-height: 0;

    svg {
      color: ${props => props.theme["--yellow-dark"]};
    }
  }
`
