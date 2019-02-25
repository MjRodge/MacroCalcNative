import {
  CHECKBOX_SELECTION,
  SLIDER_VALUE_CHANGED,
  GENDER_SELECTION,
  CHANGED_TEXT,
  STORE_CALCULATED_MACROS,
} from './types';

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

export const genderSelection = payload => {
  return {
    type: GENDER_SELECTION,
    payload,
  };
};

export const changedText = (field, text) => {
  return {
    type: CHANGED_TEXT,
    payload: { field, text },
  };
};

export const storeCalculatedMacros = (
  restingCalories,
  totalCalories,
  goalCalories,
  totalProtein,
  totalFat,
  totalCarbs
) => {
  console.log({
    restingCalories,
    totalCalories,
    goalCalories,
    totalProtein,
    totalFat,
    totalCarbs,
  });
  return {
    type: STORE_CALCULATED_MACROS,
    payload: {
      restingCalories,
      totalCalories,
      goalCalories,
      totalProtein,
      totalFat,
      totalCarbs,
    },
  };
};
