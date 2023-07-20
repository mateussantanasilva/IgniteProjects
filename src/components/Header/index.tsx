import Image from 'next/image'
import { HeaderContainer } from './styles'
import headerBackgroud from '@/assets/header-background.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Image
        src={headerBackgroud}
        alt="Fundo com barras brilhantes simulando código de terminal"
        width={1440}
        height={296}
      />
    </HeaderContainer>
  )
}
