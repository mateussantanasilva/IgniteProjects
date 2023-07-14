import { CartItem } from '@/contexts/ShoppingCartContext'
import { produce } from 'immer'
import { ActionTypes } from './actions'

interface ActionProps {
  type: string
  payload: {
    data: any
  }
}

export function ShoppingCartReducer(state: CartItem[], action: ActionProps) {
  switch (action.type) {
    case ActionTypes.addItemToCart: {
      const coffeeAlreadyExistsIndex = state.findIndex(
        (item) => item.id === action.payload.data.id,
      )

      if (coffeeAlreadyExistsIndex >= 0)
        return produce(state, (draft) => {
          draft[coffeeAlreadyExistsIndex].amountCoffee +=
            action.payload.data.amountCoffee
        })

      return produce(state, (draft) => {
        draft.push(action.payload.data)
      })
    }

    case ActionTypes.changeAmountCoffee: {
      const coffeeAlreadyExistsIndex = state.findIndex(
        (item) => item.id === action.payload.data.id,
      )

      if (action.payload.data.type === 'increase')
        return produce(state, (draft) => {
          draft[coffeeAlreadyExistsIndex].amountCoffee += 1
        })

      return produce(state, (draft) => {
        draft[coffeeAlreadyExistsIndex].amountCoffee -= 1
      })
    }

    case ActionTypes.deleteCartItem: {
      return produce(state, (draft) => {
        return draft.filter((item) => item.id !== action.payload.data)
      })
    }

    case ActionTypes.resetCart: {
      console.log('tet')
      return []
    }

    default:
      return state
  }
}
