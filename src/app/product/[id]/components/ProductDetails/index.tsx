'use client'

import Image from 'next/image'
import { BuyProductButton } from '../BuyProductButton'
import { ProductContainer, ImageContainer, DetailsContainer } from './styles'

interface ProductDetailsProps {
  product: {
    id: string
    defaultPriceId: string
    name: string
    imageUrl: string
    price: string
    description: string
  }
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={520}
          height={480}
        />
      </ImageContainer>

      <DetailsContainer>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <BuyProductButton defaultPriceId={product.defaultPriceId} />
      </DetailsContainer>
    </ProductContainer>
  )
}
