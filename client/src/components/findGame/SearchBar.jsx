import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../REDUX/actions/index.js';
import styles from './SearchBar.module.css';
import Loader from '../utilities/loader/Loader.jsx';
import Paging from '../Paging.jsx';
import Card from '../card/Card.jsx';
const SearchBar = () => {
  const dispatch = useDispatch();
  const [gameToFind, setGameToFind] = useState('');
  // const foundGames = useSelector((state) => state.foundVideogameByName);
  const foundGamesMirror = useSelector(
    (state) => state.foundVideogameByNameMirror
  );
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.findByName(gameToFind));
    setLoading(true);
    setGameToFind('');
  };
  useEffect(() => {
    dispatch(actions.getGenres());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //*============<<paging>>==========
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(15); //*this is a fixed value
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const [loading, setLoading] = useState(false);
  const currentCards = foundGamesMirror.slice(firstCardIndex, lastCardIndex);
  const pageFn = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //*============<</paging>>==========
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
  return (
    <div className={styles.mainContainer}>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input
          type='text'
          placeholder='Game Name'
          onChange={(e) => setGameToFind(e.target.value)}
          value={gameToFind}
        />
      </form>
      <div>
        {foundGamesMirror.length === 0 && loading ? (
          <Loader />
        ) : (
          <>
            <section className={styles.cardsContainer}>{renderCards()}</section>
            <Paging
              cardsPerPage={cardsPerPage}
              allVideogames={foundGamesMirror.length}
              page={pageFn}
            />
          </>
        )}
      </div>
    </div> //*mainContainer
  );
};

export default SearchBar;
