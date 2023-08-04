import React, {useReducer, createContext, useState, useEffect} from 'react';
import WatchListFeature from '../../services/watchList';
import LoginOrRegisterServies from '../../services/loginOrRegister';

import LandingPageReducer from './LandingPageReducer';
import { Logout, closePopup, openPopup } from './LandingPageAction';


const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isShown: false,
    popUpText: '',
    topRatedTv: [],
    tvOnAir: [],
    topRatedMovie: [],
    movieOnAir: [],
    twoMovieNTwoTv: [],
    isFetching: true,
    featureMovie: {},
    twentyPopularMovies: [],
    twentyPopularSeries: [],
    twentyLatestMovies: [],
    twentyLatestSeries: [],
    twentyMovieTrailerList: [],
    twentySeriesTrailerList: [],
    genres: [],
    watchList: [],
    errorMsg: '',
    error: false,
}


export const LandingPageContext = createContext(INITIAL_STATE);

function LandingPageContextProvider({ children }) {
  const [ state, dispatch ] = useReducer(LandingPageReducer, INITIAL_STATE);


  function hadleLogin(userData) {
    document.querySelector('body').style.overflowY = 'scroll';
    return LoginOrRegisterServies.login(userData);
  }
  
  function handleRegister(userData) {
    document.querySelector('body').style.overflowY = 'scroll';
    return LoginOrRegisterServies.register(userData);
  }

  function handleLogout() {
    localStorage.clear();
    INITIAL_STATE.isFetching = false;
    dispatch(Logout(INITIAL_STATE));  
  }

  function handleAddToWatchList(screenplayInfo) {
    return WatchListFeature.AddWatchList(screenplayInfo);
  }

  function handleDeleteAWatchList(screenPlayId) {
    return WatchListFeature.DeleteAWatchList(screenPlayId);
  }

  function handleClearWatchList(user_id) {
    return WatchListFeature.ClearWatchList(user_id)
  }

  function handleOpenPopup(text) {
    dispatch(openPopup(text));
    
    document.querySelector('body').style.overflowY = 'hidden';
  }

  function handleClosePopup() {
    dispatch(closePopup());
    document.querySelector('body').style.overflowY = 'scroll';
  }


  return (
    <LandingPageContext.Provider value={{
      state: {...state},
      dispatch,
      hadleLogin,
      handleRegister,
      handleLogout,
      handleAddToWatchList,
      handleDeleteAWatchList,
      handleClearWatchList,
      handleOpenPopup,
      handleClosePopup
    }}>
      { children }
    </LandingPageContext.Provider>
  )
}

export default LandingPageContextProvider;
