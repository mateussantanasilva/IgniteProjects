'use client'

import { useShoppingCart } from 'use-shopping-cart'
import { ProductType } from '@/contexts/CartContext'
import { ButtonContainer } from './styles'

interface BuyProductButtonProps {
  product: ProductType
}

export function BuyProductButton({ product }: BuyProductButtonProps) {
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
      Colocar na sacola
    </ButtonContainer>
  )
}
