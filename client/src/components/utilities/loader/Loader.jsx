import React from 'react';
import style from './Loader.module.css';
const Loader = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.loader7}></div>
        <h2 className={style.message}>Loading...</h2>
      </div>
    </div>
  );
};

export default Loader;
