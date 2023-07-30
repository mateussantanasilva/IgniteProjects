'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SuccessContainer, ImageItemsContainer } from './styles'

import { PurchaseData } from '../../page'
import { useShoppingCart } from 'use-shopping-cart'
import { useEffect } from 'react'

interface SuccessContentProps {
  purchaseData: PurchaseData
}

export function SuccessContent({ purchaseData }: SuccessContentProps) {
  const { clearCart } = useShoppingCart()

  const { customerName, products } = purchaseData

  useEffect(() => {
    // run when unmount component - change pages
    return () => {
      clearCart()
    }
  }, [])

  return (
    <SuccessContainer>
      <ImageItemsContainer>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={120}
                height={110}
              />
            </div>
          )
        })}
      </ImageItemsContainer>

      <h1>Compra efetuada!</h1>

      <p>
        Uhuul <strong>{customerName}</strong>, sua compra de
        {` ${products.length}`}
        {products.length > 1 ? ` camisetas` : ` camiseta`} já está a caminho da
        sua casa.
      </p>

      <Link href={'/'}>Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
