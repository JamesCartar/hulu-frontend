import axios from 'axios';


let token;
if(localStorage.getItem('user')) {
    let userData = JSON.parse(localStorage.getItem('user'));
    token = userData.token;
}

export default axios.create({
    baseURL: "https://hulu-backend.vercel.app",
    headers: {
        'Content-type': 'application/json',
        'Authorization': token,
    }
});