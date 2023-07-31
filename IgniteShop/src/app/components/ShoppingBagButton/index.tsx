'use client'

import { useShoppingCart } from 'use-shopping-cart'
import { ProductType } from '@/contexts/CartContext'
import { ButtonContainer } from './styles'
import { Handbag } from '@phosphor-icons/react'

interface ShoppingBagButtonProps {
  product: ProductType
}

export function ShoppingBagButton({ product }: ShoppingBagButtonProps) {
  const { addItem, cartDetails } = useShoppingCart()

  const sameItemAlreadyExistsInBag = cartDetails && product.id in cartDetails

  function handleAddItemToBag() {
    addItem(product)
  }

  return (
    <ButtonContainer
      onClick={handleAddItemToBag}
      disabled={sameItemAlreadyExistsInBag}
    >
      <Handbag weight="bold" color="#fff" size={'3.2rem'} />
    </ButtonContainer>
  )
}
