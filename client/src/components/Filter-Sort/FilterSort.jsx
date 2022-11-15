import React from 'react';
import { useSelector } from 'react-redux';
import style from './FilterSort.module.css';

const FilterSort = ({ genres }) => {
  const genresList = () => {
    return genres.map((el, index) => (
      <option key={`${index}genres`} value={el.name}>
        {el.name}
      </option>
    ));
  };

  return (
    <section className={style.mainContainer}>
      <article>
        <label className={style.label}>Sort by Name:</label>
        <select name='alphabetically'>
          <option value='asc'>A-Z</option>
          <option value='desc'>Z-A</option>
        </select>
      </article>

      <article>
        <div>
          <label className={style.label}>Sort by Rating:</label>
          <select name='rating'>
            <option value='asc'>ASC</option>
            <option value='desc'>DESC</option>
          </select>
        </div>
      </article>

      <article>
        <label className={style.label}>Filter by genre:</label>
        <select name='genre'>{genresList()}</select>
      </article>
    </section>
  );
};

export default FilterSort;
