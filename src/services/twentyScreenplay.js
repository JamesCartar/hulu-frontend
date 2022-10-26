import axios from 'axios';
import http from './http-common';

class FetchTwentyScreenPlay {

    getTwentyPopularMovie() {
        return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`);
    }

    getTwentyLatestMovie() {
        return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
    }

    getTwentyPopularSeries() {
        return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`);
    }

    getTwentyLatestSeries() {
        return axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}`);
    }

    getTwentyMovieTrailer() {
        return axios.get('https://api.themoviedb.org/3/movie/now_playing', {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                page: 2
            }
        });
    }
    
    getTwentySeriesTrailer() {
        return axios.get('https://api.themoviedb.org/3/tv/airing_today', {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                page: 2
            }
        });
    }
}

export default new FetchTwentyScreenPlay();