'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SuccessContainer, ImageContainer } from './styles'

interface SuccessContentProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export function SuccessContent({ customerName, product }: SuccessContentProps) {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={120}
          height={110}
        />
      </ImageContainer>

      <p>
        Uhuul <strong>{customerName}</strong>, sua
        <strong>{` ${product.name} `}</strong>
        já está a caminho da sua casa.
      </p>

      <Link href={'/'}>Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
