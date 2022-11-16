/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../REDUX/actions/index.js';

import Card from '../card/Card.jsx';
import style from './Home.module.css';
import Loader from '../utilities/loader/Loader.jsx';

const Home = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.allVideogames);

  const renderCards = () => {
    return allVideogames.map((el) => (
      <Card
        key={el.id}
        id={el.id}
        name={el.name}
        image={el.background_image}
        genres={el.genres}
      />
    ));
  };
  useEffect(() => {
    dispatch(actions.loadApiGames());
    dispatch(actions.getGenres());
  }, []);

  return (
    <div className={style.mainContainer}>
      {allVideogames.length === 0 ? (
        <Loader />
      ) : (
        <section className={style.cardsContainer}>{renderCards()}</section>
      )}
    </div>
  );
};

export default Home;
