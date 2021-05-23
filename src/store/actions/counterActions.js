import { actionsTypes } from './actionsTypes';

export const increment = () => {
  return {
    type: actionsTypes.COUNTER_INCREMENT
  }
}

export const decrement = () => {
  return {
    type: actionsTypes.COUNTER_DECREMENT
  }
}

export const counterActions = {
  counterIncrement: () => {
    return increment();
  },
  counterDecrement: () => {
    return decrement();
  }
}
