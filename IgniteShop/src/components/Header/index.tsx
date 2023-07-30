'use client'

import Image from 'next/image'

import logoIgniteShop from '@/assets/logo.svg'
import { HeaderContainer } from './styles'
import Link from 'next/link'
import { ShoppingBag } from '../ShoppingBag'

interface HeaderProps {
  justLogo?: boolean
}

export function Header({ justLogo }: HeaderProps) {
  return (
    <HeaderContainer isJustLogo={justLogo}>
      <Link href={'/'}>
        <Image
          src={logoIgniteShop}
          alt="Dois triângulos verdes com a escrita IgniteShop ao lado direito"
        />
      </Link>

      <ShoppingBag toHide={justLogo} />
    </HeaderContainer>
  )
}
