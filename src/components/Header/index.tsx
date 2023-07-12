'use client'

import Image from 'next/image'
import Link from 'next/link'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { HeaderContainer, NavContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
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

        <Link href={'/checkout'} title="Carrinho de compras">
          <ShoppingCart size={'2.2rem'} weight={'fill'} />
        </Link>
      </NavContainer>
    </HeaderContainer>
  )
}
