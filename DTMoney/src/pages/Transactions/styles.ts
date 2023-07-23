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

  @media (max-width: 768px) {
    tbody {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      tr {
        position: relative;
        display: flex;
        flex-direction: column;

        td {
          padding: 0 2rem;

          &:first-child {
            padding-top: 2rem;
            border-radius: 6px 6px 0 0;

            color: ${(props) => props.theme['gray-300']};
          }

          &:nth-child(2) {
            font-size: 2rem;
            font-weight: 700;
            padding-bottom: 1.2rem;
          }

          &:nth-child(3) {
            padding-bottom: 2rem;
            border-radius: 0 0 6px 6px;

            color: ${(props) => props.theme['gray-500']};
          }

          &:last-child {
            position: absolute;
            top: 65%;
            right: 0;

            background: transparent;
            color: ${(props) => props.theme['gray-500']};
          }
        }
      }
    }
  }
`

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
