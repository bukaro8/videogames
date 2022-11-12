import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';
const Navbar = () => {
  return (
    <nav>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt='logo' />
      </div>
    </nav>
  );
};

export default Navbar;
