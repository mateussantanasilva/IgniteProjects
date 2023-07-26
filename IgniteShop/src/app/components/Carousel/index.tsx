'use client'

import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { CarouselContainer, Product } from './styles'
import 'keen-slider/keen-slider.min.css'

interface CarouselProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export function Carousel({ products }: CarouselProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.9,
      spacing: 48,
    },
  })

  return (
    <CarouselContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            href={`/product/${product.id}`}
            prefetch={false} // prefetch works only on hover
            className="keen-slider__slide"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={520}
              height={480}
            />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}
    </CarouselContainer>
  )
}
