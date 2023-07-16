import styled, { css } from 'styled-components'

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;

  width: min(112rem, 100%);
  margin: 0 auto;
  margin-top: -8.2rem;
  padding-inline: 1rem;
`

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 2.4rem;
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1.2rem;

    font-size: 3.2rem;
    line-height: 140%;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
    `}
`
