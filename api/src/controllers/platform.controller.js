const rawg = require('../apiCreator/rawg'); //this is the axios.create
const axios = require('axios');
const { Platform } = require('../db.js'); //bring the model
const { API_KEY } = process.env;

const getDbInfo = async () => {
  const list = await Platform.findOne();
  return list;
};

const getApiData = async () => {
  const hasBeenFilled = await getDbInfo();
  console.log(hasBeenFilled);
  const fillingBD = async () => {
    const result = await rawg.get(`/platforms?key=${API_KEY}`);
    const data = await result.data.results;
    const refinedData = await data.map((el) => {
      return {
        id: el.id,
        name: el.name,
      };
    });
    await Platform.bulkCreate(refinedData);
    const allDataFromDb = await Platform.findAll();

    return allDataFromDb;
  };
  if (!hasBeenFilled) {
    await fillingBD();
  }
  const allDataFromDb = await Platform.findAll();
  // console.log('all  afuera data f db ' + allDataFromDb);
  return allDataFromDb;
};

const platform = async (req, res) => {
  try {
    const result = await getApiData();
    res.status(200).send(result);
  } catch (error) {
    res.status(400);
  }
};
module.exports = platform;
