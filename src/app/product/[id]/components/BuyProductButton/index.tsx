'use client'

import axios from 'axios'
import { ButtonContainer } from './styles'
import { useState } from 'react'

interface BuyProductButtonProps {
  defaultPriceId: string
}

export function BuyProductButton({ defaultPriceId }: BuyProductButtonProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      // same baseUrl
      const response = await axios.post('/api/checkout', {
        priceId: defaultPriceId, // body
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl // use 'router.push' if you want to redirect to internal route
    } catch (error) {
      setIsCreatingCheckoutSession(false)

      console.error(error)
    }
  }

  return (
    <ButtonContainer
      onClick={handleBuyProduct}
      disabled={isCreatingCheckoutSession}
    >
      Comprar agora
    </ButtonContainer>
  )
}
