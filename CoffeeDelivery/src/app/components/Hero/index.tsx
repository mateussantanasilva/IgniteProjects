import Image from 'next/image'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'
import { HeroContainer, InformationContainer, BenefitsItem } from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <InformationContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <ul>
          <BenefitsItem>
            <ShoppingCart size={'1.6rem'} weight="fill" />
            <p>Compra simples e segura</p>
          </BenefitsItem>

          <BenefitsItem>
            <Package size={'1.6rem'} weight="fill" />
            <p>Embalagem mantém o café intacto</p>
          </BenefitsItem>

          <BenefitsItem>
            <Timer size={'1.6rem'} weight="fill" />
            <p>Entrega rápida e rastreada</p>
          </BenefitsItem>

          <BenefitsItem>
            <Coffee size={'1.6rem'} weight="fill" />
            <p>O café chega fresquinho até você</p>
          </BenefitsItem>
        </ul>
      </InformationContainer>

      <Image
        src={'/presentation-coffee.svg'}
        alt="Imagem de uma embalagem de café de delivery com vários tipos de grãos de café atrás"
        width={476}
        height={360}
      />
    </HeroContainer>
  )
}
