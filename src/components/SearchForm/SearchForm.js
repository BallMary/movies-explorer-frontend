import { useState } from 'react';
import './SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';

function SearchForm({ toggleSearchShortMovies, downloadMovies }) {
  const [searchMovie, setSearchMovies] = useState('');
  const location = useLocation();
  const valueInput =
    location.pathname === '/movies'
      ? JSON.parse(localStorage.getItem('searchMovie'))?.searchMovie
      : '';

  function handleSearchName(e) {
    localStorage.removeItem('searchMovie');
    setSearchMovies(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    downloadMovies(searchMovie);
  }

  return (
    <div className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <div className='search__container'>
          <input
            onChange={handleSearchName}
            value={valueInput || searchMovie}
            className='search__input'
            name='film'
            placeholder='Фильм'
            required
          ></input>
          <button type='submit' className='search__button'></button>
        </div>
        <FilterCheckbox toggleSearchShortMovies={toggleSearchShortMovies} />
      </form>
    </div>
  );
}

export default SearchForm;
