import styled from 'styled-components'
import { WrapperStyle } from './globals'

export const BackgroundBlur = styled.div`
  background-image: url('/backgroud-blur.svg');
  background-size: cover;
  width: 100%;
  padding-block: calc(9.2rem + ${(props) => props.theme['--header-height']})
    9.2rem;
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

  @media (max-width: 1244px) {
    justify-content: center;
  }
`
