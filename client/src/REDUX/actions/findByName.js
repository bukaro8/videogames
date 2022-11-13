import back from '../../api/back.js';
import { FIND_BY_NAME } from '../action-types';

export const findByName = (name) => {
  return async (dispatch, getState) => {
    try {
      const response = await back.get('/videogames');
      dispatch({
        type: FIND_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      return alert('An error has ocurred ' + error);
    }
  };
};
