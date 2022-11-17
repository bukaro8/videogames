import React from 'react';
import Button from './utilities/Button/Button';
import uniqid from 'uniqid';
const Paging = ({ cardsPerPage, allVideogames, pageFn }) => {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(allVideogames / cardsPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <nav>
      <ul>
        {pageNumbers?.map((number) => (
          <li key={uniqid()}>
            <Button color='light' text={number} action={() => pageFn(number)} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paging;
