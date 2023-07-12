'use client'

import Image from 'next/image'
import { Coffee } from '@/seeds/coffees'
import { ShoppingCart } from '@phosphor-icons/react'
import { CardContainer, FooterContainer, FormContainer } from './styles'
import { Counter } from '@/components/Counter'

export function CardCoffee({ id, name, about, categories, src, alt }: Coffee) {
  return (
    <CardContainer>
      <Image src={src} alt={alt} width={120} height={120} />

      <header>
        {categories.map((category) => {
          return <strong key={id}>{category}</strong>
        })}
      </header>

      <h4>{name}</h4>

      <p>{about}</p>

      <FooterContainer>
        <div>
          <span>R$ </span>
          <strong>9,90</strong>
        </div>

        <FormContainer>
          <Counter />

          <button type="submit" title="Adicionar ao carrinho de compras">
            <ShoppingCart size={'2.2rem'} weight={'fill'} />
          </button>
        </FormContainer>
      </FooterContainer>
    </CardContainer>
  )
}
