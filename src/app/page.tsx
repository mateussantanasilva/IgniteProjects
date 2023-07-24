'use client'

import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from './styles'
import 'keen-slider/keen-slider.min.css'

import tshirt1 from '@/assets/tshirt-1.png'
import tshirt2 from '@/assets/tshirt-2.png'
import tshirt3 from '@/assets/tshirt-3.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.89,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image
          src={tshirt1}
          alt="Camiseta da rocketseat"
          width={520}
          height={480}
        />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image
          src={tshirt2}
          alt="Camiseta da rocketseat"
          width={520}
          height={480}
        />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image
          src={tshirt3}
          alt="Camiseta da rocketseat"
          width={520}
          height={480}
        />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
