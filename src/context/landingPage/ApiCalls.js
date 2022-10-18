import FetchTwentyScreenPlay from "../../services/twentyScreenplay";
import FetchFeatureMovie from '../../services/featureMovie';
import FetchGenres from '../../services/genres';
import { FetchingStart, FetchingFailure, FetchingScreenPlaySuccess, FetchingFeatureMovieSuccess } from "./LandingPageAction"

export const twentyScreenPlay = async (dispatch) => {
    let token;
    if(localStorage.getItem('user')) {
        token = JSON.parse(localStorage.getItem('user')).token;
    }

    try {
        dispatch(FetchingStart());
        const movieRes = await FetchTwentyScreenPlay.getTwentyMovie(token);
        const seriesRes = await FetchTwentyScreenPlay.getTwentySeries(token);
        const featureRes = await FetchFeatureMovie.getFeatureMovie(token);
        const genreRes = await FetchGenres.getGenres();
        dispatch(FetchingScreenPlaySuccess(movieRes.data, seriesRes.data));
        dispatch(FetchingFeatureMovieSuccess(featureRes.data.featureMovie, genreRes))
    } catch (error) {
        dispatch(FetchingFailure());
    }
}