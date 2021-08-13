import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-app-6be28.firebaseio.com/'
});

export default instance;