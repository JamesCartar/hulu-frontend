export const Authenticate = () => ({
    type: 'AUTHENTICATE',
});


export const AuthenticateSuccess = (userInfo) => ({
    type: 'AUTHENTICATE_SUCCESS',
    payload: {
        user: userInfo
    }
});

export const Logout = (state) => ({
    type: 'LOGOUT',
    payload: state,
});

export const AuthenticateFail = (message) => ({
    type: 'AUTHENTICATE_FAIL',
    payload: {
        message
    }
});

export const FetchingStart = () => ({
    type: 'FETCHING_START'
});

export const FetchingSuccess = (movies, series, featureMovie, genres) => ({
    type: 'FETCHING_SUCCESS',
    payload: {
        featureMovie,
        genres,
        twentyPopularMovies : movies.popular, 
        twentyPopularSeries : series.popular,
        twentyLatestMovies : movies.latest, 
        twentyLatestSeries : series.latest,
        twentyMovieTrailerList: movies.trailer,
        twentySeriesTrailerList: series.trailer,
    }
});

export const FetchingFailure = (message) => ({
    type: "FETCHING_FAILURE",
    payload: message
});

export const openPopup = (popupText) => ({
    type: "OPEN_POPUP",
    payload: {
        text: popupText,
    }
});

export const closePopup = () => ({
    type: "CLOSE_POPUP"
})

export const hideMessage = () => ({
    type: "HIDE_MESSAGE"
})