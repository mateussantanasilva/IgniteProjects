import { styled } from 'styled-components'

export const LayoutContainer = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 112rem;
  max-height: calc(100vh - 8rem);

  padding: 4rem;
  margin: 4rem auto;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
`
