import React from 'react';
import Slider from './about-comps/slider';
import { images } from './about-comps/images';

export default function about() {
  return (
    <>
      <section className='about' id='about-us'>
        <div className='about__container'>
          <div className='about__details'>
            <h3 className='about__underline'>
              <span>About Us</span>
            </h3>
            <p>
              Family owned and operated business with 30+ years operating
              experience.
            </p>
          </div>
          <h3 className='about__underline'>
            <span>Our Work</span>
          </h3>
          <div className='about__photo-viewer'>
            <Slider slides={images} />
          </div>
        </div>
      </section>
    </>
  );
}
