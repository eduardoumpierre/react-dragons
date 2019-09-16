import { DRAGONS_LOADING, DRAGONS_RECEIVED, DRAGONS_FAILED } from './actions';

const INITIAL_STATE = {
  list: [],
  error: null,
  isLoading: false,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DRAGONS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DRAGONS_RECEIVED:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    case DRAGONS_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
