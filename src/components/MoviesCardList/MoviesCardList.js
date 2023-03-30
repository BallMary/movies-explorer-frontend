import './MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ putLiked, removeLiked, renderedArrayMovies }) {
  const storageSavedMovies = JSON.parse(
    localStorage.getItem('SavedMoviesArray')
  )?.savedMovies;

  return (
    <div className='movies-list'>
      {renderedArrayMovies.map((item, index) => (
        <MoviesCard
          key={index}
          data={item}
          isSaved={
            !storageSavedMovies?.some((movie) => movie.nameRU === item.nameRU)
              ? false
              : true
          }
          putLiked={putLiked}
          removeLiked={removeLiked}
        />
      ))}
    </div>
  );
}

export default MoviesCardList;
