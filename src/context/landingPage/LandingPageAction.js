export const FetchingStart = () => ({
    type: 'FETCHING_START'
})

export const FetchingMovieSuccess = (movies) => ({
    type: 'FETCHING_MOVIE_SUCCESS',
    payload: movies
})

export const FetchingSeriesSuccess = (series) => ({
    type: 'FETCHING_SERIES_SUCCESS',
    payload: series
})

export const FetchingFailure = () => ({
    type: "FETCHING_FAILURE",
});