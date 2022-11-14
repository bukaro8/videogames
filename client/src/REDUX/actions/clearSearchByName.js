import { CLEAR_SEARCH_BY_NAME } from '../action-types';

export const clearSearchByName = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: CLEAR_SEARCH_BY_NAME,
      });
    } catch (error) {
      return alert('An error has ocurred ' + error);
    }
  };
};
