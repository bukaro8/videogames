/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import styles from './AddVideogame.module.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import platforms from './platforms.json';
import actions from '../../REDUX/actions/index.js'; //?addVideogame, getGenres

const checkIfValidDate = (str) => {
  // regex to check if string is valid date
  const dateRegexp =
    /^[1-2][089]\d{2}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;
  return dateRegexp.test(str);
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.trim() === '') {
    errors.name = 'Name can not be empty';
  }
  if (!values.description) {
    errors.description = 'Description is required';
  } else if (values.description.length > 200) {
    errors.description = 'Description can only have max 200 characters';
  }
  if (checkIfValidDate(values.released) === false) {
    errors.released = 'Invalid date ';
  }
  if (values.rating > 5) {
    errors.rating = 'Rating must be lower than 5';
  } else if (values.rating <= 0) {
    errors.rating = 'Rating must be 1 or over';
  } else if (isNaN(parseInt(values.rating))) {
    errors.rating = 'only Numbers allowed';
  }
  if (!values.background_image) {
    errors.background_image = 'Missing URL';
  }
  if (values.genres.length < 1) {
    errors.genres = 'You have to choose at least one genre';
  }
  if (values.platform.length < 1) {
    errors.platforms = 'You have to choose at least one platform';
  }

  return errors;
};

const AddVideogame = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector((state) => state.genres);
  useEffect(() => {
    dispatch(actions.getGenres());
  }, []);
  const initialValues = {
    name: '',
    background_image: '',
    released: '',
    description: '',
    rating: 0,
    platform: [],
    genres: [],
  };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
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
    dispatch(actions.addVideogame(values));
    history.push('/home');
  };
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...values,
        [e.target.name]: e.target.value,
      })
    );
  };
  return (
    <section className={styles.mainContainer}>
      <h1> Add Videogame </h1>
      <form onSubmit={(e) => onSubmitForm(e)}>
        <input
          name='name'
          className='input'
          type='text'
          placeholder='Name'
          onChange={(e) => handleChange(e)}
          value={values.name}
          autocomplete='off'
          required
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
        <input
          name='background_image'
          className='input'
          type='text'
          placeholder='Image URL'
          onChange={(e) => handleChange(e)}
          value={values.background_image}
          required
        />
        {errors.background_image && (
          <p className={styles.error}>{errors.background_image}</p>
        )}
        <input
          name='released'
          className='input'
          type='text'
          placeholder='Release Date yyyy-mm-dd'
          onChange={(e) => handleChange(e)}
          value={values.released}
          required
        />
        {errors.released && <p className={styles.error}>{errors.released}</p>}

        <div className={styles.checkboxGenres}>
          {/* //?genres */}
          <div className={styles.genresDisplayContainer}>
            <label className={styles.platformLabel}>Genres</label>
            <div className={styles.genresDisplayContainer}>
              {values.genres?.map((el) => (
                <span key={uniqid()} className={styles.genreListItem}>
                  {el}
                </span>
              ))}
            </div>

            <select
              name='genres'
              onChange={(e) =>
                setValues({
                  ...values,
                  genres: [...values.genres, e.target.value],
                })
              }
              required
            >
              <option>Select one or more</option>
              {genresList()}
            </select>
            {/* {errors.genres && <p className={styles.error}>{errors.genres}</p>} */}
          </div>
        </div>

        {/* //?=====genres */}

        {/* //?platforms */}
        <div className={styles.genresDisplayContainer}>
          <label className={styles.platformLabel}>Platforms</label>
          <div className={styles.genresDisplayContainer}>
            <select
              name='platform'
              onChange={(e) =>
                setValues({
                  ...values,
                  platform: [...values.platform, e.target.value],
                })
              }
              required
            >
              <option>Select one or more</option>
              {platformList()}
            </select>
            {values.platform?.map((el) => (
              <span key={uniqid()} className={styles.genreListItem}>
                {el}
              </span>
            ))}
            {errors.platform && (
              <p className={styles.error}>{errors.platform}</p>
            )}
          </div>
        </div>
        <div className={styles.ratingContainer}>
          <label>Rating</label>
          <input
            name='rating'
            style={{ width: '30%' }}
            className='input inputRating'
            type='number'
            placeholder='Rating'
            onChange={(e) => handleChange(e)}
            value={values.rating}
            required
          />
          {errors.rating && <p className={styles.error}>{errors.rating}</p>}
        </div>
        <textarea
          name='description'
          className='input'
          rows={4}
          placeholder='Description'
          onChange={(e) => handleChange(e)}
          value={values.description}
          required
        />
        {errors.description && (
          <p className={styles.error}>{errors.description}</p>
        )}
        <button className={styles.btn} type='submit'>
          Add Game
        </button>
      </form>
    </section>
  );
};

export default AddVideogame;
