import './FilterCheckbox';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
function FilterCheckbox({ toggleSearchShortMovies }) {
  const location = useLocation();
  const [onlyShortMovies, setOnlyShortMovies] = useState(false);
  const toggleView =
    location.pathname === '/movies'
      ? JSON.parse(localStorage.getItem('onlyShortMovies')).onlyShortMovies
      : JSON.parse(localStorage.getItem('onlyShortSavedMovies'))
          .onlyShortMovies;

  function onChange() {
    if (location.pathname === '/movies') {
      setOnlyShortMovies(!onlyShortMovies);
      localStorage.setItem(
        'onlyShortMovies',
        JSON.stringify({
          onlyShortMovies: !onlyShortMovies,
        })
      );
    } else {
      setOnlyShortMovies(!onlyShortMovies);
      localStorage.setItem(
        'onlyShortSavedMovies',
        JSON.stringify({
          onlyShortMovies: !onlyShortMovies,
        })
      );
    }
    toggleSearchShortMovies();
  }

  return (
    <div className='checkbox'>
      <p className='checkbox__text'>Короткометражки</p>
      <label className={'checkbox__label'}>
        <input
          className={'checkbox__button'}
          type='checkbox'
          onChange={onChange}
          checked={toggleView}
        />
      </label>
    </div>
  );
}

export default FilterCheckbox;
