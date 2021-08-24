import React from 'react';
import Body2 from './body2/Body2';
import Bal from './body7/Bal';
import Footer from './footer/Footer';
import Gallary from './gallary/Gallary';
import Header from './header/Header';
import Hero from './hero/Hero';
import JoinNow from './joinNow/JoinNow';
import Pregnent from './pregnentProgram/Pregnent';
import Yoga from './yoga/Yoga';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Pregnent />
      <Body2 />
      <Yoga />
      <JoinNow />
      <Gallary />
      <Bal/>
      <Footer/>
    </>
  );
};
export default Home;
