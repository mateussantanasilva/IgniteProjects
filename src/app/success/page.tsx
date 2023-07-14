'use client'

import { useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { AddressContext } from '@/contexts/AddressContext'
import { ShoppingCartContext } from '@/contexts/ShoppingCartContext'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  ContentContainer,
  DetailItem,
  DetailsContainer,
  HeaderContainer,
  SuccessContainer,
} from './styles'

export default function Success() {
  const { addressState } = useContext(AddressContext)
  const { resetCart } = useContext(ShoppingCartContext)

  const router = useRouter()
  if (!addressState.cep) router.push('/')

  const hasComplement = addressState.complement !== ''
  const [, paymentMethodText] = addressState.paymentMethod.split(',')

  resetCart()

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
                  Entrega em{' '}
                  <strong>
                    {addressState.street}, {addressState.numberHouse}
                    {hasComplement && ` - ${addressState.complement}`}
                  </strong>
                </p>
                <p>
                  {`${addressState.neighborhood} - ${addressState.city}, ${addressState.uf}`}
                </p>
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
                  <strong>{paymentMethodText}</strong>
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
