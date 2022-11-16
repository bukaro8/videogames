import React from 'react';
import style from './Card.module.css';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
const Card = ({ name, image, genres, id }) => {
  return (
    <Link to={`videogame/${id}`}>
      <article className={style.mainContainer}>
        <picture>
          <img src={image} alt={image} />
        </picture>
        <div className={style.overlay}>
          <h3 className={style.title}>{name}</h3>
          <div className={style.genresContianer}>
            {genres.map((el) => (
              <span key={uniqid()}>{el}</span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Card;
