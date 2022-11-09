require('dotenv').config();
const rawg = require('../apiCreator/rawg'); //this is the axios.create
const axios = require('axios');
const { Videogame } = require('../db.js'); //bring the model
const { API_KEY } = process.env;
// console.log(API_KEY);

const videogameObj = (data) => {
  return {
    id: data.id,
    name: data.name,
    description: data.slug,
    released: data.released,
    rating: data.rating,
    createdInDb: data.createdInDb,
    background_image: data.background_image,
  };
};

const getApiInfo = () => {
  let page = 0; //every page contains 20 items. Use line 38 to set how many pages you want (20 X page)
  let allData = [];
  let validNext = null;
  const addingPages = async (
    url = '/games?key=b0be862a878045a88d30b898cfb9aa1f'
  ) => {
    let result = await rawg.get(url);
    const { data } = await result;
    const dataToMap = await data.results;
    validNext = await data.next;
    // console.log('abajo ' + validNext);
    const pageData = dataToMap.map((element) => {
      return videogameObj(element);
    });
    allData.push(...pageData);
    page = page + 1;
    if (validNext && page <= 4) {
      return addingPages(`${validNext}&page=${page + 1}`); //it will call itself until reach 5pages
    }
  };
  addingPages();
};
getApiInfo();
//     result = await axios.get(
//       `https://api.rawg.io/api/games?key=b0be862a878045a88d30b898cfb9aa1f&page=${
//         page + 1
//       }`
//     );
//     page = page + 1;
//     console.log(allData);
//   } while (page <= 2);
//   // console.log(allData);
//   // return allData;
// };
// getApiInfo();
// ==============
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
