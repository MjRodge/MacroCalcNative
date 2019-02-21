import { CHECKBOX_SELECTION, SLIDER_VALUE_CHANGED } from '../actions/types';

const initial_state = {
  activityLevel: 'sedentary', //default value of activity radio group
  goal: 'lose', //default value of goal radio group
  heightUnit: 'cm', //default value of height unit setting radio group
  weightUnit: 'kg', //default value of weight unit setting radio group
  fatPercentage: 20,
  carbPercentage: 80,
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case CHECKBOX_SELECTION:
      return { ...state, [action.payload.group]: action.payload.title };
    case SLIDER_VALUE_CHANGED:
      return {
        ...state,
        carbPercentage: action.payload,
        fatPercentage: 100 - action.payload,
      };
    default:
      return state;
  }
};
