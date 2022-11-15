/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../REDUX/actions/index.js';
import style from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.allVideogames);

  useEffect(() => {
    dispatch(actions.loadApiGames());
  }, []);
  const renderingVideogames = () => {
    return allVideogames.map((el, index) => <div></div>);
  };
  return (
    <div>
      <h1 className={style.title}>im the title</h1>
      <div>{renderingVideogames()}</div>
    </div>
  );
};

export default Home;
