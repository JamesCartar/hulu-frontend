import axios from 'axios';

export default axios.create({
    baseURL: "https://hulu-backend-v1.herokuapp.com",
    headers: {
        'Content-type': 'application/json'
    }
});