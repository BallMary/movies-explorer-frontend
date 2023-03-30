import { useState, useContext } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from 'react-hook-form';
import { textsOfErrors, regexEmail } from '../../utils/constants';

function Profile({ onLogout, handleUpdateUser }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onTouched',
  });
  const currentUser = useContext(CurrentUserContext);
  const [formData, setFormData] = useState({
    name: currentUser.data.name || '',
    email: currentUser.data.email || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitUpdateUser = () => {
    const { name, email } = formData;
    if (name !== currentUser.data.name || email !== currentUser.data.email) {
      handleUpdateUser(name, email);
    }
  };
  return (
    <form className='profile' onSubmit={handleSubmit(handleSubmitUpdateUser)}>
      <div className='profile__container'>
        <h2 className='profile__header'>Привет, {currentUser.data.name}!</h2>
        <div className='profile__field'>
          <label className='profile__label' htmlFor='name'>
            Имя
          </label>
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
            className='profile__input'
            value={formData.name}
            // onChange={handleChange}
            // onBlur={handleBlur}
            name='name'
            id='name'
          />
        </div>
        <div className='profile__error'>
          {errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}
        </div>
        <div className='profile__border'></div>
        <div className='profile__field'>
          <label className='profile__label' htmlFor='email'>
            E-mail
          </label>
          <input
            {...register('email', {
              required: textsOfErrors.email.textEmail,
              pattern: {
                value: regexEmail,
                message: textsOfErrors.email.isEmailTextError,
              },
              onChange: handleChange,
            })}
            className='profile__input'
            type='email'
            name='email'
            id='email'
            value={formData.email}
            // onChange={handleChange}
          />
        </div>
        <div className='profile__error'>
          {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
        </div>
      </div>
      <div className='profile__container'>
        <button
          className={`profile__button ${
            !isValid ? 'profile__button_disabled' : ''
          }`}
          disabled={!isValid}
        >
          Редактировать
        </button>
        <button
          className='profile__button profile__button-exit'
          onClick={onLogout}
        >
          Выйти из аккаунта
        </button>
      </div>
    </form>
  );
}

export default Profile;
