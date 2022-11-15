import { CLEAR_SEARCH_BY_ID } from '../action-types';

export const clearSearchById = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: CLEAR_SEARCH_BY_ID,
      });
    } catch (error) {
      return alert('An error has ocurred ' + error);
    }
  };
};
