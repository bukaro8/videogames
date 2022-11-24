/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../REDUX/actions';
import styles from './CardDetail.module.css';
import Button from '../utilities/Button/Button';
const getGenres = (str) => {
  return str.substring(1).split(',');
};
const CardDetail = ({ id }) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.foundVideogameById);
  const genres = getGenres(id.location.search);

  useEffect(() => {
    dispatch(actions.findById(id.match.params.id));
  }, [dispatch]);

  return (
    <section
      className={styles.mainContainer}
      style={{ backgroundImage: `url('${game.background_image}')` }}
    >
      <article className={styles.innerContainer}>
        <h2 className={styles.title}>{game.name}</h2>

        <div className={styles.innerDetailsContainer}>
          {/* //?platforms */}
          <div className={styles.genresContainer}>
            <div className={styles.subtitle}>Platforms</div>
            {game.platforms?.map((el) => (
              <div key={uniqid()} className={styles.genreName}>
                {el}
              </div>
            ))}
          </div>

          {/* //?release */}
          <div className={styles.genresContainer}>
            <div className={styles.subtitle}>Released</div>
            <div className={styles.genreName}>{game.released}</div>
          </div>

          {/* //?genres */}
          <div className={styles.genresContainer}>
            <div className={styles.subtitle}>Genres</div>
            {genres?.map((el) => (
              <div key={uniqid()} className={styles.genreName}>
                {el}
              </div>
            ))}
          </div>
        </div>
        <article
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: game.description }}
        ></article>
        {/* <picture>
          <img src={game.background_image} alt='' />
        </picture> */}

        <Link to='/home'>
          <Button color='light' text='Back' />
        </Link>
      </article>
    </section>
  );
};

export default CardDetail;
