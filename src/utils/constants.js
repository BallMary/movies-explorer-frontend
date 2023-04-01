const regexEmail =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const textsOfErrors = {
  name: {
    nameTextError: 'Введите имя',
    minLengthNameTextError: 'Введите имя длиной не менее 2 символов',
    maxLengthNameTextError: 'Введите имя длиной не более 20 символов',
  },
  email: {
    textEmail: 'Введите email',
    isEmailTextError: 'Введите корректный email',
  },
  password: {
    textError: 'Введите пароль',
    minLengthTextError: 'Введите пароль длиной не менее 5 символов',
  },
  error: 'Неверный E-mail или пароль',
};

export { textsOfErrors, regexEmail };
