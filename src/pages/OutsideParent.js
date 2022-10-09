import React from 'react';
import FifthPage from './outside/FifthPage';
import FirstPage from './outside/FirstPage';
import FourthPage from './outside/FourthPage';
import SecondPage from './outside/SecondPage';
import ThirdPage from './outside/ThirdPage';
import Footer from '../components/partials/Footer';

function Parent() {
  return (
    <div>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <Footer />
    </div>
  )
}

export default Parent
