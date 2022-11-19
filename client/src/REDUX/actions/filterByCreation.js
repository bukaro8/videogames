import { FILTER_VIDEOGAME_BY_CREATION } from '../action-types';

export const filterByCreation = (payload) => {
  return async (dispatch, getState) => {
    dispatch({
      type: FILTER_VIDEOGAME_BY_CREATION,
      payload,
    });
  };
};
