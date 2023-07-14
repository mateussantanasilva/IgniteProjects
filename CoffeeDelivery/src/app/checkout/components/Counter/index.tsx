import { useContext } from 'react'
import { ShoppingCartContext } from '@/contexts/ShoppingCartContext'
import { Minus, Plus } from '@phosphor-icons/react'
import { CounterContainer } from './styles'

interface CounterProps {
  id: string
  amountCoffee: number
}

export function Counter({ id, amountCoffee }: CounterProps) {
  const { changeAmountCoffee, deleteCartItem } = useContext(ShoppingCartContext)

  function handleDecreaseAmount() {
    if (amountCoffee > 1) {
      changeAmountCoffee('decrease', id)
    } else {
      deleteCartItem(id)
    }
  }
  function handleIncreaseAmount() {
    if (amountCoffee < 30) {
      changeAmountCoffee('increase', id)
    }
  }

  return (
    <CounterContainer>
      <button type="button" onClick={handleDecreaseAmount}>
        <Minus size={'1.4rem'} weight={'bold'} />
      </button>
      <input type="number" value={amountCoffee} readOnly min={1} max={30} />
      <button type="button" onClick={handleIncreaseAmount}>
        <Plus size={'1.4rem'} weight={'bold'} />
      </button>
    </CounterContainer>
  )
}
