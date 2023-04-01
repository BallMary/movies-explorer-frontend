import './Movies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ButtonMore from '../ButtonMore/ButtonMore';
import { useState, useEffect } from 'react';

function Movies({
  downloadMovies,
  putLiked,
  removeLiked,
  setInput,
  loading,
  toggleSearchShortMovies,
  wasSearched,
  renderedArrayMovies,
}) {
  let [number, setNumber] = useState(getInitialNumber());
  let countedList = renderedArrayMovies.slice(0, number);
  let resizeTimeout;

  useEffect(() => {
    window.addEventListener('resize', resizeThrottler);
    return () => window.removeEventListener('resize', resizeThrottler);
  });

  const resizeThrottler = () => {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;
        setNumber(getInitialNumber());
      }, 2000);
    }
  };

  function getInitialNumber() {
    if (window.innerWidth >= 1201) {
      return 12;
    } else if (window.innerWidth >= 768) {
      return 8;
    } else {
      return 5;
    }
  }

  function handleMoreMovies() {
    if (window.innerWidth >= 1280) {
      setNumber((number += 4));
    } else if (window.innerWidth >= 1020) {
      setNumber((number += 3));
    } else {
      setNumber((number += 2));
    }
    countedList = renderedArrayMovies.slice(0, number);
  }

  return (
    <div className='movies'>
      <SearchForm
        downloadMovies={downloadMovies}
        setInput={setInput}
        toggleSearchShortMovies={toggleSearchShortMovies}
      />

      <Preloader loading={loading} />

      {renderedArrayMovies.length === 0 && wasSearched && !loading && (
        <p className='movies__notfound'>Ничего не найдено</p>
      )}

      <MoviesCardList
        renderedArrayMovies={countedList}
        putLiked={putLiked}
        removeLiked={removeLiked}
      />
      {renderedArrayMovies.length > countedList.length ? (
        <ButtonMore handleMoreMovies={handleMoreMovies} />
      ) : (
        ''
      )}
    </div>
  );
}

export default Movies;
