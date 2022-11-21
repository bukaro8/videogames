/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import styles from './AddVideogame.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import platforms from './platforms.json';
import actions from '../../REDUX/actions/index.js'; //?addVideogame, getGenres
import Input from '../utilities/input/Input';
const AddVideogame = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  useEffect(() => {
    dispatch(actions.getGenres());
  }, []);
  const [values, setValues] = useState({
    name: '',
    background_image: '',
    release: '',
    description: '',
    rating: 0,
    platform: [],
    genres: [],
  });

  const genresList = () => {
    return genres.map((el) => (
      <option key={uniqid()} value={el.name}>
        {el.name}
      </option>
    ));
  };
  const platformList = () => {
    return platforms.map((el) => (
      <option key={uniqid()} value={el.name}>
        {el.name}
      </option>
    ));
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.mainContainer}>
      <h1>🥋 Add Videogame 🏂</h1>
      <form onSubmit={(e) => onSubmitForm(e)}>
        <input
          className='input'
          type='text'
          placeholder='Name'
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          value={values.name}
        />
        <input
          className='input'
          type='text'
          placeholder='Image URL'
          onChange={(e) =>
            setValues({ ...values, background_image: e.target.value })
          }
          value={values.background_image}
        />
        <input
          className='input'
          type='text'
          placeholder='Release'
          onChange={(e) => setValues({ ...values, release: e.target.value })}
          value={values.release}
        />
        <div className={styles.checkboxGenres}>
          {/* //?genres */}
          <div className={styles.genresDisplayContainer}>
            {values.genres?.map((el) => (
              <span key={uniqid()} className={styles.genreListItem}>
                {el}
              </span>
            ))}
          </div>

          <select
            onChange={(e) =>
              setValues({
                ...values,
                genres: [...values.genres, e.target.value],
              })
            }
          >
            <option>Select one or more</option>
            {genresList()}
          </select>
          {/* //?=====genres */}
          {/* //?platforms */}
          <select
            onChange={(e) =>
              setValues({
                ...values,
                platform: [...values.platform, e.target.value],
              })
            }
          >
            <option>Select one or more</option>
            {platformList()}
          </select>
          <div className={styles.genresDisplayContainer}>
            {values.platform?.map((el) => (
              <span key={uniqid()} className={styles.genreListItem}>
                {el}
              </span>
            ))}
          </div>
        </div>
        <input
          className='input'
          type='number'
          placeholder='Rating'
          onChange={(e) =>
            setValues({ ...values, rating: parseFloat(e.target.value) })
          }
          value={values.rating}
        />
        <textarea
          className='input'
          rows={7}
          placeholder='Description'
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
          value={values.description}
        />
      </form>
    </section>
  );
};

export default AddVideogame;
