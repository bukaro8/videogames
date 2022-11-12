import React from 'react';
// import { Link } from 'react-router-dom';
import videoBg from '../../assets/images/videoBg.mp4';
import styles from './LandingPage.module.css';
import Button from '../utilities/Button/Button';
import Navbar from '../Navbar/Navbar';
const LandingPage = () => {
  return (
    <section className={styles.mainContainer}>
      <Navbar />
      <video
        className={styles.videoBg}
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      />
      <article className={styles.innerContainer}>
        <h1 className={styles.title}>
          Videogames
          <br /> Library
        </h1>
        <a href='https://www.google.com/'>
          <Button color='light' text='EXPLORE' />
        </a>

        {/* <h2 className={styles.subtitle}>EXPLORE</h2> */}
      </article>
    </section>
  );
};

export default LandingPage;
