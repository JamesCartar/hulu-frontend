const LandingPageReducer = (state, action) => {
    switch(action.type) {
        case 'FETCHIN_START':
            return {
                isFetching: true,
                twentyMovies: [],
                twentySeries: [],
                error: false,
            }
        case 'FETCHING_MOVIE_SUCCESS':
            console.log('movies', action.payload)
            return {
                isFetching: false,
                twentyMovies: action.payload,
                twentySeries: state.twentySeries,
                error: false,
            }
        case 'FETCHING_SERIES_SUCCESS':
            console.log('series', action.payload)
            return {
                isFetching: false,
                twentyMovies: state.twentyMovies,
                twentySeries: action.payload,
                error: false,
            }
        case 'FETCHIN_FAILURE':
            return {
                isFetching: false,
                twentyMovies: [],
                twentySeries: [],
                error: true,
            }
        default:
            return {
                ...state
            }
    }
}

export default LandingPageReducer;