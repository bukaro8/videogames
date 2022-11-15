import React from 'react';
import { Link } from 'react-router-dom';
import videoBg from '../../assets/images/videoBg.mp4';
import styles from './LandingPage.module.css';
import Button from '../utilities/Button/Button';

const LandingPage = () => {
  return (
    <section className={styles.mainContainer}>
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
        <Link to='/home'>
          <Button color='light' text='EXPLORE' />
        </Link>

        {/* <h2 className={styles.subtitle}>EXPLORE</h2> */}
      </article>
    </section>
  );
};

export default LandingPage;
