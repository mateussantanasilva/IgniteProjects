'use client'

import Image from 'next/image'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  ContentContainer,
  DetailItem,
  DetailsContainer,
  HeaderContainer,
  SuccessContainer,
} from './styles'

export default function Success() {
  return (
    <main>
      <SuccessContainer>
        <HeaderContainer>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </HeaderContainer>

        <ContentContainer>
          <DetailsContainer>
            <DetailItem>
              <MapPin size={'1.6rem'} weight={'fill'} />

              <div>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </DetailItem>

            <DetailItem>
              <Timer size={'1.6rem'} weight={'fill'} />

              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </DetailItem>

            <DetailItem>
              <CurrencyDollar size={'1.6rem'} weight={'regular'} />

              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>Cartão de Crédito</strong>
                </p>
              </div>
            </DetailItem>
          </DetailsContainer>

          <Image
            src="/delivery.svg"
            alt="Ilustração de uma pessoa digirindo uma moto para fazer entrega do café"
            width={492}
            height={293}
          />
        </ContentContainer>
      </SuccessContainer>
    </main>
  )
}
