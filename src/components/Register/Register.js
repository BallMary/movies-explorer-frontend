import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Register';
import { useForm } from 'react-hook-form';
import { textsOfErrors, regexEmail } from '../../utils/constants';

function Register({ onSubmit, isRequestStatus, loggedIn }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onTouched',
  });

  const [data, setData] = useState({
    name: '',
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

  const onSubmitRegister = () => {
    onSubmit(data);
  };

  if (loggedIn || isRequestStatus) {
    return <Redirect to='/movies' />;
  }

  return (
    <div className='auth'>
      <div className='auth__container'>
        <Link to='/'>
          <div className='logo logo_auth'></div>
        </Link>
        <h1 className='auth__welcome'>Добро пожаловать!</h1>
      </div>
      <section className='auth__section'>
        <form className='auth__form' onSubmit={handleSubmit(onSubmitRegister)}>
          <fieldset className='auth__info'>
            <label className='auth__label'>Имя</label>
            <input
              {...register('name', {
                required: textsOfErrors.name.nameTextError,
                minLength: {
                  value: 2,
                  message: textsOfErrors.name.minLengthNameTextError,
                },
                maxLength: {
                  value: 20,
                  message: textsOfErrors.name.maxLengthNameTextError,
                },
                onChange: handleChange,
              })}
              value={data.name}
              id='name'
              className='auth__input'
              type='text'
              name='name'
            />
            <div className='auth__error'>
              {errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}
            </div>
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
          <button
            className='auth__submit-button'
            type='submit'
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
          <p className='auth__text'>
            Уже зарегистрированы?{' '}
            <Link to='/signin' className='auth__link'>
              Войти
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}

export default Register;
