import './FilterCheckbox';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
function FilterCheckbox({ toggleSearchShortMovies, value }) {
  const location = useLocation();
  const [onlyShortMovies, setOnlyShortMovies] = useState(false);

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
      <label className='checkbox__label'>
        <input
          className='checkbox__button'
          type='checkbox'
          checked={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FilterCheckbox;
