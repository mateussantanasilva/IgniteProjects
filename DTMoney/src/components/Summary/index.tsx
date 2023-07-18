import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'
import 'swiper/css'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer
      slidesPerView="auto"
      spaceBetween={32}
      breakpoints={{
        768: {
          spaceBetween: 32,
        },
        250: {
          spaceBetween: 16, // defines when >= 250
        },
      }}
    >
      <SummaryCard>
        <header>
          <span>Entradas</span>

          <ArrowCircleUp size={'3.2rem'} color="#00B37E" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>

          <ArrowCircleDown size={'3.2rem'} color="#F75A68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar size={'3.2rem'} color="#ffffff" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
