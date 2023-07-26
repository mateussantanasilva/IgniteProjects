import styled from 'styled-components'
import { BaseTitle } from '../../styles'

export const ShoppingCartContainer = styled.aside`
  h5 {
    ${BaseTitle}
  }

  & > section {
    padding: 4rem;
    background: ${(props) => props.theme['--base-card']};
    border-radius: 0.6rem 4.4rem;
  }
`

export const CartFooterContainer = styled.footer`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    margin-bottom: 2.4rem;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > span:nth-child(1) {
        font-size: 1.4rem;
      }

      & > span:nth-child(2) {
        font-size: 1.6rem;
      }

      & > strong {
        color: ${(props) => props.theme['--base-subtitle']};
        font-size: 2rem;
      }
    }
  }

  button {
    background: ${(props) => props.theme['--yellow']};
    border-radius: 0.6rem;

    width: 100%;
    padding: 1.2rem 0.8rem;
    cursor: pointer;

    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: ${(props) => props.theme['--white']};

    transition: background 0.2s;

    &:hover {
      background: ${(props) => props.theme['--yellow-dark']};
    }
  }
`
