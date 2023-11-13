import { BiUpArrowAlt } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';

import {
  Header,
  Home,
  Featured,
  Story,
  Products,
  NewsLetter,
  Footer,
} from './components';

const App = () => {
  const scrollUpRef = useRef(null);

  const checkScroll = () => {
    if (scrollUpRef.current) {
      window.scrollY >= 350
        ? scrollUpRef.current.classList.add('show-scroll')
        : scrollUpRef.current.classList.remove('show-scroll');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Featured />
      <Story />
      <Products />
      <NewsLetter />
      <Footer />

      {/*=============== SCROLL UP ===============*/}
      <a href='#' className='scrollup' ref={scrollUpRef}>
        <BiUpArrowAlt className='scrollup__icon' />
      </a>
    </>
  );
};

export default App;
