import back from '../../api/back.js';
import { GET_GENRES } from '../action-types';

export const getGenres = () => {
  return async (dispatch, getState) => {
    try {
      const response = await back.get('/genres');
      dispatch({
        type: GET_GENRES,
        payload: response.data,
      });
    } catch (error) {
      return alert(`An Error has ocurred ${error.message}`);
    }
  };
};
