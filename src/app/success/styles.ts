import styled from 'styled-components'
import { WrapperStyle } from '../globals'

export const SuccessContainer = styled.section`
  ${WrapperStyle}
  margin-top: calc(8rem + ${(props) => props.theme['--header-height']});
`

export const HeaderContainer = styled.header`
  h2 {
    color: ${(props) => props.theme['--yellow-dark']};
  }

  p {
    color: ${(props) => props.theme['--base-subtitle']};
    font-size: 2rem;

    margin-block: 0.4rem 4rem;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 49.2rem;
    width: 50%;
    height: auto;
  }

  @media (max-width: 550px) {
    img {
      display: none;
    }
  }
`

export const DetailsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  background: ${(props) => props.theme['--backgroud']};
  border-radius: 0.6rem 3.6rem;

  width: min(52.6rem, 100%);
  padding: 4rem;

  position: relative;

  &::after {
    // border with linear-gradient
    content: '';
    position: absolute;
    z-index: -1;

    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;

    background-image: linear-gradient(to right, #dbac2c, #8047f8);
    border-radius: 0.7rem 3.7rem;
  }
`

export const DetailItem = styled.li`
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
      background: ${(props) => props.theme['--purple']};
    }
  }

  &:nth-child(2) {
    svg {
      background: ${(props) => props.theme['--yellow']};
    }
  }

  &:nth-child(3) {
    svg {
      background: ${(props) => props.theme['--yellow-dark']};
    }
  }
`
