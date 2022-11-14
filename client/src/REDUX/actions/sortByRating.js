import { SORT_BY_RATING } from '../action-types';
export const sortByRating = (payload) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: SORT_BY_RATING,
        payload: payload,
      });
    } catch (error) {
      return alert('An error has ocurred ' + error);
    }
  };
};
