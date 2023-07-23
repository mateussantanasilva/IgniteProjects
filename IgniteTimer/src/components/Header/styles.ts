import { css, styled } from 'styled-components'

export const BaseOptionMenu = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.8rem;
  height: 4.8rem;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  color: ${(props) => props.theme['gray-100']};

  &:not(:focus):hover {
    border-bottom: 3px solid ${(props) => props.theme['green-500']};
  }

  &.active {
    color: ${(props) => props.theme['green-500']};
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav,
  div {
    display: flex;
    gap: 0.8rem;
  }

  nav {
    a {
      ${BaseOptionMenu}
    }
  }
`

export const ButtonContainer = styled.button`
  ${BaseOptionMenu}
  background: transparent;
  cursor: pointer;
`
