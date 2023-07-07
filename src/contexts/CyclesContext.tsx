import { ReactNode, createContext, useState } from 'react'

interface CyclesContextProviderProps {
  children: ReactNode
}

interface CreateCycleData {
  task: string
  minutesQuantity: number
}

interface Cycle {
  id: string
  task: string
  minutesQuantity: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setNumberSecondsPassed: (secondsPassed: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setNumberSecondsPassed(secondsPassed: number) {
    setAmountSecondsPassed(secondsPassed)
  }
  function markCurrentCycleAsFinished() {
    setCycles((previousState) =>
      previousState.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }
  function createNewCycle({ task, minutesQuantity }: CreateCycleData) {
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
  }
  function interruptCurrentCycle() {
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
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setNumberSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
