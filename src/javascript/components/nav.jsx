import React from 'react';

export default function nav() {
  return (
    <>
      <nav className='navigation' id='nav'>
        <div className='navigation__container'>
          <div className='navigation__logo'>King Land Management</div>
          <div className='navigation__links'>
            <a href='#services'>Services</a>
            <a href='#about-us'>About</a>
            <a href='#contact'>Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
}
