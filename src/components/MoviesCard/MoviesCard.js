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
        <div className='movie__image' alt='Постер к фильму' />
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
        <div className='movie__image' alt='Постер к фильму' />
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
        <div className='movie__image' alt='Постер к фильму' />
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
        <div className='movie__image' alt='Постер к фильму' />
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
        <div className='movie__image' alt='Постер к фильму' />
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
        <div className='movie__image' alt='Постер к фильму' />
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
        <div className='movie__image' alt='Постер к фильму' />
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
        <div className='movie__image' alt='Постер к фильму' />
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
        <div className='movie__image' alt='Постер к фильму' />
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
        <div className='movie__image' alt='Постер к фильму' />
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
        <div className='movie__image' alt='Постер к фильму' />
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
        <div className='movie__image' alt='Постер к фильму' />
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
        <div className='movie__image' alt='Постер к фильму' />
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
        <div className='movie__image' alt='Постер к фильму' />
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
        <div className='movie__image' alt='Постер к фильму' />
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
        <div className='movie__image' alt='Постер к фильму' />
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
