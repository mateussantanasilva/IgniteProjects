'use client'

import Image from 'next/image'
import { BuyProductButton } from '../BuyProductButton'
import { ProductContainer, ImageContainer, DetailsContainer } from './styles'
import { ProductType } from '@/app/page'
import { formatCurrencyString } from 'use-shopping-cart'

interface ProductDetailsProps {
  product: ProductType
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const formattedPrice = formatCurrencyString({
    value: product.price,
    currency: 'BRL',
  })

  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          src={product.image}
          alt={product.name}
          width={520}
          height={480}
        />
      </ImageContainer>

      <DetailsContainer>
        <h1>{product.name}</h1>
        <span>{formattedPrice}</span>

        <p>{product.description}</p>

        {/*  defaultPriceId={product.defaultPriceId} */}
        <BuyProductButton product={product} />
      </DetailsContainer>
    </ProductContainer>
  )
}
