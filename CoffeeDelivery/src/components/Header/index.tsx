'use client'

import Image from 'next/image'
import Link from 'next/link'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { HeaderContainer, LinkContainer, NavContainer } from './styles'
import { useContext } from 'react'
import { ShoppingCartContext } from '@/contexts/ShoppingCartContext'

export function Header() {
  const { cartItemsState } = useContext(ShoppingCartContext)
  const amountCartItems = cartItemsState.length

  const linkToCartPage = (
    <Link href={'/checkout'} title="Carrinho de compras">
      <ShoppingCart size={'2.2rem'} weight={'fill'} />
    </Link>
  )

  return (
    <HeaderContainer>
      <div>
        <Link href={'/'} title="Home">
          <Image
            src="/logo.svg"
            alt="Logo de uma embalagem de café de delivery com um foguete dentro e ao lado escrito Coffee Delivery"
            width={84.952}
            height={40}
          />
        </Link>

        <NavContainer>
          <button title="Localização">
            <MapPin size={'2.2rem'} weight={'fill'} />
            São Paulo, SP
          </button>

          {amountCartItems > 0 ? (
            <LinkContainer amountitems={amountCartItems}>
              {linkToCartPage}
            </LinkContainer>
          ) : (
            <LinkContainer>{linkToCartPage}</LinkContainer>
          )}
        </NavContainer>
      </div>
    </HeaderContainer>
  )
}
