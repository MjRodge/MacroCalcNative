import { FOOD_SEARCH_AUTOCOMPLETE } from './types';

export const foodSearchAutoComplete = query => {
  return {
    type: FOOD_SEARCH_AUTOCOMPLETE,
    payload: query
  };
};
