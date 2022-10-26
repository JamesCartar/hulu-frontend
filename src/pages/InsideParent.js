import React, { useContext, useEffect } from 'react';
import LandingPageContextProvider, { LandingPageContext } from '../context/landingPage/LandingPageContext';
import InsideMain from './inside/InsideMain';
import Navbar from './inside/Navbar';
import Footer from '../components/partials/Footer';


function InsideParent() {


  return (
    <LandingPageContextProvider>
      <Navbar />
      <InsideMain />
      <Footer />
    </LandingPageContextProvider>
  )
}

export default InsideParent;
