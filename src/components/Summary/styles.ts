/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryContainer = styled(Swiper)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;

  width: min(112rem, 100%);
  margin: 0 auto;
  margin-top: -8.2rem;
  padding-inline: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 425px) {
    gap: 1.6rem;
  }
`

export const SummaryCard = styled(SwiperSlide) <SummaryCardProps>`
  padding: 2.4rem;
  max-width: 35.2rem;
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

  @media (max-width: 425px) {
    max-width: 28rem;
  }
`
