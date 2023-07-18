import { HeaderContainer, HeaderContent } from './styles'
import logoIgnite from '../../../public/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img
          src={logoIgnite}
          alt="Logo do DT Money representado por dois triangulos verdes apontados para cima"
        />

        {/* context */}
        <NewTransactionModal />
      </HeaderContent>
    </HeaderContainer>
  )
}
