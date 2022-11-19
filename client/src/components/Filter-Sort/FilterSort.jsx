import React from 'react';
import { useDispatch } from 'react-redux';
import style from './FilterSort.module.css';
import actions from '../../REDUX/actions/index.js';

const FilterSort = ({ genres }) => {
  const dispatch = useDispatch();
  const genresList = () => {
    return genres.map((el, index) => (
      <option key={`${index}genres`} value={el.name}>
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
  return (
    <section className={style.mainContainer}>
      <article>
        <label className={style.label}>Sort by Name:</label>
        <select name='alphabetically'>
          <option value='none'>--</option>
          <option value='asc'>A-Z</option>
          <option value='desc'>Z-A</option>
        </select>
      </article>

      <article>
        <div>
          <label className={style.label}>Sort by Rating:</label>
          <select name='rating'>
            <option value='none'>--</option>
            <option value='asc'>ASC</option>
            <option value='desc'>DESC</option>
          </select>
        </div>
      </article>

      <article>
        <label className={style.label}>Filter by Creation:</label>
        <select name='creation' onChange={(e) => handleOnChangeCreation(e)}>
          <option value='none'>--</option>
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
