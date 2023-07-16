import * as Dialog from '@radix-ui/react-dialog'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
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
        <Dialog.Root>
          {/* use existing button - use only with button */}
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          {/* use 'portal' makes the element independent of any parent (MODAL) */}
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
