import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api' // the api URL ( cloud function URL)
    // http://localhost:5001/clone-2-febf6/us-central1/api
});

export default instance;