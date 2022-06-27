import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Categories from '../../components/Categories';
import Labels from '../../components/Labels';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Labels />
      <Footer />
    </>
  );
};

export default HomePage;
