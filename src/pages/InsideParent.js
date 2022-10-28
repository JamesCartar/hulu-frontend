import React, { useContext, useEffect, useState } from 'react';
import LandingPageContextProvider, { LandingPageContext } from '../context/landingPage/LandingPageContext';
import Navbar from './inside/Navbar';
// icon
import { SyncLoader } from 'react-spinners';
import FirstPage from './inside/FirstPage';
import SecondPage from './inside/SecondPage';
import Footer from '../components/partials/Footer';
import { twentyScreenPlay } from '../context/landingPage/ApiCalls';


function InsideParent() {
  const {dispatch, isFetching } = useContext(LandingPageContext);

  
  useEffect(() => {
    twentyScreenPlay(dispatch);

  }, [dispatch]);

  return (
    <div className='over-x-hidden'>
      {isFetching ?
      <div style={{backgroundImage: 'linear-gradient(135deg, #231437 0%, #2c385e 50%, #336e6b 100%)'}} className='w-screen min-h-screen flex justify-center items-center overflow-hidden'>
        <SyncLoader
          className=''
          color="#1ce783"
          size={20}
          speedMultiplier={1}
        />
      </div>
      :
      <div>
        <Navbar />
        <FirstPage />
        <SecondPage />
        <Footer />
      </div>}
    </div>
  )
}

export default InsideParent;
