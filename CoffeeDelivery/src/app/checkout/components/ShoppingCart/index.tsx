import { useContext } from 'react'
import { CartItem } from '../CartItem'
import { ShoppingCartContainer, CartFooterContainer } from './styles'
import { ShoppingCartContext } from '@/contexts/ShoppingCartContext'
import { formatMoney } from '@/utils/formatMoney'

export function ShoppingCart() {
  const { cartItemsState } = useContext(ShoppingCartContext)

  const valueDelivery = 7.5
  const itemsTotal = cartItemsState.reduce((total, currentItem) => {
    return total + currentItem.price * currentItem.amountCoffee
  }, 0)

  return (
    <ShoppingCartContainer>
      <h5>Cafés selecionados</h5>

      <section>
        {cartItemsState.map((item) => {
          const totalItemPrice = item.price * item.amountCoffee

          return (
            <CartItem
              key={item.id}
              coffee={item}
              totalItemPrice={totalItemPrice}
            />
          )
        })}

        <CartFooterContainer>
          <ul>
            <li>
              <span>Total de itens</span>
              <span>R$ {formatMoney(itemsTotal)}</span>
            </li>

            <li>
              <span>Entrega</span>
              <span>R$ {formatMoney(valueDelivery)}</span>
            </li>

            <li>
              <strong>Total</strong>
              <strong>R$ {formatMoney(valueDelivery + itemsTotal)}</strong>
            </li>
          </ul>

          <button type="submit">Confirmar pedido</button>
        </CartFooterContainer>
      </section>
    </ShoppingCartContainer>
  )
}
