import React from 'react';
import './ButtonMore';

function ButtonMore({ handleMoreMovies }) {
  return (
    <div className='movies__container' onClick={handleMoreMovies}>
      <button className='movies__button-more'>Ещё</button>
    </div>
  );
}

export default ButtonMore;
