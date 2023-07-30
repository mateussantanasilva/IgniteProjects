'use client'

import { ProductType } from '@/app/page'
import { ButtonContainer } from './styles'
import { useShoppingCart } from 'use-shopping-cart'

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
      disabled={sameItemAlreadyExistsInBag || false}
    >
      Colocar na sacola
    </ButtonContainer>
  )
}
