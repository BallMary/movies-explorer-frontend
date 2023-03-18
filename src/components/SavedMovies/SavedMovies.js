import React from 'react';
import './SavedMovies';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
  return (
    <div className='saved-movies'>
      <SearchForm />
      <div className='saved-movies__container'>
        <div className='movie'>
          <img
            src='https://i.pinimg.com/originals/e1/28/c8/e128c81d0b00980cc9c9d0f3d768f4ed.jpg'
            className='movie__image'
            alt='Постер к фильму'
          />
          <div className='movie__container'>
            <h2 className='movie__title'>33 слова о дизайне</h2>
            <div className='movie__like-container'>
              <button className='movie__button-delete' type='button' />
            </div>
          </div>
          <p className='movie__duration'>1ч 42м</p>
        </div>
        <div className='movie'>
          <img
            src='https://i.pinimg.com/originals/a6/fc/f2/a6fcf2c61043bc8f1d495e07281064bb.jpg'
            className='movie__image'
            alt='Постер к фильму'
          />
          <div className='movie__container'>
            <h2 className='movie__title'>Киноальманах «100 лет дизайна»</h2>
            <div className='movie__like-container'>
              <button className='movie__button-delete' type='button' />
            </div>
          </div>
          <p className='movie__duration'>1ч 42м</p>
        </div>
        <div className='movie'>
          <img
            src='https://i.pinimg.com/originals/ad/5c/1e/ad5c1e565ff64f3ed13e60d76da62716.jpg'
            className='movie__image'
            alt='Постер к фильму'
          />
          <div className='movie__container'>
            <h2 className='movie__title'>В погоне за Бенкси</h2>
            <div className='movie__like-container'>
              <button className='movie__button-delete' type='button' />
            </div>
          </div>
          <p className='movie__duration'>1ч 42м</p>
        </div>
      </div>
    </div>
  );
}

export default SavedMovies;
