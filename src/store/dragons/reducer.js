import { DRAGONS_LOADING, DRAGONS_RECEIVED, DRAGONS_FAILED } from './actions';

const INITIAL_STATE = {
  list: [],
  error: null,
  isLoading: false,
};

const sortByName = (a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameB > nameA) {
    return 1;
  }

  return 0;
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
        list: action.payload.sort(sortByName),
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
