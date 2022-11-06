import React, {useReducer, createContext, useState, useEffect} from 'react';
import WatchListFeature from '../../services/watchList';

import LandingPageReducer from './LandingPageReducer';


const INITIAL_STATE = {
    isFetching: false,
    featureMovie: {},
    twentyPopularMovies: [],
    twentyPopularSeries: [],
    twentyLatestMovies: [],
    twentyLatestSeries: [],
    twentyMovieTrailerList: [],
    twentySeriesTrailerList: [],
    genres: [],
    watchList: [],
    error: false,
}


export const LandingPageContext = createContext(INITIAL_STATE);

function LandingPageContextProvider({ children }) {
  const [ state, dispatch ] = useReducer(LandingPageReducer, INITIAL_STATE);




  function handleAddToWatchList(screenplayInfo) {
    return WatchListFeature.AddWatchList(screenplayInfo);
  }

  function handleDeleteAWatchList(screenPlayId) {
    return WatchListFeature.DeleteAWatchList(screenPlayId);
  }

  function handleClearWatchList(user_id) {
    return WatchListFeature.ClearWatchList(user_id)
  }


  return (
    <LandingPageContext.Provider value={{
      ...state,
      dispatch,
      handleAddToWatchList,
      handleDeleteAWatchList,
      handleClearWatchList
    }}>
      { children }
    </LandingPageContext.Provider>
  )
}

export default LandingPageContextProvider;
