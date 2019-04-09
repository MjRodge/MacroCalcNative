import { combineReducers } from 'redux';
import MacroReducer from './MacroReducer';
import FoodReducer from './FoodReducer';

export default combineReducers({
  macro: MacroReducer,
  food: FoodReducer
});
