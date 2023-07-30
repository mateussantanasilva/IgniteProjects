'use client'

import Image from 'next/image'
import {
  ShoppingBagContainer,
  ShoppingBagContent,
  ShoppingBagItems,
  ShoppingBagFooter,
} from './styles'
import { Handbag, X } from '@phosphor-icons/react'

import tshirt from '@/assets/IgniteLab-T-shirt 1.png'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'
import { CheckoutButton } from '../CheckoutButton'

interface ShoppingBagProps {
  toHide?: boolean
}

export function ShoppingBag({ toHide }: ShoppingBagProps) {
  const {
    handleCartClick,
    shouldDisplayCart,
    cartDetails,
    cartCount,
    formattedTotalPrice,
    removeItem,
  } = useShoppingCart()

  function handleChangeBagDisplay() {
    handleCartClick()
  }

  const isExistsItemAndBagNotEmpty =
    cartDetails && Object.keys(cartDetails).length > 0

  const cartDetailsInArray =
    isExistsItemAndBagNotEmpty && Object.values(cartDetails)

  const isItemInBag = cartCount && cartCount > 0

  console.log(cartCount)
  return (
    <>
      <ShoppingBagContainer
        bagNotEmpty={isItemInBag || false}
        toHide={toHide}
        onClick={handleChangeBagDisplay}
        css={{
          // shows quantity of items in bag
          '&::before': {
            content: isItemInBag ? cartCount.toString() : '',
          },
        }}
      >
        <Handbag weight="bold" size={'2.4rem'} />
      </ShoppingBagContainer>

      <ShoppingBagContent visible={shouldDisplayCart}>
        <button onClick={handleChangeBagDisplay}>
          <X weight="bold" size={'2.4rem'} />
        </button>

        <div>
          <h2>Sacola de compras</h2>

          <ShoppingBagItems>
            {cartDetailsInArray &&
              cartDetailsInArray.map((cartItem) => {
                const formattedPrice = formatCurrencyString({
                  value: cartItem.price,
                  currency: 'BRL',
                })

                return (
                  <li key={cartItem.id}>
                    <div>
                      <Image
                        src={cartItem.image || tshirt}
                        alt={cartItem.name}
                        width={95}
                        height={95}
                      />
                    </div>

                    <div>
                      <p>{cartItem.name}</p>
                      <strong>{formattedPrice}</strong>
                      <button onClick={() => removeItem(cartItem.id)}>
                        Remover
                      </button>
                    </div>
                  </li>
                )
              })}
          </ShoppingBagItems>
        </div>

        <ShoppingBagFooter>
          <div>
            <span>Quantidade</span>
            <span>{cartCount} itens</span>
          </div>
          <div>
            <strong>Valor total</strong>
            <strong>{formattedTotalPrice}</strong>
          </div>

          <CheckoutButton isItemInBag={isItemInBag || 0} />
        </ShoppingBagFooter>
      </ShoppingBagContent>
    </>
  )
}
