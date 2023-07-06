import { useState } from 'react'
import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const totalTimeInSeconds = activeCycle ? activeCycle.minutesQuantity * 60 : 0

  useEffect(() => {
    if (activeCycle) {
      const interval = setInterval(() => {
        const currentSecondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (currentSecondsDifference >= totalTimeInSeconds) {
          setCycles((previousState) =>
            previousState.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle
              }
            }),
          )

          setAmountSecondsPassed(totalTimeInSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(currentSecondsDifference)
        }
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [activeCycle, totalTimeInSeconds, activeCycleId])

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
