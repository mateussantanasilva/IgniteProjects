import { WrapperStyle } from "@/app/globals";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${WrapperStyle}
  
  padding-block: 3.2rem;
`

export const NavContainer = styled.nav`
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
    position: relative;

    svg {
      color: ${props => props.theme["--yellow-dark"]};
    }

    &::after {
        content: '3';
        position: absolute;
        
        display: flex;
        justify-content: center;
        align-items: center;

        width: 2rem;
        height: 2rem;
        top: -25%;
        right: -25%;

        background: ${props => props.theme["--yellow-dark"]};
        border-radius: 50%;

        font-size: 1.2rem;
        color: ${props => props.theme["--white"]};
        font-weight: 700;
      }
  }
`
