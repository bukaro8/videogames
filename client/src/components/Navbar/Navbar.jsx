import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FilterSort from '../Filter-Sort/FilterSort';
import SearchBar from './SearchBar';
const Navbar = () => {
  const [searchbarActive, setSearchbarActive] = useState(true);
  const allGenres = useSelector((state) => state.genres);
  return (
    <nav className={styles.nav}>
      <ul>
        <NavLink className={styles.navLink} to='/home'>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt='logo' />
          </div>
        </NavLink>
        <NavLink className={styles.navLink} to='/videogames/form'>
          Add Game
        </NavLink>
        <li
          className={styles.navLink}
          onClick={() => setSearchbarActive(!searchbarActive)}
        >
          Find Game
        </li>
      </ul>
      <FilterSort genres={allGenres} />
      {searchbarActive && <SearchBar />}
    </nav>
  );
};

export default Navbar;
