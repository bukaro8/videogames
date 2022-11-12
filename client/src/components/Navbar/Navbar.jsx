import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt='logo' />
      </div>
      <ul>
        <Link to=''>Home</Link>
        <Link to=''>Add Videogame</Link>
        <Link to=''>find Videogame</Link>
        <Link to=''>edit Videogame</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
