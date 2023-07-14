import { Cycle } from './reducer'

// defines groups of values that can be attributes for a var
export enum ActionTypes {
  addNewCycle = 'addNewCycle',
  interruptCurrentCycle = 'interruptCurrentCycle',
  markCurrentCycleAsFinished = 'markCurrentCycleAsFinished',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.addNewCycle,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.markCurrentCycleAsFinished,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.interruptCurrentCycle,
  }
}
