import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Play } from '@phosphor-icons/react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesQuantityInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesQuantity: z
    .number()
    .min(5, 'Deve ter o min de 5 min')
    .max(60, 'Deve ter o max de 60 min'),
})
type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export function Home() {
  // add { formState } to use formState.errors and view erros messages
  const { register, handleSubmit, watch, reset } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      // define handleSubmit parameter types
      task: '',
      minutesQuantity: 0,
    },
  })

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle({ task, minutesQuantity }: NewCycleFormData) {
    console.log(`${task} ${minutesQuantity}`)
    reset() // return to defaultValues
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="taskSuggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')} // takes all the information and joins it with the input
          />
          <datalist id="taskSuggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesQuantity">durante</label>
          <MinutesQuantityInput
            type="number"
            id="minutesQuantity"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesQuantity', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span className="minutes">0</span>
          <span className="minutes">0</span>
          <Separator>:</Separator>
          <span className="seconds">0</span>
          <span className="seconds">0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={'2.4rem'} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
