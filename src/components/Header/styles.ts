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

export const NewTransactionButton = styled.button`
  padding: 1.2rem 2rem;
  background: ${(props) => props.theme['green-500']};
  border-radius: 6px;

  font-weight: 700;
  color: ${(props) => props.theme.white};

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['green-300']};
  }
`
