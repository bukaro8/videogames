import React from 'react';
import uniqid from 'uniqid';
import { useDispatch } from 'react-redux';
import style from './FilterSort.module.css';
import actions from '../../REDUX/actions/index.js';
const FilterSort = ({ genres, trigger }) => {
  const dispatch = useDispatch();
  const genresList = () => {
    return genres.map((el) => (
      <option key={uniqid()} value={el.name}>
        {el.name}
      </option>
    ));
  };

  const handleOnChangeCreation = (e) => {
    e.preventDefault();
    dispatch(actions.filterByCreation(e.target.value));
  };
  const handleOnChangeGenre = (e) => {
    e.preventDefault();
    dispatch(actions.filterByGenre(e.target.value));
  };
  const handleOnChangeRating = (e) => {
    e.preventDefault();
    dispatch(actions.filterByRating(e.target.value));
  };
  const handleOnChangeAlpha = (e) => {
    e.preventDefault();
    trigger(e.target.value);
    dispatch(actions.sortByName(e.target.value));
  };

  return (
    <section className={style.mainContainer}>
      <article>
        <label className={style.label}>Sort by Name:</label>
        <select name='alphabetically' onChange={(e) => handleOnChangeAlpha(e)}>
          <option value='none'>--</option>
          <option value='asc'>A-Z</option>
          <option value='desc'>Z-A</option>
        </select>
      </article>

      <article>
        <div>
          <label className={style.label}>Sort by Rating:</label>
          <select name='rating' onChange={(e) => handleOnChangeRating(e)}>
            <option value='none'>--</option>
            <option value='asc'>ASC</option>
            <option value='desc'>DESC</option>
          </select>
        </div>
      </article>

      <article>
        <label className={style.label}>Filter by Creation:</label>
        <select name='creation' onChange={(e) => handleOnChangeCreation(e)}>
          <option value='all'>--</option>
          <option value='all'>All</option>
          <option value='true'>Created on Db</option>
          <option value='false'>Load from api</option>
        </select>
      </article>

      <article>
        <label className={style.label}>Filter by genre:</label>
        <select name='genre' onChange={(e) => handleOnChangeGenre(e)}>
          <option value='all'>All</option>
          {genresList()}
        </select>
      </article>
    </section>
  );
};

export default FilterSort;
