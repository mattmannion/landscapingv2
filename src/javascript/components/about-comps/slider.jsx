import React, { useState } from 'react';
import { images } from './images';

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
      <div onClick={prev}>left arrow</div>
      {images.map((img, index) => {
        return (
          <div
            key={img.id}
            className={index === current ? 'slide active' : 'slide'}
          >
            {index === current && <img src={img.image} alt='photos' />}
          </div>
        );
      })}
      <div onClick={next}>right arrow</div>
    </>
  );
}
