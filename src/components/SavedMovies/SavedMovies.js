import React from 'react';
import './SavedMovies';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
  loading,
  renderedArrayMovies,
  wasSearched,
  removeLiked,
  toggleSearchShortMovies,
  downloadMovies,
  countedList,
}) {
  return (
    <div className='saved-movies'>
      <SearchForm
        toggleSearchShortMovies={toggleSearchShortMovies}
        downloadMovies={downloadMovies}
      />
      <Preloader loading={loading} />
      {renderedArrayMovies.length === 0 && wasSearched && !loading && (
        <p className='movies__notfound'>Ничего не найдено</p>
      )}
      <MoviesCardList
        renderedArrayMovies={renderedArrayMovies}
        toggleSearchShortMovies={toggleSearchShortMovies}
        removeLiked={removeLiked}
        countedList={countedList}
      />
    </div>
  );
}

export default SavedMovies;
