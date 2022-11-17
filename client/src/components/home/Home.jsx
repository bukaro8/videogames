/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../REDUX/actions/index.js';

import Card from '../card/Card.jsx';
import style from './Home.module.css';
import Loader from '../utilities/loader/Loader.jsx';
import Button from '../utilities/Button/Button.jsx';
import Paging from '../Paging.jsx';
const Home = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.allVideogames);
  //*============<<paging>>==========
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(15); //*this is a fixed value
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = allVideogames.slice(firstCardIndex, lastCardIndex);
  const pageFn = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //*============<</paging>>==========

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(actions.loadApiGames());
    dispatch(actions.clearSearchByName());
  };
  const renderCards = () => {
    return currentCards?.map((el) => (
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
    <div>
      {allVideogames.length === 0 ? (
        <Loader />
      ) : (
        <div className={style.mainContainer}>
          <Button color='info' text='Reset' action={(e) => handleClick(e)} />
          <section className={style.cardsContainer}>{renderCards()}</section>
          <Paging
            cardsPerPage={cardsPerPage}
            allVideogames={allVideogames.length}
            page={pageFn}
          />
          {console.log(currentPage)}
        </div>
      )}
    </div>
  );
};

export default Home;
