import React, { useContext, useEffect, useState } from 'react';
import 'flowbite';
import { SyncLoader } from 'react-spinners';

import { twentyScreenPlay } from '../../context/landingPage/ApiCalls';
import { LandingPageContext } from '../../context/landingPage/LandingPageContext';
import { context } from '../../context/mainContext';
import FirstPage from './FirstPage';


function InsideMain() {
  const {dispatch, twentyMovies, twentySeries, isFetching} = useContext(LandingPageContext);

  useEffect(() => {
    twentyScreenPlay(dispatch)
  }, [dispatch]);


  return (
    <div className='overflow-x-hidden'>
    { isFetching ?
      <div style={{backgroundImage: 'linear-gradient(135deg, #231437 0%, #2c385e 50%, #336e6b 100%)'}} className='w-screen h-screen flex justify-center items-center overflow-hidden'>
        <SyncLoader
          className=''
          color="#1ce783"
          size={20}
          speedMultiplier={1}
        />
      </div>
      :
      <>
        <FirstPage />
      </>
    }
    </div>
  )
}

export default InsideMain;

// export default InsideMain;

// export default InsideMain;

// export default InsideMain;

// export default InsideMain;

// export default InsideMain;

// export default InsideMain;

// export default InsideMain;

// export default InsideMain;

// export default InsideMain;

// export default InsideMain;
