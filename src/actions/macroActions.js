import { CHECKBOX_SELECTION } from './types';

export const checkboxSelection = (group, title) => {
  return {
    type: CHECKBOX_SELECTION,
    payload: { group, title },
  };
};
