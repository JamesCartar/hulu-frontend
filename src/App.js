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
  const { value: { user } } = useContext(context);
  const { dispatch } = useContext(LandingPageContext);

  
  useEffect(() => {
    twentyScreenPlay(dispatch);

  }, [dispatch]);

  console.log(user)

  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<OutsideParent />} />
        <Route path='/home' element={ user ? <InsideParent /> : <Navigate to='/' /> } />
        <Route path='/terms/disney-bundle' element={<BundleTerms />} />
        <Route path='/home/movies/popular' element={ user ? <PopularMovie /> : <Navigate to='/' /> } />
        <Route path='/home/movies/now_playing' element={ user ? <NowPlayingMovie /> : <Navigate to='/' /> } />
        <Route path='/home/movies/upcoming' element={ user ? <UpcomingMovie /> : <Navigate to='/' /> } />
        <Route path='/home/movies/top_rated' element={ user ? <TopRatedMovie /> : <Navigate to='/' /> } />
        <Route path='/home/series/popular' element={ user ? <PopularSeries /> : <Navigate to='/' /> } />
        <Route path='/home/series/airing_today' element={ user ? <AiringTodaySeries /> : <Navigate to='/' /> } />
        <Route path='/home/series/on_tv' element={ user ? <OnTvSeries /> : <Navigate to='/' /> } />
        <Route path='/home/series/top_rated' element={ user ? <TopRatedSeries /> : <Navigate to='/' /> } />
        <Route path='/home/movies/:id' element={ user ? <MovieDetail /> : <Navigate to='/' /> } />
        <Route path='/home/series/:id' element={ user ? <SeriesDetail /> : <Navigate to='/' />} />
        <Route path='/home/watch_list' element={user ? <WatchList /> : <Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
