import http from './http-common';

class FetchFeatureMovie {
    getFeatureMovie(userInfo) {
        return http.get('/screenplay/featureMovie');
    }
}

export default new FetchFeatureMovie();