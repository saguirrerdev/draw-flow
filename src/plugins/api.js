const axios = require('axios');

const API_URL = 'http://localhost:3333'

axios.defaults.baseURL = API_URL;

if (API_URL === null) console.log('Api url no provided');

window.DrawflowAPI = axios;
