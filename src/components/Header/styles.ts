import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 4rem 0 12.2rem;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: min(112rem, 100%);
  margin: 0 auto;
  padding-inline: 1rem;
`
