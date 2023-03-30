import { useCallback, useState } from 'react';
import './SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ toggleSearchShortMovies, setFilterOn, downloadMovies }) {
  const [searchFilm, setSearchFilm] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  function handleSearchName(e) {
    setSearchFilm(e.target.value);
    if (e.target.validity.valid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    downloadMovies(searchFilm);
  }

  const toggleFilter = useCallback(
    (e) => setFilterOn(e.target.checked),
    [setFilterOn]
  );

  return (
    <div className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <div className='search__container'>
          <input
            onChange={handleSearchName}
            value={searchFilm || ''}
            className='search__input'
            name='film'
            placeholder='Фильм'
            required
          ></input>
          <button
            type='submit'
            className={isFormValid ? 'search__button' : 'search__button'}
          ></button>
        </div>
        <FilterCheckbox
          onChange={toggleFilter}
          toggleSearchShortMovies={toggleSearchShortMovies}
        />
      </form>
    </div>
  );
}

export default SearchForm;
