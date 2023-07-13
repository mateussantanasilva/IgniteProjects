'use client'

import Image from 'next/image'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  BackgroundBlur,
  BenefitsItem,
  InformationContainer,
  HeroContainer,
  CoffeesContainer,
  ListContainer,
} from './styles'
import { CardCoffee } from './components/CardCoffee'
import { coffees } from '@/seeds/coffees'

export default function Home() {
  return (
    <main>
      <BackgroundBlur>
        <HeroContainer>
          <InformationContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
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
      </BackgroundBlur>

      <CoffeesContainer>
        <h2>Nossos cafés</h2>

        <ListContainer>
          {coffees.map((coffee) => {
            return (
              <CardCoffee
                key={coffee.id}
                id={coffee.id}
                name={coffee.name}
                about={coffee.about}
                categories={coffee.categories}
                src={coffee.src}
                alt={coffee.alt}
              />
            )
          })}
        </ListContainer>
      </CoffeesContainer>
    </main>
  )
}
