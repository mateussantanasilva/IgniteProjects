import { styled } from 'styled-components'

export const LayoutContainer = styled.section`
  display: flex;
  flex-direction: column;

  max-width: min(112rem, 95%);
  height: ${(props) => props.theme['layout-height']};

  padding: 4rem;
  margin: 4rem auto;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  @media (max-width: 455px) {
    height: auto;
  }
`
