import { Minus, Plus } from '@phosphor-icons/react'
import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <button type="button">
        <Minus size={'1.4rem'} weight={'bold'} />
      </button>
      <input type="number" value={10} readOnly min={1} max={30} />
      <button type="button">
        <Plus size={'1.4rem'} weight={'bold'} />
      </button>
    </CounterContainer>
  )
}
