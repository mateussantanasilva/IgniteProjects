import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'
import { CountdownContainer, Separator } from './styles'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    markCurrentCycleAsFinished,
    setNumberSecondsPassed,
  } = useContext(CyclesContext)

  const totalTimeInSeconds = activeCycle ? activeCycle.minutesQuantity * 60 : 0

  useEffect(() => {
    if (activeCycle) {
      const interval = setInterval(() => {
        const currentSecondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (currentSecondsDifference >= totalTimeInSeconds) {
          markCurrentCycleAsFinished()

          setNumberSecondsPassed(totalTimeInSeconds)
          clearInterval(interval)
        } else {
          setNumberSecondsPassed(currentSecondsDifference)
        }
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [
    activeCycle,
    totalTimeInSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setNumberSecondsPassed,
  ])

  const secondsLeft = activeCycle ? totalTimeInSeconds - amountSecondsPassed : 0

  const currentAmoutMinutes = Math.floor(secondsLeft / 60)
  const currentAmoutSeconds = secondsLeft % 60

  // inserts 0 when not 2 characters
  const minutes = String(currentAmoutMinutes).padStart(2, '0')
  const seconds = String(currentAmoutSeconds).padStart(2, '0')

  useEffect(() => {
    activeCycle
      ? (document.title = `${minutes}:${seconds}`)
      : (document.title = 'Ignite Timer')
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <span className="minutes">{minutes[0]}</span>
      <span className="minutes">{minutes[1]}</span>
      <Separator>:</Separator>
      <span className="seconds">{seconds[0]}</span>
      <span className="seconds">{seconds[1]}</span>
    </CountdownContainer>
  )
}
