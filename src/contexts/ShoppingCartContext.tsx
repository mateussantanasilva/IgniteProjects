'use client'

import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { ShoppingCartReducer } from '@/reducers/shoppingCart/reducer'
import { addItemToCartAction } from '@/reducers/shoppingCart/actions'
import { AddToCartFormProps } from '@/app/components/AddToCartForm'

interface ProviderProps {
  children: ReactNode
}

export interface CartItem extends AddToCartFormProps {
  amountCoffee: number
}

interface ShoppingCartContextType {
  cartItemsState: CartItem[]
  addItemToCart: (cartItem: CartItem) => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function ShoppingCartContextProvider({ children }: ProviderProps) {
  const [cartItemsState, dispatchAction] = useReducer(
    ShoppingCartReducer,
    [],
    (initialState) => {
      const storedStateAsJSON = localStorage
        ? localStorage.getItem('@coffee-delivery:cart-items-state-1.0.0')
        : null

      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)

      return initialState
    },
  )

  useEffect(() => {
    const stateInJSON = JSON.stringify(cartItemsState)

    localStorage.setItem('@coffee-delivery:cart-items-state-1.0.0', stateInJSON)
  }, [cartItemsState])

  function addItemToCart(cartItem: CartItem) {
    dispatchAction(addItemToCartAction(cartItem))
  }

  return (
    <ShoppingCartContext.Provider value={{ cartItemsState, addItemToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
