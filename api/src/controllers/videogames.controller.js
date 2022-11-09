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

const getApiInfo = async () => {
  let page = 0; //every page contains 20 items. Use line 38 to set how many pages you want (20 X page)
  let allData = [];
  let validNext = null;
  const addingPages = async (url = `/games?key=${API_KEY}`) => {
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
    console.log(allData);
  };
  addingPages();
};
getApiInfo();
// const getDbInfo = async () => {
//   return await Videogame.findAll({
//     include: {
//       model: Genre,
//       attributes: ['name'],
//       through: {
//         attributes: [],
//       },
//     },
//   });
// };
// const getAllGames = async () => {
//   const apiInfo = await getApiInfo();
//   const dbInfo = await getDbInfo();
//   const totalInfo = [...apiInfo, ...dbInfo];
//   return totalInfo;
// };

// ==============
const videogamesController = (req, res) => {
  const { name } = req.query;

  if (name) {
    try {
      const filterByName = (name) => {};
      return res.status(200).send(filterByName);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }
  res.send({ msg: 'videogames route without query' });
};
module.exports = videogamesController;
