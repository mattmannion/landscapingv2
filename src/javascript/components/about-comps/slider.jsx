import React, { useState } from 'react';
import { images } from './images';
import left_arrow from '../../../resources/icons/caret-left.svg';
import right_arrow from '../../../resources/icons/caret-right.svg';

export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  function prev() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  function next() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  return (
    <>
      <div className='slider'>
        <img
          src={left_arrow}
          alt='left arrow'
          className='slider__la slider__arrow'
          onClick={prev}
        />
        {images.map((img, index) => {
          return (
            <div
              key={img.id}
              className={
                index === current ? 'slider__photo active' : 'slider__photo'
              }
            >
              {index === current && <img src={img.image} alt='photos' />}
            </div>
          );
        })}
        <img
          src={right_arrow}
          alt='right arrow'
          className='slider__ra slider__arrow'
          onClick={next}
        />
      </div>
    </>
  );
}
