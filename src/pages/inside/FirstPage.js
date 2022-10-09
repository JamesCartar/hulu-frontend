import React, { useContext, useEffect } from 'react';

import { twentyScreenPlay } from '../../context/landingPage/ApiCalls';
import { LandingPageContext } from '../../context/landingPage/LandingPageContext';


function FirstPage() {
  const {dispatch, twentyMovies, twentySeries} = useContext(LandingPageContext)

  console.log(twentySeries);
  console.log(twentyMovies);


  useEffect(() => {
    twentyScreenPlay(dispatch)
  }, [dispatch]);

  return (
    <div className=' text-white relative'>

    </div>
  )
}

export default FirstPage;
