'use client'

import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { CarouselContainer, Product } from './styles'
import 'keen-slider/keen-slider.min.css'
import Link from 'next/link'
import { ShoppingBagButton } from '../ShoppingBagButton'
import { ProductType } from '@/app/page'
import { formatCurrencyString } from 'use-shopping-cart'

interface CarouselProps {
  products: ProductType[]
}

export function Carousel({ products }: CarouselProps) {
  const [sliderRef] = useKeenSlider({
    slides: () => [
      {
        size: 0.465,
        spacing: 0.032,
      },
      {
        size: 0.465,
        spacing: 0.032,
      },
      {
        size: 0.465,
        spacing: 0.032,
      },
      {
        size: 0.465,
        origin: 0.275,
      },
    ],
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1.25,
          spacing: 20,
        },
      },
      '(max-width: 425px)': {
        slides: {
          perView: 1,
          spacing: 20,
        },
      },
    },
  })

  return (
    <CarouselContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        const formattedPrice = formatCurrencyString({
          value: product.price,
          currency: 'BRL',
        })

        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image
              src={product.image}
              alt={product.name}
              width={520}
              height={480}
            />

            <footer>
              {/* prefetch works only on hover */}
              <Link href={`/product/${product.id}`} prefetch={false}>
                <strong>{product.name}</strong>
                <span>{formattedPrice}</span>
              </Link>

              <ShoppingBagButton product={product} />
            </footer>
          </Product>
        )
      })}
    </CarouselContainer>
  )
}
