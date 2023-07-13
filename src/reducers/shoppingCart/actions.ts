import { CartItem } from '@/contexts/ShoppingCartContext'

export enum ActionTypes {
  addItemToCart = 'addItemToCart',
  changeAmountCoffee = 'changeAmountCoffee',
  deleteCartItemAction = 'deleteCartItemAction',
}

export function addItemToCartAction(cartItem: CartItem) {
  return {
    type: 'addItemToCart',
    payload: {
      data: cartItem,
    },
  }
}

export function changeAmountCoffeeAction(type: string, id: string) {
  return {
    type: 'changeAmountCoffee',
    payload: {
      data: {
        type,
        id,
      },
    },
  }
}

export function deleteCartItemAction(id: string) {
  return {
    type: 'deleteCartItemAction',
    payload: {
      data: id,
    },
  }
}
