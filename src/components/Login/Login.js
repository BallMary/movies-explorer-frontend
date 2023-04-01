/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Login';
import { useForm } from 'react-hook-form';
import { textsOfErrors, regexEmail } from '../../utils/constants';

function Login({
  onSubmit,
  loggedIn,
  isRequestStatus,
  errorMessage,
  disabled,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onTouched',
  });

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmitLogin = () => {
    onSubmit(data);
  };

  if (loggedIn || isRequestStatus) {
    return <Redirect to='/movies' />;
  }

  return (
    <div className='auth'>
      <div className='auth__container auth__container_indent'>
        <Link to='/'>
          <div className='logo logo_auth'></div>
        </Link>
        <h1 className='auth__welcome'>Рады видеть!</h1>
      </div>
      <section className='auth__section'>
        <form className='auth__form' onSubmit={handleSubmit(onSubmitLogin)}>
          <fieldset className='auth__info'>
            <label className='auth__label'>E-mail</label>
            <input
              {...register('email', {
                required: textsOfErrors.email.textEmail,
                pattern: {
                  value: regexEmail,
                  message: textsOfErrors.email.isEmailTextError,
                },
                onChange: handleChange,
              })}
              value={data.email}
              id='email-input'
              className='auth__input'
              type='text'
              name='email'
            />
            <div className='auth__error'>
              {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
            </div>
            <label className='auth__label'>Пароль</label>
            <input
              {...register('password', {
                required: textsOfErrors.password.textError,
                minLength: {
                  value: 5,
                  message: textsOfErrors.password.minLengthTextError,
                },
                onChange: handleChange,
              })}
              value={data.password}
              id='password-input'
              className='auth__input auth__input_type_password'
              type='password'
              name='password'
            />
            <div className='auth__error'>
              {errors?.password && (
                <p>{errors?.password?.message || 'Error!'}</p>
              )}
            </div>
          </fieldset>
          <div className='auth__error'>
            {errors?.form && <p>{errors?.form?.message || 'Error!'}</p>}
          </div>
          <div className='auth__common-error'>{errorMessage}</div>
          <button
            className={`auth__submit-button auth__submit-button_indent ${
              disabled ? 'auth__submit-button_disabled' : ''
            }`}
            type='submit'
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

export default Login;
