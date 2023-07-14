import styled from 'styled-components'

export const CartItemDivisor = styled.article`
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    height: 1px;
    width: 100%;

    margin-block: 2.4rem;
    background: ${(props) => props.theme['--base-button']};
  }
`

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 0.8rem 0.4rem;
  background: ${(props) => props.theme['--base-card']};

  & > section {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    gap: 2rem;

    & > img {
      width: 6.4rem;
      height: auto;
    }
  }
`

export const ItemInformationContainer = styled.div`
  & > p {
    color: ${(props) => props.theme['--base-subtitle']};
    margin-bottom: 0.8rem;
  }

  & > div {
    display: flex;
    gap: 0.8rem;

    & > button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;

      padding: 0 0.8rem;
      background: ${(props) => props.theme['--base-button']};
      border-radius: 0.6rem;

      font-size: 1.2rem;
      text-transform: uppercase;
      cursor: pointer;

      svg {
        color: ${(props) => props.theme['--purple']};
      }

      transition: background 0.2s;

      &:hover {
        background: ${(props) => props.theme['--base-hover']};
      }
    }
  }
`
