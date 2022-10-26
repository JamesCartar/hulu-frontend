const LandingPageReducer = (state, action) => {
    switch(action.type) {
        case 'FETCHING_START':
            return {
                isFetching: true,
                featureMovie: {},
                twentyPopularMovies: [],
                twentyPopularSeries: [],
                twentyLatestMovies: [],
                twentyLatestSeries: [],
                twentyMovieTrailerList: [],
                twentySeriesTrailerList: [],
                genres: [],
                error: false,
            }
        case 'FETCHING_FEATURE_MOVIE_SUCCESS':
            return {
                isFetching: false,
                featureMovie: action.payload.featureMovie,
                twentyPopularMovies: state.twentyPopularMovies,
                twentyPopularSeries: state.twentyPopularSeries,
                twentyLatestMovies: state.twentyLatestMovies,
                twentyLatestSeries: state.twentyLatestSeries,
                twentyMovieTrailerList: state.twentyMovieTrailerList,
                twentySeriesTrailerList: state.twentySeriesTrailerList,
                genres: action.payload.genres,
                error: false,
            }
        case 'FETCHING_SCREENPLAY_SUCCESS':
            return {
                isFetching: false,
                featureMovie: state.featureMovie,
                twentyPopularMovies: action.payload.twentyPopularMovies,
                twentyPopularSeries: action.payload.twentyPopularSeries,
                twentyLatestMovies: action.payload.twentyLatestMovies,
                twentyLatestSeries: action.payload.twentyLatestSeries,
                twentyMovieTrailerList: action.payload.twentyMovieTrailerList,
                twentySeriesTrailerList: action.payload.twentySeriesTrailerList,
                genres: state.genres,
                error: false,
            }
        case 'FETCHIN_FAILURE':
            return {
                isFetching: false,
                featureMovie: {},
                twentyPopularMovies: [],
                twentyPopularSeries: [],
                twentyLatestMovies: [],
                twentyLatestSeries: [],
                twentyMovieTrailerList: [],
                twentySeriesTrailerList: [],
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