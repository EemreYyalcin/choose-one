import axios from 'axios';

const KEY = 'AIzaSyCqMsvo0J5kTFEXcXZuDh316cRCeOGEKmg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});