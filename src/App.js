import React, { useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { context } from './context/mainContext';

import BundleTerms from './components/BundleTerms';
import InsideParent from './pages/InsideParent';
import OutsideParent from './pages/OutsideParent';
import MovieDetail from './pages/inside/MovieDetail';
import SeriesDetail from './pages/inside/SeriesDetail';
import PopularMovie from './pages/inside/PopularMovie';
import NowPlayingMovie from './pages/inside/NowPlayingMovie';
import UpcomingMovie from './pages/inside/UpcomingMovie';
import TopRatedMovie from './pages/inside/TopRatedMovie';
import PopularSeries from './pages/inside/PopularSeries';
import AiringTodaySeries from './pages/inside/AiringTodaySeries';
import OnTvSeries from './pages/inside/OnTvSeries';
import TopRatedSeries from './pages/inside/TopRatedSeries';
import WatchList from './pages/inside/WatchList';
import { twentyScreenPlay } from './context/landingPage/ApiCalls';
import { LandingPageContext } from './context/landingPage/LandingPageContext';


function App() {
  const { state, dispatch } = useContext(LandingPageContext);

  
  useEffect(() => {
    twentyScreenPlay(dispatch);

  }, [dispatch]);

  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path='/' element={state.user ? <Navigate to='/home' /> : <OutsideParent />} />
        <Route path='/home' element={ state.user ? <InsideParent /> : <Navigate to='/' /> } />
        <Route path='/terms/disney-bundle' element={<BundleTerms />} />
        <Route path='/home/movies/popular' element={ state.user ? <PopularMovie /> : <Navigate to='/' /> } />
        <Route path='/home/movies/now_playing' element={ state.user ? <NowPlayingMovie /> : <Navigate to='/' /> } />
        <Route path='/home/movies/upcoming' element={ state.user ? <UpcomingMovie /> : <Navigate to='/' /> } />
        <Route path='/home/movies/top_rated' element={ state.user ? <TopRatedMovie /> : <Navigate to='/' /> } />
        <Route path='/home/series/popular' element={ state.user ? <PopularSeries /> : <Navigate to='/' /> } />
        <Route path='/home/series/airing_today' element={ state.user ? <AiringTodaySeries /> : <Navigate to='/' /> } />
        <Route path='/home/series/on_tv' element={ state.user ? <OnTvSeries /> : <Navigate to='/' /> } />
        <Route path='/home/series/top_rated' element={ state.user ? <TopRatedSeries /> : <Navigate to='/' /> } />
        <Route path='/home/movies/:id' element={ state.user ? <MovieDetail /> : <Navigate to='/' /> } />
        <Route path='/home/series/:id' element={ state.user ? <SeriesDetail /> : <Navigate to='/' />} />
        <Route path='/home/watch_list' element={state.user ? <WatchList /> : <Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
