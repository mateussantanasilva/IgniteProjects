import styled from 'styled-components'

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;
  max-width: 25.6rem;
  background: ${(props) => props.theme['--base-card']};
  border-radius: 0.6rem 3.6rem;

  img {
    margin-top: -20%;
    width: 12rem;
    height: auto;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    & > strong {
      background: ${(props) => props.theme['--yellow-light']};
      border-radius: 100px;
      padding: 0.4rem 0.8rem;
      margin-block: 1.2rem 1.6rem;

      color: ${(props) => props.theme['--yellow-dark']};
      font-size: 1rem;
      text-transform: uppercase;
    }
  }

  h4 {
    color: ${(props) => props.theme['--base-subtitle']};
  }

  p {
    color: ${(props) => props.theme['--base-label']};
    text-align: center;
    font-size: 1.4rem;

    margin-block: 0.8rem 3.3rem;
  }
`

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.3rem;

  span {
    font-size: 1.4rem;
  }

  strong {
    font-family: var(--font-ballo-2), sans-serif;
    font-size: 2.4rem;
    font-weight: 800;
  }
`
