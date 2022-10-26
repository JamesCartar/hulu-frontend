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
    payload: { 
        twentyPopularMovies : movies.popular, 
        twentyPopularSeries : series.popular,
        twentyLatestMovies : movies.latest, 
        twentyLatestSeries : series.latest,
        twentyMovieTrailerList: movies.trailer,
        twentySeriesTrailerList: series.trailer,
    }
});

export const FetchingFailure = () => ({
    type: "FETCHING_FAILURE"
});