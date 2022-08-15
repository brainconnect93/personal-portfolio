import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Navbar from './components/Navbar/Navbar';
import Head from './components/Head/Head';
import About from './components/About/About';
import Service from './components/Service/Service';
import Testimonial from './components/Testimonial/Testimonial';

const App = () => (
  <>
    <Navbar />
    <Head />
    <About />
    <Service />
    <Testimonial />

    <ScrollToTop
      smooth
      color="#fff"
      height="20"
      width="20"
      style={{ borderRadius: '70px', backgroundColor: '#cd5d5d' }}
    />
  </>
);

export default App;
