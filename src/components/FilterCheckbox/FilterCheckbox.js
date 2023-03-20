import React from 'react';
import './FilterCheckbox';

function FilterCheckbox() {
  return (
    <div className='checkbox'>
      <p className='checkbox__text'>Короткометражки</p>
      <label className='checkbox__label'>
        <input className='checkbox__button' type='checkbox' />
      </label>
    </div>
  );
}

export default FilterCheckbox;
