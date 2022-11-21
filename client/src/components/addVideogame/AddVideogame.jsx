/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import styles from './AddVideogame.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import platforms from './platforms.json';
import actions from '../../REDUX/actions/index.js'; //?addVideogame, getGenres

const checkIfValidDate = (str) => {
  // regex to check if string is valid date
  const dateRegexp =
    /^[1-2][089]\d{2}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;
  return dateRegexp.test(str);
};

const isURL = (str) => {
  var pattern = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;
  return pattern.test(str);
};

const containsSpecialChars = (str) => {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
};
const validate = (values) => {
  let error = {};
  if (!values.name) {
    error.name = 'Name is required';
  } else if (containsSpecialChars(values.name)) {
    error.name = 'Name does not allow special characters';
  } else if (values.name.trim() === '') {
    error.name = 'Name can not be empty';
  }
  if (!values.description) {
    error.description = 'Description is required';
  } else if (values.description.length > 200) {
    error.description = 'Description can only have max 200 characters';
  }
  if (checkIfValidDate(values.released) === false) {
    error.released = 'Invalid date';
  }
  if (values.rating > 5) {
    error.rating = 'Rating must be lower than 5';
  } else if (values.rating < 0) {
    error.rating = 'Rating must be 1 or over';
  } else if (isNaN(parseInt(values.rating))) {
    error.rating = 'only Numbers allowed';
  }
  if (values.image) {
    if (isURL(values.image) === false) {
      error.image = 'Invalid URL';
    }
  }
  if (values.genres.length < 1) {
    error.genres = 'You have to choose at least one genre';
  }
  if (values.platforms.length < 1) {
    error.platforms = 'You have to choose at least one platform';
  }

  return error;
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
    console.log(values);
    dispatch(actions.addVideogame(values));
    history.push('/home');
  };

  return (
    <section className={styles.mainContainer}>
      <h1> Add Videogame </h1>
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
            <label className={styles.platformLabel}>Genres</label>
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
          </div>
        </div>

        {/* //?=====genres */}
        {/* //?platforms */}
        <div className={styles.genresDisplayContainer}>
          <label className={styles.platformLabel}>Platforms</label>
          <div className={styles.genresDisplayContainer}>
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
            {values.platform?.map((el) => (
              <span key={uniqid()} className={styles.genreListItem}>
                {el}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.ratingContainer}>
          <label>Rating</label>
          <input
            style={{ width: '30%' }}
            className='input inputRating'
            type='number'
            placeholder='Rating'
            onChange={(e) =>
              setValues({ ...values, rating: parseFloat(e.target.value) })
            }
            value={values.rating}
          />
        </div>
        <textarea
          className='input'
          rows={4}
          placeholder='Description'
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
          value={values.description}
        />
        <button className={styles.btn} type='submit'>
          Add Game
        </button>
      </form>
    </section>
  );
};

export default AddVideogame;
