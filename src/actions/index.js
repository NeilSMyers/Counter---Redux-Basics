import { INCREMENT, DECREMENT, UPANDDOWN } from './types';

export function increment() {
  return ({
    type: INCREMENT,
    payload: 1
  })
}

export function decrement() {
  return ({
    type: DECREMENT,
    payload: -1
  })
}

export function upAndDown(amount) {
  return ({
    type: UPANDDOWN,
    payload: amount 
  })
}