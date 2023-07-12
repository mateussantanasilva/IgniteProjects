import styled from 'styled-components'
import { WrapperStyle } from './globals'

export const BackgroundBlur = styled.div`
  background-image: url('/backgroud-blur.svg');
  background-size: cover;
  width: 100%;
  padding-block: 9.2rem;
`

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  ${WrapperStyle}

  img {
    width: 47.6rem;
    height: auto;
  }
`

export const InformationContainer = styled.div`
  max-width: 58.8rem;

  h1 {
    color: ${(props) => props.theme['--base-title']};
  }

  & > p {
    font-size: 2rem;
    color: ${(props) => props.theme['--base-subtitle']};

    margin-block: 1.6rem 6.6rem;
  }

  & > ul {
    display: grid;
    grid-template-columns: 23.4rem 1fr;
    gap: 2rem 4rem;
  }
`

export const BenefitsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  svg {
    width: 3.2rem;
    height: 3.2rem;

    border-radius: 50%;
    padding: 0.8rem;

    color: ${(props) => props.theme['--white']};
  }

  &:nth-child(1) {
    svg {
      background: ${(props) => props.theme['--yellow-dark']};
    }
  }

  &:nth-child(2) {
    svg {
      background: ${(props) => props.theme['--base-text']};
    }
  }

  &:nth-child(3) {
    svg {
      background: ${(props) => props.theme['--yellow']};
    }
  }

  &:nth-child(4) {
    svg {
      background: ${(props) => props.theme['--purple']};
    }
  }
`

export const CoffeesContainer = styled.section`
  ${WrapperStyle}
  padding-block: 3.2rem;

  h2 {
    color: ${(props) => props.theme['--base-subtitle']};
    margin-bottom: 5.4rem;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem 3.2rem;
`
