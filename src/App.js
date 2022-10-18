import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import BundleTerms from './components/BundleTerms';
import InsideParent from './pages/InsideParent';
import OutsideParent from './pages/OutsideParent';
import { context } from './context/mainContext';
import LandingPageContextProvider from './context/landingPage/LandingPageContext';


function App() {
  const { value: { user } } = useContext(context);
  return (
    <div>
      <Routes>
        <Route path='/' element={user ? <Navigate to='/home' /> : <OutsideParent />} />
        <Route path='/home/*' element={ user ? 
            <InsideParent />
          : <Navigate to='/' /> } 
        />
        <Route path='/terms/disney-bundle' element={<BundleTerms />} />
      </Routes>
    </div>
  );
}

export default App;
