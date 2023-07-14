import { Address } from '@/contexts/AddressContext'

export enum ActionTypes {
  finalizeCheckout = 'finalizeCheckout',
}

export function finalizeCheckoutAction(address: Address) {
  return {
    type: 'finalizeCheckout',
    payload: {
      data: address,
    },
  }
}
