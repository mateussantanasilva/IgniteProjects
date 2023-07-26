import Image from 'next/image'

import logoIgniteShop from '@/assets/logo.svg'
import { HeaderContainer } from './styles'
import Link from 'next/link'

export function Header() {
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <Image
          src={logoIgniteShop}
          alt="Dois triângulos verdes com a escrita IgniteShop ao lado direito"
        />
      </Link>
    </HeaderContainer>
  )
}
