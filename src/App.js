import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Navbar from './components/Navbar/Navbar';
import Head from './components/Head/Head';
import About from './components/About/About';
import Service from './components/Service/Service';
import './index.css';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import Team from './components/Team/Team';

const App = () => (
  <>
    <Navbar />
    <Head />
    <About />
    <Service />
    <Team />
    <Testimonial />
    <Footer />
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
