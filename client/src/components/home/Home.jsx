import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadApiGames } from '../../REDUX/actions.index.js';
import style from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.allVideogames);
  useEffect(() => {}, []);
  return (
    <div>
      <h1 className={style.title}>im the title</h1>
    </div>
  );
};

export default Home;
