require('dotenv').config();
const rawg = require('../apiCreator/rawg'); //this is the axios.create
const axios = require('axios');
const { Videogame } = require('../db.js'); //bring the model
const { API_KEY } = process.env;
