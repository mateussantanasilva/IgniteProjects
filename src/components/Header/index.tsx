import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from '@phosphor-icons/react'

import logoIgnite from '../../../public/logo-ignite.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img
          src={logoIgnite}
          alt="Dois triângulos verdes apontando para cima representando o logo do ignite"
        />
      </NavLink>

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={'2.4rem'} />
        </NavLink>
        <NavLink to="/historico" title="Histórico">
          <Scroll size={'2.4rem'} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
