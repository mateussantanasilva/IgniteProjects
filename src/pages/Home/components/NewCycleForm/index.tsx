import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { FormContainer, TaskInput, MinutesQuantityInput } from './styles'

export function NewCycleForm() {
  const { cycles, activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

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

      <span>minutos.</span>
    </FormContainer>
  )
}
