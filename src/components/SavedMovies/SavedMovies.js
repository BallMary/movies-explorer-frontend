import React from 'react';
import './SavedMovies';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
  return (
    <div className='saved-movies'>
      <SearchForm />
      <div className='saved-movies__container'>
        <div className='movie'>
          <div className='movie__image' alt='Постер к фильму' />
          <div className='movie__container'>
            <h2 className='movie__title'>33 слова о дизайне</h2>
            <div className='movie__like-container'>
              <button className='movie__button-delete' type='button' />
            </div>
          </div>
          <p className='movie__duration'>1ч 42м</p>
        </div>
        <div className='movie'>
          <div className='movie__image' alt='Постер к фильму' />
          <div className='movie__container'>
            <h2 className='movie__title'>Киноальманах «100 лет дизайна»</h2>
            <div className='movie__like-container'>
              <button className='movie__button-delete' type='button' />
            </div>
          </div>
          <p className='movie__duration'>1ч 42м</p>
        </div>
        <div className='movie'>
          <div className='movie__image' alt='Постер к фильму' />
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
