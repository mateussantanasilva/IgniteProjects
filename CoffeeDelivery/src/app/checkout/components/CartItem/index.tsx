import Image from 'next/image'
import { useContext } from 'react'
import { formatMoney } from '@/utils/formatMoney'
import { CartItem, ShoppingCartContext } from '@/contexts/ShoppingCartContext'
import { Counter } from '../Counter'
import { Trash } from '@phosphor-icons/react'
import {
  CartItemDivisor,
  CartItemContainer,
  ItemInformationContainer,
} from './styles'

interface CartItemProps {
  coffee: CartItem
  totalItemPrice: number
}

export function CartItem({ coffee, totalItemPrice }: CartItemProps) {
  const { deleteCartItem } = useContext(ShoppingCartContext)

  function handleDeleteCartItem() {
    deleteCartItem(coffee.id)
  }

  return (
    <CartItemDivisor>
      <CartItemContainer>
        <section>
          <Image src={coffee.src} alt={coffee.alt} width={64} height={64} />

          <ItemInformationContainer>
            <p>{coffee.name}</p>

            <div>
              <Counter id={coffee.id} amountCoffee={coffee.amountCoffee} />

              <button type="button" onClick={handleDeleteCartItem}>
                <Trash size={'1.6rem'} />
                Remover
              </button>
            </div>
          </ItemInformationContainer>
        </section>

        <strong>R$ {formatMoney(totalItemPrice)}</strong>
      </CartItemContainer>
    </CartItemDivisor>
  )
}
