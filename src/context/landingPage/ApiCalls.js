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
        const popularMovieRes = await FetchTwentyScreenPlay.getTwentyPopularMovie();
        const LatestMovieRes = await FetchTwentyScreenPlay.getTwentyLatestMovie();
        const popularSeriesRes = await FetchTwentyScreenPlay.getTwentyPopularSeries();
        const LatestSeriesRes = await FetchTwentyScreenPlay.getTwentyLatestSeries();
        const movieTrailerRes = await FetchTwentyScreenPlay.getTwentyMovieTrailer(token);
        const seriesTrailerRes = await FetchTwentyScreenPlay.getTwentySeriesTrailer(token);
        const featureRes = await FetchFeatureMovie.getFeatureMovie();
        const genreRes = await FetchGenres.getGenres();

        let movies = {
            popular: popularMovieRes.data.results,
            latest: LatestMovieRes.data.results,
            trailer: movieTrailerRes.data.results,
        }

        let series = {
            popular: popularSeriesRes.data.results,
            latest: LatestSeriesRes.data.results,
            trailer: seriesTrailerRes.data.results,
        }



        dispatch(FetchingScreenPlaySuccess(movies, series));
        dispatch(FetchingFeatureMovieSuccess(featureRes.data.featureMovie, genreRes))
    } catch (error) {
        dispatch(FetchingFailure());
    }
};