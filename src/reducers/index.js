import { combineReducers } from 'redux';
import MacroReducer from './MacroReducer';

export default combineReducers({
  macro: MacroReducer,
});
