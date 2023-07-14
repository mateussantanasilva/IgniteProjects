'use client'

import { ReactNode, createContext, useReducer } from 'react'
import { AddressReducer } from '@/reducers/address/reducer'
import { finalizeCheckoutAction } from '@/reducers/address/actions'

interface AddressContextProviderProps {
  children: ReactNode
}

export interface Address {
  cep: string
  street: string
  numberHouse: string
  neighborhood: string
  city: string
  uf: string
  paymentMethod: string
  complement?: string | undefined
}

interface AddressContextType {
  addressState: Address
  finalizeCheckout: (address: Address) => void
}

export const AddressContext = createContext({} as AddressContextType)

export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const [addressState, dispatchAction] = useReducer(AddressReducer, {
    cep: '',
    street: '',
    numberHouse: '',
    neighborhood: '',
    city: '',
    uf: '',
    paymentMethod: '',
    complement: undefined,
  })

  function finalizeCheckout(address: Address) {
    dispatchAction(finalizeCheckoutAction(address))
  }

  return (
    <AddressContext.Provider value={{ addressState, finalizeCheckout }}>
      {children}
    </AddressContext.Provider>
  )
}
