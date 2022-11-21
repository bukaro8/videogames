import { FILTER_VIDEOGAME_BY_RATING } from '../action-types';

export const filterByRating = (payload) => {
  return async (dispatch, getState) => {
    dispatch({
      type: FILTER_VIDEOGAME_BY_RATING,
      payload,
    });
  };
};
