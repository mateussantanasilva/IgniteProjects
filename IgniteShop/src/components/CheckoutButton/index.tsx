import { useShoppingCart } from 'use-shopping-cart'
import { ButtonContainer } from './styles'
import axios from 'axios'
import { useState } from 'react'

interface CheckoutButtonProps {
  isItemInBag: boolean | 0
}

export function CheckoutButton({ isItemInBag }: CheckoutButtonProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { cartDetails, redirectToCheckout } = useShoppingCart()

  async function handleRedirectToCheckout() {
    const cartItemsInArray = cartDetails && Object.values(cartDetails)

    try {
      setIsCreatingCheckoutSession(true)

      // same baseUrl
      const response = await axios.post('/api/checkout', {
        cartItems: cartItemsInArray,
      })

      const { sessionId } = response.data

      await redirectToCheckout(sessionId)
    } catch (error) {
      setIsCreatingCheckoutSession(false)

      console.error(error)
    }
  }

  return (
    <ButtonContainer
      onClick={handleRedirectToCheckout}
      disabled={!isItemInBag || isCreatingCheckoutSession}
    >
      Finalizar Compra
    </ButtonContainer>
  )
}
