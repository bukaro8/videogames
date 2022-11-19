import back from '../../api/back.js';
import { LOAD_API_GAMES } from '../action-types';

export const loadApiGames = () => {
  return async (dispatch, getState) => {
    try {
      const response = await back.get('/videogames');
      const games = response.data;
      games.forEach((el) => {
        if (typeof el.genres[0] !== 'string') {
          const objToArr = el.genres.map((el) => el.name);
          el.genres = objToArr;
        }
      });
      dispatch({
        type: LOAD_API_GAMES,
        payload: games,
      });
    } catch (error) {
      return alert('An error has ocurred ' + error);
    }
  };
};
