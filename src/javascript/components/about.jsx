import React from 'react';
import Slider from './about-comps/slider';
import { images } from './about-comps/images';

export default function about() {
  return (
    <>
      <section className='about' id='about-us'>
        <div className='about__container'>
          <div className='about__details'>
            <h3>
              <span>About Us</span>
            </h3>
            <p>
              Family owned and operated business with 30+ years operating
              experience.
            </p>
          </div>
          <div className='about__photo-viewer'>
            <Slider slides={images} />
          </div>
        </div>
      </section>
    </>
  );
}

// <img
//   className='sliderimg'
//   src={excavator_tall_sq}
//   alt='Photo 9'
// />
// <img src={plants_1} alt='Photo 1' />
// <img src={cleared_land_1} alt='Photo 2' />
// <img src={cleared_land_2} alt='Photo 3' />
// <img src={lake_1} alt='Photo 4' />
// <img src={lake_2} alt='Photo 5' />
// <img src={lake_3} alt='Photo 6' />
// <img src={lake_4} alt='Photo 7' />
// <img src={lake_5} alt='Photo 8' />
