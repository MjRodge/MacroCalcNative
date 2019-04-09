import axios from 'axios';
import {
  FOOD_SEARCH_AUTOCOMPLETE,
  FOOD_SEARCH_AUTOCOMPLETE_QUERYING,
  FOOD_SEARCH_AUTOCOMPLETE_ERROR
} from './types';
import { APP_KEY, APP_ID } from '../constants/edamamApiKeys';

export const foodSearchAutoComplete = query => {
  return dispatch => {
    dispatch({ type: FOOD_SEARCH_AUTOCOMPLETE_QUERYING });

    axios
      .get(
        `http://api.edamam.com/auto-complete?q=${query}&limit=15&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then(res => {
        dispatch({
          type: FOOD_SEARCH_AUTOCOMPLETE,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: FOOD_SEARCH_AUTOCOMPLETE_ERROR,
          payload: `Search unable to be completed: ${err}`
        });
      });
  };
};
