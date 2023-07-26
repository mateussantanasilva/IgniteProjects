'use client'

import Image from 'next/image'
import { Coffee } from '@/seeds/coffees'
import { CardContainer, FooterContainer } from './styles'
import { AddToCartForm } from '../AddToCartForm'
import { formatMoney } from '@/utils/formatMoney'

interface CardCoffeeProps {
  coffee: Coffee
}

export function CardCoffee({ coffee }: CardCoffeeProps) {
  return (
    <CardContainer>
      <Image src={coffee.src} alt={coffee.alt} width={120} height={120} />

      <header>
        {coffee.categories.map((category) => {
          return <strong key={`${coffee.id}${category}`}>{category}</strong>
        })}
      </header>

      <h4>{coffee.name}</h4>

      <p>{coffee.about}</p>

      <FooterContainer>
        <div>
          <span>R$ </span>
          <strong>{formatMoney(coffee.price)}</strong>
        </div>

        <AddToCartForm
          id={coffee.id}
          name={coffee.name}
          src={coffee.src}
          alt={coffee.alt}
          price={coffee.price}
        />
      </FooterContainer>
    </CardContainer>
  )
}
