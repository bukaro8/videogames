import { SORT_BY_NAME } from '../action-types';
export const sortByName = (payload) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: SORT_BY_NAME,
        payload: payload,
      });
    } catch (error) {
      return alert('An error has ocurred ' + error);
    }
  };
};
