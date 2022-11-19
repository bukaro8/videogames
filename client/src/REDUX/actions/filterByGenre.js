import { FILTER_VIDEOGAME_BY_GENRE } from '../action-types';

export const filterByGenre = (payload) => {
  return async (dispatch, getState) => {
    dispatch({
      type: FILTER_VIDEOGAME_BY_GENRE,
      payload,
    });
  };
};
