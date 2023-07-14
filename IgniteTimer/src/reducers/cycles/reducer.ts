import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesQuantity: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

interface ActionProps {
  type: ActionTypes
  payload?: {
    newCycle: Cycle
  }
}

export function cyclesReducer(state: CyclesState, action: ActionProps) {
  if (action.type === ActionTypes.addNewCycle) {
    return produce(state, (draft) => {
      if (action.payload) {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      }
    })
  }

  const currentCycleIndex = state.cycles.findIndex(
    (cycle) => cycle.id === state.activeCycleId,
  )
  if (currentCycleIndex < 0) return state

  switch (action.type) {
    case ActionTypes.interruptCurrentCycle: {
      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
        draft.activeCycleId = null
      })
    }
    case ActionTypes.markCurrentCycleAsFinished: {
      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].finishedDate = new Date()
        draft.activeCycleId = null
      })
    }
    default:
      return state
  }
}
