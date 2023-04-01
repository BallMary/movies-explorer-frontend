import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ data, putLiked, removeLiked, isSaved }) {
  const location = useLocation();
  const storageSavedMovies = JSON.parse(
    localStorage.getItem('SavedMoviesArray')
  )?.savedMovies;

  const movieImage =
    location.pathname === '/saved-movies'
      ? data.image
      : 'https://api.nomoreparties.co/' + data.image.url;

  const handleMoviePageButtonrender = isSaved
    ? 'movie__like-button_active'
    : 'movie__like-button';

  const movieButton =
    location.pathname === '/saved-movies'
      ? 'movie__button-delete'
      : handleMoviePageButtonrender;

  function toggleLiked(e) {
    if (!storageSavedMovies.some((item) => item.nameEN === data.nameEN)) {
      putLiked(data);
      e.target.classList.add('movie__button-delete');
    } else {
      const item = storageSavedMovies.find(
        (item) => item.nameEN === data.nameEN
      );
      removeLiked(item._id);
      e.target.classList.remove('movie__button-delete');
    }
  }

  function convertDuration(duration) {
    if (duration > 60) {
      let hours, minutes;
      hours = Math.floor(duration / 60);
      minutes = duration - hours * 60;
      return `${hours}ч ${minutes}м`;
    }
    return `${duration}м`;
  }

  return (
    <div className='movie'>
      <a
        href={data.trailerLink}
        className='movie__link'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src={movieImage}
          className='movie__image'
          alt={'Постер к фильму' + data.nameRU}
        />
      </a>

      <div className='movie__container'>
        <h2 className='movie__title'>{data.nameRU}</h2>
        <div className='movie__like-container'>
          <button className={movieButton} type='button' onClick={toggleLiked} />
        </div>
      </div>
      <p className='movie__duration'>{convertDuration(data.duration)}</p>
    </div>
  );
}

export default MoviesCard;
