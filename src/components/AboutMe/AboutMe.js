import React from 'react';
import './AboutMe';

function AboutMe() {
  return (
    <div className='about-me' id='student'>
      <h1 className='about-me__title'>Студент</h1>
      <div className='about-me__container'>
        <div className='about-me__information'>
          <p className='about-me__name'>Мария</p>
          <p className='about-me__age'>Фронтенд-разработчик, 24 года</p>
          <p className='about-me__text'>
            Я родилась в городе Омске, на данный момент живу в Санкт-Петербурге.
            Окончила факультет Тепло-и электрообеспечения в ОмГТУ. У меня есть
            морская свинка. Я люблю ходить на фитнес и путешествовать. Недавно
            начала кодить. С 2020 года работаю в компании ПАО "Россети". В
            ближайшее время начну искать работу в IT.
          </p>
          <a
            href='https://github.com/BallMary'
            target='_blank'
            rel='noopener noreferrer'
            className='about-me__github'
          >
            Github
          </a>
        </div>
        <div className='about-me__photo'></div>
      </div>
    </div>
  );
}

export default AboutMe;
