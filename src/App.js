import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { context } from './context/mainContext';
import BundleTerms from './components/BundleTerms';
import Hello from './pages/inside/Hello';
import InsideParent from './pages/InsideParent';
import OutsideParent from './pages/OutsideParent';
import MovieDetail from './pages/inside/MovieDetail';
import SeriesDetail from './pages/inside/SeriesDetail';


function App() {
  const { value: { user } } = useContext(context);
  return (
    <div>
      <Routes>
        <Route path='/' element={user ? <Navigate to='/home' /> : <OutsideParent />} />
        <Route path='/home' element={ user ? <InsideParent /> : <Navigate to='/' /> } />
        <Route path='/terms/disney-bundle' element={<BundleTerms />} />
        <Route path='/home/movies/:id' element={<MovieDetail />} />
        <Route path='/home/series/:id' element={<SeriesDetail />} />
      </Routes>
    </div>
  );
}

export default App;
