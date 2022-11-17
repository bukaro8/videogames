import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [gameToFind, setGameToFind] = useState('');
  const setName = (e) => {
    e.preventDefault();
    alert(gameToFind);
    setGameToFind('');
  };
  return (
    <form onSubmit={(e) => setName(e)} className={styles.mainContainer}>
      <input
        type='text'
        placeholder='Game Name'
        onChange={(e) => setGameToFind(e.target.value)}
        value={gameToFind}
      />
    </form>
  );
};

export default SearchBar;
