import { useState } from 'react';
import './Header';
import { Route, Link, Switch, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header({ loggedIn }) {
  const location = useLocation();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header
      className={`header ${location.pathname === '/' ? 'header_pink' : ''}`}
    >
      <Switch>
        <Route exact path='/'>
          <Link to='/'>
            <div alt='Логотип учебного проекта' className='logo'></div>
          </Link>

          <div className='header__main'>
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
        </Route>

        <Route exact path={['/movies', '/saved-movies', '/profile']}>
          <Link to='/'>
            <div alt='Логотип учебного проекта' className='logo'></div>
          </Link>
          <div
            className={click ? 'header__container active' : 'header__container'}
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
      </Switch>
    </header>
  );
}

export default Header;
