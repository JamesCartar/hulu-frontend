import React, { useContext, useEffect } from 'react';
import LandingPageContextProvider, { LandingPageContext } from '../context/landingPage/LandingPageContext';
import FirstPage from './inside/FirstPage';
import Navbar from './inside/Navbar';


function InsideParent() {


  return (
    <>
      <Navbar />
      <LandingPageContextProvider>
        <FirstPage />
      </LandingPageContextProvider>
    </>
  )
}

export default InsideParent;
