import back from '../../api/back.js';
import { FIND_BY_ID } from '../action-types';

export const findById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await back.get(`/videogame/${id}`);
      dispatch({
        type: FIND_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      return alert(`An Error has ocurred ${error.message}`);
    }
  };
};
