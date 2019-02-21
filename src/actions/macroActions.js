import { CHECKBOX_SELECTION, SLIDER_VALUE_CHANGED } from './types';

export const checkboxSelection = (group, title) => {
  return {
    type: CHECKBOX_SELECTION,
    payload: { group, title },
  };
};

export const sliderValueChanged = payload => {
  return {
    type: SLIDER_VALUE_CHANGED,
    payload,
  };
};
