import axios from 'axios';
import http from './http-common';

class fetchTwentyScreenPlay {

    getTwentyMovie(token) {
        return axios.get('http://www.localhost:8000/screenplay/twentymovie', {
            headers: {
                authorization: token
            }
        });
    }

    getTwentySeries(token) {
        return axios.get('http://www.localhost:8000/screenplay/twentytvshow', {
            headers: {
                authorization: token
            }
        });
    }
}

export default new fetchTwentyScreenPlay();