import { Address } from '@/contexts/AddressContext'
import { ActionTypes } from './actions'
import { produce } from 'immer'

interface ActionProps {
  type: string
  payload: {
    data: Address
  }
}

export function AddressReducer(state: Address, action: ActionProps) {
  switch (action.type) {
    case ActionTypes.finalizeCheckout:
      return produce(state, () => action.payload.data)

    default:
      return state
  }
}
