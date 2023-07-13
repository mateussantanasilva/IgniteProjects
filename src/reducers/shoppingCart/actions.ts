import { CartItem } from '@/contexts/ShoppingCartContext'

export enum ActionTypes {
  addItemToCart = 'addItemToCart',
  changeAmountCoffee = 'changeAmountCoffee',
}

export function addItemToCartAction(cartItem: CartItem) {
  return {
    type: 'addItemToCart',
    payload: {
      data: cartItem,
    },
  }
}

export function changeAmountCoffeeAction(id: number, amountCoffee: number) {
  return {
    type: 'changeAmountCoffee',
    payload: {
      data: {
        id,
        amountCoffee,
      },
    },
  }
}
