import {
  CHECKBOX_SELECTION,
  SLIDER_VALUE_CHANGED,
  GENDER_SELECTION,
  CHANGED_TEXT,
} from '../actions/types';

const initial_state = {
  activityLevel: 'light', //default value of activity radio group
  goal: 'maintain', //default value of goal radio group
  heightUnit: 'cm', //default value of height unit setting radio group
  weightUnit: 'kg', //default value of weight unit setting radio group
  fatPercentage: 20, //default value of fat/carb settings slider
  carbPercentage: 80, //default value of fat/carb settings slider
  gender: 'Male', //default gender choice
  age: 27,
  height: 180,
  weight: 72,
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
    case GENDER_SELECTION:
      return {
        ...state,
        gender: action.payload,
      };
    case CHANGED_TEXT:
      return {
        ...state,
        [action.payload.field]: action.payload.text,
      };
    default:
      return state;
  }
};
