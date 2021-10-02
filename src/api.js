import axios from 'axios';

const api = axios.create({
    src: 'http://localhost:3030'
});

export default api;