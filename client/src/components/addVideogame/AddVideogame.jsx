/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styles from './AddVideogame.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
          onChange={(e) => setValues(e.target.value)}
          value={values.name}
        />
      </form>
    </section>
  );
};

export default AddVideogame;
