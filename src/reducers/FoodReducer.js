import { FOOD_SEARCH_AUTOCOMPLETE } from '../actions/types';

const initial_state = {
  searchQueryMatches: []
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case FOOD_SEARCH_AUTOCOMPLETE:
      return {
        ...state,
        searchQueryMatches: [action.payload]
      };
    default:
      return state;
  }
};
