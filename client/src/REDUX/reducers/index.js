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
  FILTER_VIDEOGAME_BY_CREATION,
  FILTER_VIDEOGAME_BY_GENRE,
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
        allVideogamesMirror: action.payload,
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
        foundVideogameByNameMirror: action.payload,
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
        allVideogames: sorted,
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
    case FILTER_VIDEOGAME_BY_CREATION:
      const allVideogames = state.allVideogames;
      const filtered =
        action.payload === 'all'
          ? allVideogames
          : action.payload === 'true'
          ? allVideogames.filter((el) => el.createdInDb === true)
          : allVideogames.filter((el) => el.createdInDb === false);

      return {
        ...state,
        allVideogames: filtered,
      };

    case FILTER_VIDEOGAME_BY_GENRE:
      let filterByGenre;
      if (action.payload !== 'all') {
        state.foundVideogameByName.length > 0
          ? (filterByGenre = state.foundVideogameByName.filter((ele) =>
              ele.genres.includes(action.payload)
            ))
          : (filterByGenre = state.allVideogames.filter((ele) =>
              ele.genres.includes(action.payload)
            ));
      } else {
        state.foundVideogameByName.length
          ? (filterByGenre = state.foundVideogameByName)
          : (filterByGenre = state.allVideogames);
      }
      // console.log(filterByGenre);
      return {
        ...state,
        allVideogamesMirror: filterByGenre,
        foundVideogameByNameMirror: filterByGenre,
      };

    default:
      return { ...state };
  }
};
export default rootReducer;
