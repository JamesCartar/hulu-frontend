import http from './http-common';

class FetchFeatureMovie {
    getFeatureMovie() {
        return http.get('/screenplay/featureMovie');
    }
}

export default new FetchFeatureMovie();