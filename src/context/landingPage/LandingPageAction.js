export const FetchingStart = () => ({
    type: 'FETCHING_START'
});

export const FetchingFeatureMovieSuccess = (featureMovie, genres) => {
    return ({
        type: 'FETCHING_FEATURE_MOVIE_SUCCESS',
        payload: { featureMovie, genres }
    })
}


export const FetchingScreenPlaySuccess = (movies, series) => ({
    type: 'FETCHING_SCREENPLAY_SUCCESS',
    payload: { twentyMovies : movies, twentySeries : series }
});

export const FetchingFailure = () => ({
    type: "FETCHING_FAILURE"
});