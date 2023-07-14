import { useFormContext } from 'react-hook-form'
import { Minus, Plus } from '@phosphor-icons/react'
import { CounterContainer } from './styles'

interface CounterInputProps {
  amountCoffee: number
  changeAmountCoffee: (amount: number) => void
}

export function CounterInput({
  amountCoffee,
  changeAmountCoffee,
}: CounterInputProps) {
  const { register, setValue } = useFormContext()

  function handleDecreaseAmount() {
    if (amountCoffee > 0) {
      const newAmountCoffee = amountCoffee - 1

      changeAmountCoffee(newAmountCoffee)
      setValue(`amountCoffee`, newAmountCoffee)
    }
  }
  function handleIncreaseAmount() {
    if (amountCoffee < 30) {
      const newAmountCoffee = amountCoffee + 1

      changeAmountCoffee(newAmountCoffee)
      setValue(`amountCoffee`, newAmountCoffee)
    }
  }

  return (
    <CounterContainer>
      <button type="button" onClick={handleDecreaseAmount}>
        <Minus size={'1.4rem'} weight={'bold'} />
      </button>
      <input
        type="number"
        value={amountCoffee}
        readOnly
        min={1}
        max={30}
        {...register(`amountCoffee`, {
          valueAsNumber: true,
        })}
        required
      />
      <button type="button" onClick={handleIncreaseAmount}>
        <Plus size={'1.4rem'} weight={'bold'} />
      </button>
    </CounterContainer>
  )
}
