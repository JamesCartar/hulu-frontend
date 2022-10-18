import React, { useContext, useEffect } from 'react';
import { SyncLoader } from 'react-spinners';

import LandingPageContextProvider, { LandingPageContext } from '../context/landingPage/LandingPageContext';
import InsideMain from './inside/InsideMain';
import Navbar from './inside/Navbar';


function InsideParent() {


  return (
    <LandingPageContextProvider>
      <Navbar />
      <InsideMain />
    </LandingPageContextProvider>
  )
}

export default InsideParent;
