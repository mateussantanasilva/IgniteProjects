import styled from 'styled-components'

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const TransactionsContainer = styled.main`
  width: min(112rem, 100%);
  margin: 6.4rem auto 1rem;
  padding-inline: 1rem;
`

export const TransactionsTable = styled.table`
  margin-top: 2.4rem;
  width: 100%;

  border-collapse: separate; // gain permission to manage line spacing
  border-spacing: 0 0.8rem;

  td {
    padding: 2rem 3.2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
