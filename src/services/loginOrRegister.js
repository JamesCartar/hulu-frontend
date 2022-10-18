import http from './http-common';

class LoginOrRegisterServies {
    register(userInfo) {
        return http.post('/auth/register', userInfo);
    }

    login(userInfo) {
        return http.post('/auth/login', userInfo);
    }
}

export default new LoginOrRegisterServies();