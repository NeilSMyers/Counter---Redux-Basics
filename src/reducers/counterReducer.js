import { INCREMENT, DECREMENT, UPANDDOWN } from '../actions/types';

const INITIAL_STATE = {
  count: 0,
  message: 'you can do it'
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      }
      break;
    case DECREMENT:
      return {
        ...state,
        count: state.count + action.payload
      }
    case UPANDDOWN:
      return {
        ...state,
        count: state.count + action.payload
      }
    default: return state;
  }
}