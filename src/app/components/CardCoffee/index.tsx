'use client'

import Image from 'next/image'
import { Coffee } from '@/seeds/coffees'
import { CardContainer, FooterContainer } from './styles'
import { AddToCartForm } from '../AddToCartForm'
import { formatMoney } from '@/utils/formatMoney'

export function CardCoffee({
  id,
  name,
  about,
  categories,
  src,
  alt,
  price,
}: Coffee) {
  return (
    <CardContainer>
      <Image src={src} alt={alt} width={120} height={120} />

      <header>
        {categories.map((category) => {
          return <strong key={`${id}${category}`}>{category}</strong>
        })}
      </header>

      <h4>{name}</h4>

      <p>{about}</p>

      <FooterContainer>
        <div>
          <span>R$ </span>
          <strong>{formatMoney(price)}</strong>
        </div>

        <AddToCartForm id={id} name={name} src={src} alt={alt} price={price} />
      </FooterContainer>
    </CardContainer>
  )
}
