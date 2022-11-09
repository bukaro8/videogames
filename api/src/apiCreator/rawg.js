const axios = require('axios');

const rawg = axios.create({
  baseURL: 'https://api.rawg.io/api/',
});
module.exports = rawg;
