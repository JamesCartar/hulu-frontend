import axios from 'axios';

class FetchTwentyScreenPlay {

    getTwentyMovie() {
        return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`);
    }

    getTwentySeries() {
        return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`);
    }
}

export default new FetchTwentyScreenPlay();