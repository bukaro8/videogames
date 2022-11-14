import back from '../../api/back.js';
import { LOAD_API_GAMES } from '../action-types';

export const loadApiGames = () => {
  return async (dispatch, getState) => {
    try {
      const response = await back.get('/videogames');
      dispatch({
        type: LOAD_API_GAMES,
        payload: response.data,
      });
    } catch (error) {
      return alert('An error has ocurred ' + error);
    }
  };
};
