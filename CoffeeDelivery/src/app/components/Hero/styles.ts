import { WrapperStyle } from '@/app/globals'
import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  ${WrapperStyle}

  img {
    max-width: 47.6rem;
    width: 50%;
    height: auto;
  }

  @media (max-width: 700px) {
    img {
      display: none;
    }
  }
`

export const InformationContainer = styled.div`
  max-width: 58.8rem;
  width: fit-content;

  h1 {
    color: ${(props) => props.theme['--base-title']};
  }

  & > p {
    font-size: 2rem;
    color: ${(props) => props.theme['--base-subtitle']};

    margin-block: 1.6rem 6.6rem;
  }

  & > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 4rem;
  }
`

export const BenefitsItem = styled.li`
  display: flex;
  align-items: center;
  flex: 1 1 26.7rem;
  justify-items: center;
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

    margin-right: -5rem;

    @media (max-width: 581px) {
      max-width: fit-content;
      margin-right: 4rem;
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

    margin-right: -5rem;

    @media (max-width: 581px) {
      max-width: fit-content;
      margin-right: 4rem;
    }
  }

  &:nth-child(4) {
    svg {
      background: ${(props) => props.theme['--purple']};
    }
  }
`
