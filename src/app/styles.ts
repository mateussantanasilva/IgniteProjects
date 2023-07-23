import styled from 'styled-components'

export const PostList = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;

  width: min(86.4rem, 96%);
  margin: 4.8rem auto 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
