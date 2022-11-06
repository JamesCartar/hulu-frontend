import http from './http-common';

class WatchListFeature {
    GetWatchList() {
        return http.get('/watch_list');
    }

    AddWatchList(screenPlayData) {
        return http.post('/watch_list', screenPlayData);
    }

    DeleteAWatchList(screenPlayId) {
        return http.delete(`/watch_list/${screenPlayId}`);
    }

    ClearWatchList(user_id) {
        return http.delete(`/watch_list/clear/${user_id}`)
    }
}

export default new WatchListFeature();