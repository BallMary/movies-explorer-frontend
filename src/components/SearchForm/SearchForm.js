import React from 'react';
import './SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className='search'>
      <form className='search__form'>
        <div className='search__container'>
          <input
            className='search__input'
            name='film'
            placeholder='Фильм'
            required
          ></input>
          <button type='button' className='search__button'></button>
        </div>
        <FilterCheckbox />
      </form>
    </div>
  );
}

export default SearchForm;
