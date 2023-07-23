'use client'

import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { ShoppingCartReducer } from '@/reducers/shoppingCart/reducer'
import { AddToCartFormProps } from '@/app/components/AddToCartForm'
import {
  addItemToCartAction,
  changeAmountCoffeeAction,
  deleteCartItemAction,
  resetCartAction,
} from '@/reducers/shoppingCart/actions'

interface ProviderProps {
  children: ReactNode
}

export interface CartItem extends AddToCartFormProps {
  amountCoffee: number
}

interface ShoppingCartContextType {
  cartItemsState: CartItem[]
  addItemToCart: (cartItem: CartItem) => void
  changeAmountCoffee: (type: string, idCartItem: string) => void
  deleteCartItem: (id: string) => void
  resetCart: () => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function ShoppingCartContextProvider({ children }: ProviderProps) {
  const [cartItemsState, dispatchAction] = useReducer(
    ShoppingCartReducer,
    [],
    (initialState) => {
      let storedStateAsJSON
      if (typeof localStorage !== 'undefined') {
        storedStateAsJSON = localStorage.getItem(
          '@coffee-delivery:cart-items-state-1.0.0',
        )
      }

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

  function changeAmountCoffee(type: string, idCartItem: string) {
    dispatchAction(changeAmountCoffeeAction(type, idCartItem))
  }

  function deleteCartItem(id: string) {
    dispatchAction(deleteCartItemAction(id))
  }

  function resetCart() {
    dispatchAction(resetCartAction())
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItemsState,
        addItemToCart,
        changeAmountCoffee,
        deleteCartItem,
        resetCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
