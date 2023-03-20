import { useState } from 'react';
import './MoviesCard.css';

function MoviesCard() {
  const [isLiked, setIsLiked] = useState(false);
  const handleClickLike = () => {
    setIsLiked(true);
  };

  return (
    <div className='movies-card'>
      <div className='movie'>
        <img
          src='https://i.pinimg.com/originals/e1/28/c8/e128c81d0b00980cc9c9d0f3d768f4ed.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>33 слова о дизайне</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://i.pinimg.com/originals/a6/fc/f2/a6fcf2c61043bc8f1d495e07281064bb.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Киноальманах «100 лет дизайна»</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://i.pinimg.com/originals/ad/5c/1e/ad5c1e565ff64f3ed13e60d76da62716.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>В погоне за Бенкси</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://i.pinimg.com/originals/65/bd/e2/65bde2ef9cd5a18af348d3e29da6810c.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Баския: Взрыв реальности</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://i.pinimg.com/originals/d8/7b/33/d87b33251ebd681d29e2603eaceb48bf.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Бег это свобода</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://i.pinimg.com/564x/0c/04/e4/0c04e4360a1ce42e4c94ab37263be1f7.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Книготорговцы</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://i.pinimg.com/564x/7d/43/ad/7d43ad328cf5b9f7718c0c56a63f818e.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Когда я думаю о Германии ночью</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://i.pinimg.com/originals/67/42/d1/6742d14e1596ebfaeaabb48c901b0bc1.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>
            Gimme Danger: История Игги и The Stooges
          </h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        {' '}
        <img
          src='https://i.pinimg.com/564x/ae/5f/4d/ae5f4dac143d20329df9f90ad6d92e3d.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />{' '}
        <div className='movie__container'>
          <h2 className='movie__title'>Дженис: Маленькая девочка грустит</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://i.pinimg.com/originals/9a/29/47/9a2947d28107577f3c5ce01f9b8a7728.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Соберись перед прыжком</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://i.pinimg.com/originals/e7/b5/14/e7b514f27604d203c9511836b8439760.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Пи Джей Харви: A dog called money</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://i.pinimg.com/564x/6a/04/8f/6a048fbbc99294811f3f9311e521801f.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>По волнам: Искусство звука в кино</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://i.pinimg.com/564x/ec/a5/6c/eca56c7f065a7d28a477ba95ec9ea01d.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Рудбой</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://i.pinimg.com/564x/61/25/2f/61252f9f01aa0969e54ab64f19539c20.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Скейт — кухня</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://i.pinimg.com/564x/aa/db/7c/aadb7ce38d1f2b22d2604b1c8d7c89bd.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Война искусств</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://i.pinimg.com/564x/ff/9d/ef/ff9defa3037a382347ea1c53d39ebe45.jpg'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Зона</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div>
    </div>
  );
}

export default MoviesCard;
