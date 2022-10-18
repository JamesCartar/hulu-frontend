const LandingPageReducer = (state, action) => {
    switch(action.type) {
        case 'FETCHING_START':
            return {
                isFetching: true,
                featureMovie: {},
                twentyMovies: [],
                twentySeries: [],
                genres: [],
                error: false,
            }
        case 'FETCHING_FEATURE_MOVIE_SUCCESS':
            return {
                isFetching: false,
                featureMovie: action.payload.featureMovie,
                twentyMovies: state.twentyMovies,
                twentySeries: state.twentySeries,
                genres: action.payload.genres,
                error: false,
            }
        case 'FETCHING_SCREENPLAY_SUCCESS':
            return {
                isFetching: false,
                featureMovie: state.featureMovie,
                twentyMovies: action.payload.twentyMovies,
                twentySeries: action.payload.twentySeries,
                genres: state.genres,
                error: false,
            }
        case 'FETCHIN_FAILURE':
            return {
                isFetching: false,
                featureMovie: {},
                twentyMovies: [],
                twentySeries: [],
                genres: [],
                error: true,
            }
        default:
            return {
                ...state
            }
    }
}

export default LandingPageReducer;