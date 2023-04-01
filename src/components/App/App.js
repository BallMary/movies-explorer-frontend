import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
  useLocation,
  useHistory,
  Redirect,
} from 'react-router-dom';
import './App';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';
import auth from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { textsOfErrors } from '../../utils/constants';

function App() {
  const history = useHistory();
  const location = useLocation();
  const viewFooter =
    location.pathname === '/' ||
    location.pathname === '/movies' ||
    location.pathname === '/saved-movies';

  const [loggedIn, setLoggedIn] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [currentUser, setCurrentUser] = useState({ data: {} });
  const [requestStatus, setRequestStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [loadingSaved, setLoadingSaved] = useState(false);
  const [wasSearched, setWasSearched] = useState(false);
  const [wasSearchedSaved, setWasSearchedSaved] = useState(false);
  const [renderedArrayMovies, setRenderedArrayMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [renderedArraySavedMovies, setRenderedArraySavedMovies] = useState([]);
  const [initialArray, setInitialArray] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      auth
        .getAuthenticationUser(token)
        .then((res) => {
          if (res) {
            handleLogin();
            setIsChecking(false);
          }
        })
        .then(() => {
          auth.getUserData().then((data) => {
            setCurrentUser(data);
          });
        })
        .catch((err) => console.log(err));
    } else {
      setIsChecking(false);
    }
  }, [loggedIn, history]);

  function handleLogin() {
    setLoggedIn(true);
  }

  useEffect(() => {
    if (loggedIn) {
      handleToggleSearchShortMovies();
    }
  }, [loggedIn, location]);

  useEffect(() => {
    if (loggedIn) {
      handleToggleSearchOnlyShortSavedMovies();
    }
  }, [loggedIn, location]);

  const handleLoginSubmit = (data) => {
    auth
      .setLoginUser(data.email, data.password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
      })
      .then(() => {
        handleLogin();
        setDisabled(true);
      })
      .then(() => history.push('/movies'))
      .then(() => {
        auth.getUserData().then((data) => {
          setCurrentUser(data);
        });
        localStorage.setItem(
          'onlyShortMovies',
          JSON.stringify({
            onlyShortFilms: false,
          })
        );
        localStorage.setItem(
          'onlyShortSavedMovies',
          JSON.stringify({
            onlyShortFilms: false,
          })
        );
        localStorage.setItem(
          'MoviesArray',
          JSON.stringify({
            filteredMovies: initialArray,
          })
        );
        handleDownloadSavedMovies();
      })
      .catch((err) => {
        setRequestStatus(false);
        setErrorMessage(textsOfErrors.error);
        console.log(err);
      })
      .finally(() => {
        setDisabled(false);
      });
  };

  const handleRegistrationSubmit = (data) => {
    auth
      .setRegisterUser(data)
      .then((res) => {
        if (res) {
          setRequestStatus(true);
        }
      })
      .then(() => handleLoginSubmit(data))
      .then((data) => {
        auth.setLoginUser(data.email, data.password);
        localStorage.setItem(
          'MoviesArray',
          JSON.stringify({
            filteredMovies: initialArray,
          })
        );
        localStorage.setItem(
          'SavedMoviesArray',
          JSON.stringify({
            savedMovies: savedMovies,
          })
        );
        localStorage.setItem(
          'onlyShortMovies',
          JSON.stringify({
            onlyShortMovies: false,
          })
        );
        localStorage.setItem(
          'onlyShortSavedMovies',
          JSON.stringify({
            onlyShortFilms: false,
          })
        );
      })
      .catch((err) => {
        console.log(err);
        setRequestStatus(false);
      });
  };

  function handleDownloadMovies(searchMovie) {
    setLoading(true);
    setWasSearched(true);
    moviesApi
      .getAllMovies()
      .then((movies) => {
        localStorage.setItem(
          'searchMovie',
          JSON.stringify({
            searchMovie: searchMovie,
          })
        );
        const filteredMovies = movies.filter((item) =>
          item.nameRU.toLowerCase().includes(searchMovie.toLowerCase())
        );
        localStorage.setItem(
          'MoviesArray',
          JSON.stringify({
            filteredMovies: filteredMovies,
          })
        );
        localStorage.setItem(
          'onlyShortSavedMovies',
          JSON.stringify({
            onlyShortMovies: false,
          })
        );
        handleToggleSearchShortMovies();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }

  function handleToggleSearchShortMovies() {
    if (JSON.parse(localStorage.getItem('onlyShortMovies')).onlyShortMovies) {
      setRenderedArrayMovies(
        JSON.parse(localStorage.getItem('MoviesArray'))?.filteredMovies.filter(
          (item) => item.duration < 40
        )
      );
    } else {
      setRenderedArrayMovies(
        JSON.parse(localStorage.getItem('MoviesArray'))?.filteredMovies
      );
    }
  }

  function handleDownloadSavedMovies() {
    auth
      .getSavedMovies()
      .then((savedMovies) => {
        localStorage.setItem(
          'SavedMoviesArray',
          JSON.stringify({
            savedMovies: savedMovies,
          })
        );
        setRenderedArraySavedMovies(savedMovies);
      })
      .catch((err) => console.log(err));
  }

  function handleToggleSearchOnlyShortSavedMovies() {
    if (
      JSON.parse(localStorage.getItem('onlyShortSavedMovies')).onlyShortMovies
    ) {
      setRenderedArraySavedMovies(
        JSON.parse(
          localStorage.getItem('SavedMoviesArray')
        )?.savedMovies.filter((item) => item.duration < 40)
      );
    } else {
      setRenderedArraySavedMovies(
        JSON.parse(localStorage.getItem('SavedMoviesArray'))?.savedMovies
      );
    }
  }

  function handlePutLiked(movie) {
    auth
      .saveLikedMovie(movie)
      .then(() => {
        auth
          .getSavedMovies()
          .then((savedMovies) => {
            setSavedMovies(savedMovies);
            return savedMovies;
          })
          .then((savedMovies) => {
            localStorage.setItem(
              'SavedMoviesArray',
              JSON.stringify({
                savedMovies: savedMovies,
              })
            );
            setRenderedArraySavedMovies(
              JSON.parse(localStorage.getItem('SavedMoviesArray')).savedMovies
            );
          });
      })
      .catch((err) => console.log(err));
  }

  function handleRemoveLiked(movieId) {
    auth.deleteSavedMovie(movieId).then(() => {
      auth
        .getSavedMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies);
          return savedMovies;
        })
        .then((savedMovies) => {
          localStorage.setItem(
            'SavedMoviesArray',
            JSON.stringify({
              savedMovies: savedMovies,
            })
          );
          setRenderedArraySavedMovies(
            JSON.parse(localStorage.getItem('SavedMoviesArray')).savedMovies
          );
        })
        .catch((err) => console.log(err));
    });
  }

  function handleDownloadFilteredSavedMovies(savedMovieRequest) {
    setLoadingSaved(true);
    setWasSearchedSaved(true);
    auth
      .getSavedMovies()
      .then((savedMovies) => {
        const result = savedMovies.filter((item) =>
          item.nameRU.toLowerCase().includes(savedMovieRequest.toLowerCase())
        );
        return result;
      })
      .then((result) => {
        localStorage.setItem(
          'SavedMoviesArray',
          JSON.stringify({
            savedMovies: result,
          })
        );
        setRenderedArraySavedMovies(result);
      })
      .then(() => {
        setLoadingSaved(false);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoadingSaved(false);
      });
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('MoviesArray');
    localStorage.removeItem('SavedMoviesArray');
    localStorage.removeItem('onlyShortMovies');
    localStorage.removeItem('onlyShortSavedMovies');
    localStorage.removeItem('searchMovie');
    setSavedMovies([]);
    setRenderedArrayMovies([]);
    setRenderedArraySavedMovies([]);
    setInitialArray([]);
    setWasSearched(false);
    setWasSearchedSaved(false);
    setLoggedIn(false);
    history.push('/');
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Header loggedIn={loggedIn} />
        <main>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/signin'>
              <Login
                onSubmit={handleLoginSubmit}
                errorMessage={errorMessage}
                disabled={disabled}
              />
            </Route>
            <Route path='/signup'>
              <Register
                isRequestStatus={requestStatus}
                onSubmit={handleRegistrationSubmit}
              />
            </Route>

            <ProtectedRoute
              exact
              path='/movies'
              component={Movies}
              loggedIn={loggedIn}
              isChecking={isChecking}
              downloadMovies={handleDownloadMovies}
              loading={loading}
              renderedArrayMovies={renderedArrayMovies}
              putLiked={handlePutLiked}
              removeLiked={handleRemoveLiked}
              toggleSearchShortMovies={handleToggleSearchShortMovies}
              wasSearched={wasSearched}
            />
            <ProtectedRoute
              exact
              path='/saved-movies'
              loggedIn={loggedIn}
              isChecking={isChecking}
              component={SavedMovies}
              renderedArrayMovies={renderedArraySavedMovies}
              wasSearched={wasSearchedSaved}
              removeLiked={handleRemoveLiked}
              loading={loadingSaved}
              toggleSearchShortMovies={handleToggleSearchOnlyShortSavedMovies}
              downloadMovies={handleDownloadFilteredSavedMovies}
            />
            <ProtectedRoute
              exact
              loggedIn={loggedIn}
              isChecking={isChecking}
              path='/profile'
              component={Profile}
              onLogout={handleLogout}
              setCurrentUser={setCurrentUser}
            />
            <Route exact path='/'>
              {loggedIn ? <Redirect to='/' /> : <Redirect to='/signin' />}
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </main>
        {viewFooter && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
