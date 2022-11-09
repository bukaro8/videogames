require('dotenv').config();
const rawg = require('../apiCreator/rawg'); //this is the axios.create
const axios = require('axios');
const { Videogame } = require('../db.js'); //bring the model
const { API_KEY } = process.env;
console.log(API_KEY);
// const videogameObj = (data) => {
//   return {
//     id: data.id,
//     name: data.name,
//     description: data.description,
//     released: data.released,
//     rating: data.rating,
//     createdInDb: data.createdInDb,
//     background_image: data.background_image,
//   };
// };

// const getApiInfo = async () => {
//   let url = `/games?key=b0be862a878045a88d30b898cfb9aa1f`;
//   const result = await rawg.get(url);
//   const data = result.data;
//   let page = 1;
//   let allData = [];
//   let pages = 1;
//   do {
//     const pageData = data.results.map((el) => {
//       videogameObj(el);
//     });
//     allData = [...allData, pageData];
//     pages += 1;
//     const result = await axios.get(
//       `https://api.rawg.io/api/games?key=b0be862a878045a88d30b898cfb9aa1f&page=${
//         pages + 1
//       }`
//     );
//   } while (pages <= 5);
//   console.log(allData);
//   // return allData;
// };
// getApiInfo();

// const videogamesController = (req, res) => {
//   const { name } = req.query;

//   if (name) {
//     try {
//       const filterByName = (name) => {};
//       return res.status(200).send(filterByName);
//     } catch (error) {
//       return res.status(400).send({ error: error.message });
//     }
//   }
//   res.send({ msg: 'videogames route without query' });
// };
// module.exports = videogamesController;
