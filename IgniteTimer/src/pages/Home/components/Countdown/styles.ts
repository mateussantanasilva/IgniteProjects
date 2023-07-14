import styled from 'styled-components'

export const CountdownContainer = styled.section`
  display: flex;
  max-width: 80vw;

  font-family: 'Roboto Mono', monospace;
  font-size: 16rem;
  line-height: 12.8rem;
  color: ${(props) => props.theme['gray-100']};

  div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 4rem 1.6rem;
    border-radius: 8px;
  }

  @media (max-width: 630px) {
    font-size: 10rem;
    line-height: 6rem;
  }

  @media (max-width: 455px) {
    flex-direction: column;
  }
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;

  overflow: hidden;
  width: 7.2rem;
  padding: 3.2rem 0;

  color: ${(props) => props.theme['green-500']};

  @media (max-width: 455px) {
    visibility: hidden;
    width: 0;
    height: 1.6rem;
    padding: 0;
  }
`
