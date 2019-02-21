import { CHECKBOX_SELECTION } from '../actions/types';

const initial_state = {
  activityLevel: 'sedentary', //default value of activity radio group
  goal: 'lose', //default value of goal radio group
  heightUnit: 'cm', //default value of height unit setting radio group
  weightUnit: 'kg', //default value of weight unit setting radio group
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case CHECKBOX_SELECTION:
      console.log(action.payload);
      return { ...state, [action.payload.group]: action.payload.title };
    default:
      console.log('reducer attached');
      return state;
  }
};
