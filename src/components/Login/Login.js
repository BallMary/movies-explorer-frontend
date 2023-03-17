import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login';

function Register({ onSubmit }) {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, email, value } = e.target;
    setData({
      ...data,
      [name]: value,
      [email]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };
  return (
    <div className='auth'>
      <div className='auth__container auth_indent-container'>
        <Link to='/'>
          <div alt='Логотип учебного проекта' className='logo logo_auth'></div>
        </Link>
        <h1 className='auth__welcome'>Рады видеть!</h1>
      </div>
      <section className='auth__form'>
        <form className='auth__form' onSubmit={handleSubmit}>
          <fieldset className='auth__info'>
            <label className='auth__label'>E-mail</label>
            <input
              value={data.email}
              onChange={handleChange}
              id='email-input'
              className='auth__input'
              type='text'
              name='email'
              required
            />
            <label className='auth__label'>Пароль</label>
            <input
              value={data.password}
              onChange={handleChange}
              id='password-input'
              className='auth__input auth__input_type_password'
              type='password'
              name='password'
              minLength={4}
              required
            />
          </fieldset>
          <button
            className='auth__submit-button auth_indent-button'
            type='submit'
            // onClick={}
          >
            Войти
          </button>
          <p className='auth__text'>
            Ещё не зарегистрированы?{' '}
            <Link to='/signup' className='auth__link'>
              Регистрация
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}

export default Register;
