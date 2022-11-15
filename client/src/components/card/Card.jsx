import React from 'react';
import style from './Card.module.css';
const Card = ({ name, image, genres }) => {
  return (
    <article className={style.mainContainer}>
      <img src={image} alt={image} />
      <div className={style.lowerContainer}>
        <h3 className={style.title}>{name}</h3>
        <div className={style.genresContianer}>
          {genres.map((el) => (
            <span>{el.name}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Card;
