import fetchTwentyScreenPlay from "../../services/twentyScreenplay";
import { FetchingStart, FetchingFailure, FetchingMovieSuccess, FetchingSeriesSuccess } from "./LandingPageAction"

export const twentyScreenPlay = async (dispatch) => {
    dispatch(FetchingStart);
    let token;
    if(localStorage.getItem('user')) {
        token = JSON.parse(localStorage.getItem('user')).token;
    }
    try {
        const movieRes = await fetchTwentyScreenPlay.getTwentyMovie(token);
        const seriesRes = await fetchTwentyScreenPlay.getTwentySeries(token);
        dispatch(FetchingMovieSuccess(movieRes.data))
        dispatch(FetchingSeriesSuccess(seriesRes.data))
    } catch (error) {
        dispatch(FetchingFailure);
    }
}