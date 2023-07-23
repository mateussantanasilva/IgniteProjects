import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'

import { Timer, Scroll, Sun, Moon } from '@phosphor-icons/react'
import logoIgnite from '../../../public/logo-ignite.svg'
import { ButtonContainer, HeaderContainer } from './styles'

export function Header() {
  const { isDefaultTheme, toggleTheme } = useContext(ThemeContext)

  function handleToggleTheme() {
    toggleTheme()
  }

  return (
    <HeaderContainer>
      <div>
        <NavLink to="/" title="Home">
          <img
            src={logoIgnite}
            alt="Dois triângulos verdes apontando para cima representando o logo do ignite"
          />
        </NavLink>
        <ButtonContainer title="Alterar tema" onClick={handleToggleTheme}>
          {isDefaultTheme ? <Sun size={'2.4rem'} /> : <Moon size={'2.4rem'} />}
        </ButtonContainer>
      </div>

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
