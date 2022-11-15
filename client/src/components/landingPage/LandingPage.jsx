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
      </article>
      <div className={styles.buttonContainer}>
        <Link to='/home'>
          <Button color='light' text='EXPLORE' />
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
