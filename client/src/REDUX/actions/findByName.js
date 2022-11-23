import back from '../../api/back.js';
import { FIND_BY_NAME } from '../action-types';

export const findByName = (name) => {
  return async (dispatch, getState) => {
    try {
      const response = await back.get(`/videogames?name=${name}`);
      const games = response.data;
      games.forEach((el) => {
        if (typeof el.genres[0] !== 'string') {
          const objToArr = el.genres.map((el) => el.name);
          el.genres = objToArr;
        }
      });
      dispatch({
        type: FIND_BY_NAME,
        payload: games,
      });
    } catch (error) {
      return alert('An error has ocurred ' + error);
    }
  };
};
