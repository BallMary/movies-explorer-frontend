import { useState } from 'react';
import './Header';
import { Route, Link, Switch, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header({ loggedIn }) {
  const location = useLocation();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Switch>
      <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
        <header
          className={`header ${
            location.pathname === '/' ? 'header_pink' : ''
          } `}
        >
          <Route exact path='/'>
            <Link to='/'>
              <div className='logo'></div>
            </Link>

            <div
              className={`header__main ${
                loggedIn ? 'header__auth_hidden' : ''
              }`}
            >
              <Link to='/signup' className='header__link'>
                Регистрация
              </Link>

              <Link
                to='/signin'
                className='header__link header__link_white header__link_size'
              >
                Войти
              </Link>
            </div>
            <div
              className={`${
                click ? 'header__container active' : 'header__container'
              } ${loggedIn ? '' : 'header__auth_hidden'}`}
            >
              <Link
                to='/movies'
                className={`header__font ${
                  loggedIn ? '' : 'header__auth_hidden'
                }`}
              >
                Фильмы
              </Link>

              <Link
                to='/saved-movies'
                className={`header__font ${
                  loggedIn ? '' : 'header__auth_hidden'
                }`}
              >
                Сохраненные фильмы
              </Link>

              <Link
                to='/profile'
                className={`header__font header__link-profile ${
                  loggedIn ? '' : 'header__auth_hidden'
                }`}
              >
                Аккаунт
                <div className='header__field'>
                  <div className='header__icon'></div>
                </div>
              </Link>
              <div className={click ? 'header__overlay' : ''}></div>
            </div>

            <div
              className={`${click ? 'header__burger_fixed' : 'header__burger'} ${loggedIn ? 'header__burger' : 'header__auth_hidden'}`}
              onClick={handleClick}
            >
              {click ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
          </Route>

          <Route exact path={['/movies', '/saved-movies', '/profile']}>
            <Link to='/'>
              <div className='logo'></div>
            </Link>
            <div
              className={`${
                click ? 'header__container active' : 'header__container'
              } `}
            >
              <Link className='header__font header__font_hidden' to='/'>
                Главная
              </Link>
              <Link to='/movies' className='header__font'>
                Фильмы
              </Link>

              <Link to='/saved-movies' className='header__font'>
                Сохраненные фильмы
              </Link>

              <Link to='/profile' className='header__font header__link-profile'>
                Аккаунт
                <div className='header__field'>
                  <div className='header__icon'></div>
                </div>
              </Link>
              <div className={click ? 'header__overlay' : ''}></div>
            </div>

            <div
              className={click ? 'header__burger_fixed' : 'header__burger'}
              onClick={handleClick}
            >
              {click ? <FaTimes size={30} /> : <FaBars size={35} />}
            </div>
          </Route>
        </header>
      </Route>
    </Switch>
  );
}

export default Header;
