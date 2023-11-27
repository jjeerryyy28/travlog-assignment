// pages/index.js
import React from 'react';
import NavBar from '../component/navbar/navbar';
import MainContent from '@/component/Main/main';
import Services from '@/component/services/services';
import TravelPoint from '@/component/travelpoint/travelpoint';
import Subscribe from '@/component/subscribe/subscribe';
import Footer from '@/component/footer/footer';
const Home = () => {
  return (
    <>
      <NavBar />
      <MainContent />
      <Services />
      <TravelPoint />
      <Subscribe />
      <Footer/>
    </>
  )
}

export default Home;
