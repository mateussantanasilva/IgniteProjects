import { useContext, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import {
  FormContainer,
  TaskInput,
  MinutesQuantityInput,
  ControllerButton,
} from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

export function NewCycleForm() {
  const { cycles, activeCycle } = useContext(CyclesContext)
  const { register, setValue } = useFormContext()
  const [amoutMinutes, setAmoutMinutes] = useState(0)

  const dontHaveMinutes = amoutMinutes <= 4
  const hasMaximumMinutes = amoutMinutes === 60

  function handleDecreaseMinutes() {
    const newAmountMinutes = amoutMinutes - 5

    setAmoutMinutes(newAmountMinutes)
    setValue('minutesQuantity', newAmountMinutes)
  }

  function handleIncreaseMinutes() {
    const newAmountMinutes = amoutMinutes + 5

    setAmoutMinutes(newAmountMinutes)
    setValue('minutesQuantity', newAmountMinutes)
  }

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="taskSuggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')} // takes all the information and joins it with the input
      />
      <datalist id="taskSuggestions">
        {cycles.slice(-3).map((cycle) => (
          <option key={cycle.id} value={cycle.task} />
        ))}
      </datalist>

      <label htmlFor="minutesQuantity">durante</label>
      <div>
        <ControllerButton
          type="button"
          onClick={handleDecreaseMinutes}
          disabled={dontHaveMinutes && true}
        >
          <Minus size={'1.6rem'} />
        </ControllerButton>
        <MinutesQuantityInput
          type="number"
          id="minutesQuantity"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          {...register('minutesQuantity', { valueAsNumber: true })}
        />
        <ControllerButton
          type="button"
          onClick={handleIncreaseMinutes}
          disabled={hasMaximumMinutes && true}
        >
          <Plus size={'1.6rem'} />
        </ControllerButton>
      </div>

      <span>minutos.</span>
    </FormContainer>
  )
}
