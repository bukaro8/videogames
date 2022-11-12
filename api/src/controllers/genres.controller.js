const rawg = require('../apiCreator/rawg'); //this is the axios.create
const { Genre } = require('../db.js'); //bring the model
const { API_KEY } = process.env;

const getDbInfo = async () => {
  const list = await Genre.findOne();
  return list;
  // return true;
};

const getApiData = async () => {
  let result = await rawg.get(`/genres?key=${API_KEY}`);
  let results = result.data.results;
  results.forEach((el) => {
    Genre.findOrCreate({
      where: { name: el.name },
      defaults: {
        name: el.name,
        id: el.id,
      },
    });
  });
  let allDataFromDb = await Genre.findAll();
  return allDataFromDb;
};

const genres = async (req, res) => {
  try {
    const result = await getApiData();
    res.status(200).send(result);
  } catch (error) {
    res.status(400);
  }
};
module.exports = genres;

// const hasBeenFilled = await getDbInfo();
//   console.log(hasBeenFilled);
//   const fillingBD = async () => {
//     const result = await rawg.get(`/genres?key=${API_KEY}`);
//     const data = await result.data.results;
//     const refinedData = await data.map((el) => {
//       return {
//         id: el.id,
//         name: el.name,
//       };
//     });
//     await Genre.bulkCreate(refinedData);
//     const allDataFromDb = await Genre.findAll();
//     // console.log('all  adentro data form db ' + allDataFromDb);
//     return allDataFromDb;
//   };
//   if (!hasBeenFilled) {
//     await fillingBD();
//   }
//   const allDataFromDb = await Genre.findAll();
//   // console.log('all  afuera data f db ' + allDataFromDb);
//   return allDataFromDb;
