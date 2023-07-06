import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { differenceInSeconds } from 'date-fns'

import { HandPalm, Play } from '@phosphor-icons/react'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

interface Cycle {
  id: string
  task: string
  minutesQuantity: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const task = watch('task')
  const isSubmitDisabled = !task

  const secondsLeft = activeCycle ? totalTimeInSeconds - amountSecondsPassed : 0

  const currentAmoutMinutes = Math.floor(secondsLeft / 60)
  const currentAmoutSeconds = secondsLeft % 60

  // inserts 0 when not 2 characters
  const minutes = String(currentAmoutMinutes).padStart(2, '0')
  const seconds = String(currentAmoutSeconds).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) document.title = `${minutes}:${seconds}`
  }, [minutes, seconds, activeCycle])

  function handleCreateNewCycle({ task, minutesQuantity }: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task,
      minutesQuantity,
      startDate: new Date(),
    }

    setCycles((previousState) => [...previousState, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset() // return to defaultValues
  }
  function handleInterruptCycle() {
    setCycles((previousState) =>
      previousState.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <NewCycleForm />

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={handleInterruptCycle}>
            <HandPalm size={'2.4rem'} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={'2.4rem'} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
