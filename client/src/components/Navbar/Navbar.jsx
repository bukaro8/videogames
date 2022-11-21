import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FilterSort from '../Filter-Sort/FilterSort';

const Navbar = ({ trigger }) => {
  const allGenres = useSelector((state) => state.genres);
  return (
    <div className={styles.mainContainer}>
      <nav className={styles.nav}>
        <NavLink className={styles.navLink} to='/home'>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt='logo' />
          </div>
        </NavLink>
        <ul>
          <NavLink
            style={(isActive) => ({
              borderBottom: isActive && '1px solid white',
            })}
            className={styles.navLink}
            to='/home'
          >
            Home
          </NavLink>
          <NavLink
            style={(isActive) => ({
              borderBottom: isActive && '1px solid white',
            })}
            className={styles.navLink}
            to='/videogames/form'
          >
            Add Game
          </NavLink>
          <NavLink
            style={(isActive) => ({
              borderBottom: isActive && '1px solid white',
            })}
            className={styles.navLink}
            to='/videogames/find'
          >
            Find Game
          </NavLink>
        </ul>
      </nav>
      <FilterSort genres={allGenres} trigger={trigger} />
    </div>
  );
};

export default Navbar;
