import React from 'react';
import Nav from './components/nav';
import Header from './components/header';
import Services from './components/services';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

export default function App() {
  return (
    <>
      <div className='body-container'>
        <Nav />
        <Header />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
