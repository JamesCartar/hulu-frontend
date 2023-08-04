import FetchTwentyScreenPlay from "../../services/twentyScreenplay";
import FetchFeatureMovie from '../../services/featureMovie';
import FetchGenres from '../../services/genres';
import { FetchingStart, FetchingFailure, FetchingSuccess } from "./LandingPageAction";
import WatchListFeature from '../../services/watchList';
import watchList from "../../services/watchList";

export const twentyScreenPlay = async (dispatch) => {

    
    try {
        dispatch(FetchingStart());
        const popularMovieRes = await FetchTwentyScreenPlay.getTwentyPopularMovie();
        const LatestMovieRes = await FetchTwentyScreenPlay.getTwentyLatestMovie();
        const popularSeriesRes = await FetchTwentyScreenPlay.getTwentyPopularSeries();
        const LatestSeriesRes = await FetchTwentyScreenPlay.getTwentyLatestSeries();
        const movieTrailerRes = await FetchTwentyScreenPlay.getTwentyMovieTrailer();
        const seriesTrailerRes = await FetchTwentyScreenPlay.getTwentySeriesTrailer();
        const featureRes = await FetchFeatureMovie.getFeatureMovie();
        const genreRes = await FetchGenres.getGenres();
        // const WatchListRes = await WatchListFeature.GetWatchList();
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

        dispatch(FetchingSuccess(movies, series, featureRes.data.featureMovie, genreRes ));
    } catch (error) {
        dispatch(FetchingFailure(error.response.data));
    }
};