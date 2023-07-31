'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { PurchaseData } from '../../page'
import { SuccessContainer, ImageItemsContainer } from './styles'

interface SuccessContentProps {
  purchaseData: PurchaseData
}

export function SuccessContent({ purchaseData }: SuccessContentProps) {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    // run when unmount component - change pages
    return () => {
      clearCart()
    }
  }, [])

  const { customerName, products } = purchaseData

  const amountOfTShirts = ` ${products.length}`.concat(
    products.length > 1 ? ` camisetas` : ` camiseta`,
  )

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
        {amountOfTShirts} já está a caminho da sua casa.
      </p>

      <Link href={'/'}>Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
