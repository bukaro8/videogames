import {
  LOAD_API_GAMES,
  ADD_VIDEOGAME,
  FIND_BY_NAME,
  FIND_BY_ID,
  GET_GENRES,
  SORT_BY_RATING,
  SORT_BY_NAME,
  CLEAR_SEARCH_BY_NAME,
  CLEAR_SEARCH_BY_ID,
} from '../action-types/index.js';

const initialState = {
  allVideogames: [],
  allVideogamesMirror: [],
  genres: [],
  addedVideogame: {},
  videogame: {},
  foundVideogameByName: [],
  foundVideogameByNameMirror: [],
  foundVideogameById: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_API_GAMES:
      return {
        ...state,
        allVideogames: action.payload,
      };
    case ADD_VIDEOGAME:
      return {
        ...state,
        addedVideogame: action.payload,
      };
    case FIND_BY_NAME:
      return {
        ...state,
        foundVideogameByName: action.payload,
      };
    case FIND_BY_ID:
      return {
        ...state,
        foundVideogameById: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case SORT_BY_RATING:
      let sortedByRating;
      if (action.payload === 'asc') {
        state.foundVideogameByName
          ? (sortedByRating = [...state.foundVideogameByName].sort(
              (a, b) => b.rating - a.rating
            ))
          : (sortedByRating = [...state.allVideogames].sort(
              (a, b) => b.rating - a.rating
            ));
      }
      if (action.payload === 'desc') {
        state.foundVideogameByName
          ? (sortedByRating = [...state.foundVideogameByName].sort(
              (a, b) => a.rating - b.rating
            ))
          : (sortedByRating = [...state.allVideogames].sort(
              (a, b) => a.rating - b.rating
            ));
      }
      return {
        ...state,
        allVideogamesMirror: sortedByRating,
        foundVideogameByNameMirror: sortedByRating,
      };

    case SORT_BY_NAME:
      let sorted;
      if (action.payload === 'asc') {
        state.foundVideogameByName
          ? (sorted = [...state.foundVideogameByName].sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              }
              return 0;
            }))
          : (sorted = [...state.allVideogames].sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              }
              return 0;
            }));
      }
      if (action.payload === 'desc') {
        state.foundVideogameByName
          ? (sorted = [...state.foundVideogameByName].sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1;
              }
              return 0;
            }))
          : (sorted = [...state.allVideogames].sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1;
              }
              return 0;
            }));
      }
      return {
        ...state,
        allVideogamesMirror: sorted,
        foundVideogameByNameMirror: sorted,
      };
    case CLEAR_SEARCH_BY_NAME:
      return {
        ...state,
        foundVideogameByNameMirror: [],
        foundVideogameByName: [],
        foundVideogameById: [],
      };
    case CLEAR_SEARCH_BY_ID:
      return {
        ...state,
        foundVideogameById: [],
      };

    default:
      return { ...state };
  }
};
export default rootReducer;
