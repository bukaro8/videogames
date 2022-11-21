import back from '../../api/back.js';
import { ADD_VIDEOGAME } from '../action-types';

export const addVideogame = (values) => {
  return async (dispatch, getState) => {
    try {
      // if(values.name)
      const response = await back.post('/videogames', values);
      dispatch({
        type: ADD_VIDEOGAME,
        payload: response.data,
      });
    } catch (error) {
      return alert('An Error has ocurred ' + error);
    }
  };
};
