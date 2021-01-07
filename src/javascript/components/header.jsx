import React from 'react';

export default function header() {
  return (
    <>
      <header className='header'>
        <div className='header__title'>
          <h1>King Land Management</h1>
        </div>

        <a href='#services' className='header__cta'>
          <div>See more</div>
          <div>&#8595;</div>
        </a>
      </header>
    </>
  );
}
