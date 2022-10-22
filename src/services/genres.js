import axios from 'axios';

class FetchGenres {
    async getGenres() {
        try {
            let res = await axios.get('https://api.themoviedb.org/3/genre/movie/list',{
                params: {
                    api_key: 'b38617053052d14c445b6e18cafadda7'
                }
            });
            return res.data.genres;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new FetchGenres();