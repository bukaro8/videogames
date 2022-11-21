import { loadApiGames } from './loadApiGames.js';
import { addVideogame } from './addVideogame.js';
import { findByName } from './findByName.js';
import { findById } from './findById.js';
import { getGenres } from './getGenres.js';
import { sortByRating } from './sortByRating.js';
import { sortByName } from './sortByName.js';
import { clearSearchByName } from './clearSearchByName.js';
import { clearSearchById } from './clearSearchById.js';
import { filterByCreation } from './filterByCreation.js';
import { filterByGenre } from './filterByGenre.js';
import { filterByRating } from './filterByRating.js';
const actions = {
  loadApiGames,
  addVideogame,
  findByName,
  findById,
  getGenres,
  sortByRating,
  sortByName,
  clearSearchByName,
  clearSearchById,
  filterByCreation,
  filterByGenre,
  filterByRating,
};
export default actions;
