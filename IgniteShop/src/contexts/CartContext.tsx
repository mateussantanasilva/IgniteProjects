'use client'

import { ReactNode } from 'react'
import { CartProvider } from 'use-shopping-cart'

interface CartContextProviderProps {
  children: ReactNode
}

const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_KEY as string

export function CartContextProvider({ children }: CartContextProviderProps) {
  return (
    <CartProvider
      currency="BRL"
      cartMode="checkout-session"
      stripe={stripePublicKey}
      shouldPersist
      persistKey="@ignite-shop:shopping-cart-1.0.0"
    >
      {children}
    </CartProvider>
  )
}
