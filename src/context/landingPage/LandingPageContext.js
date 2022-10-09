import React, {useReducer, createContext} from 'react';
import LandingPageReducer from './LandingPageReducer';


const INITIAL_STATE = {
    isFetching: false,
    twentyMovies: [],
    twentySeries: [],
    error: false,
}


export const LandingPageContext = createContext(INITIAL_STATE)

function LandingPageContextProvider({ children }) {
  const [state, dispatch] = useReducer(LandingPageReducer, INITIAL_STATE);
  return (
    <LandingPageContext.Provider value={{
      ...state,
      dispatch
    }}>
      { children }
    </LandingPageContext.Provider>
  )
}

export default LandingPageContextProvider;
