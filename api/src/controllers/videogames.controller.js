require('dotenv').config();
const rawg = require('../apiCreator/rawg'); //this is the axios.create

const { Videogame, Genre } = require('../db.js'); //bring the model
const { videogamePostController } = require('./videogame.controller');
const { API_KEY } = process.env;
// console.log(API_KEY);

const bringDescriptionById = async (id) => {
  const result = await rawg.get(`/games/${id}?key=${API_KEY}`);
  const description = await result.data.description;
  return description;
};
const bringPlatform = async (data) => {
  const platformsArr = await data.platforms?.map((ele) => ele.platform.name);
  return platformsArr;
};

// bringDescriptionById(4828);test
const videogameObj = async (data) => {
  // const description = await bringDescriptionById(data.id);//!use this if you want to create bring all the descriptons
  const platforms = await bringPlatform(data);
  return {
    id: data.id,
    name: data.name,
    // description: description,//!descomentar
    released: data.released,
    rating: data.rating,
    createdInDb: false,
    background_image: data.background_image,
    platforms: platforms,
    genres: data.genres.map((el) => el.name),
  };
};

//every page contains 20 items. Use line 38 to set how many pages you want (20 X page)

const getApiInfo = async (
  url = `/games?key=${API_KEY}`,
  allData = [],
  page = 1
) => {
  let validNext = null;
  let result = await rawg.get(url);
  const { data } = await result;
  const dataToMap = await data.results;
  validNext = await data.next;

  const pageData = await Promise.all(
    dataToMap.map((element) => {
      return videogameObj(element);
    })
  );
  allData.push(...pageData);
  page = page + 1;
  if (validNext && page <= 5) {
    return getApiInfo(validNext, allData, page); //it will call itself until reach 5pages
  }

  return allData;
};

const getDbInfo = async () => {
  return await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ['name'],
      through: {
        attributes: [],
      },
    },
  });
};
const getAllGames = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const totalInfo = await dbInfo.concat(apiInfo);
  // console.log(totalInfo);
  return totalInfo;
};
const findOnApi = async (term) => {
  const result = await rawg.get(`/games?key=${API_KEY}&search=${term}`);
  const dataToMap = await result.data.results;
  const refineData = await Promise.all(
    dataToMap.map((element) => {
      return videogameObj(element);
    })
  );
  return refineData.slice(0, 15);
};
const findOnDb = async (name) => {
  const dbInfo = await getDbInfo();
  const result = await dbInfo.filter((el) =>
    el.name.toLowerCase().includes(name.toLowerCase())
  );
  return result;
};

module.exports = {
  async videogamesController(req, res) {
    const totalGames = await getAllGames();
    console.log(totalGames.length);
    //!in case you get a name by query
    const { name } = req.query;
    if (name) {
      const dbResult = await findOnDb(name);
      const apiResult = await findOnApi(name);
      const filterByName = dbResult.concat(apiResult);
      if (filterByName.length > 0) {
        return res.status(200).send(filterByName);
      }
      return res
        .status(404)
        .send({ error: 'there is not match with that term' });
    }
    res.send(totalGames);
  },

  async videogamesPutController(req, res) {
    //*must receive parameter by body name
    const nameToSearch = req.body.name;
    const { newName, background_image, released, description, rating } =
      req.body;
    if (nameToSearch) {
      // const findName = await Videogame.findOne({
      //   where: { name: nameToSearch },
      // });
      const updateByName = await Videogame.update(
        {
          name: newName,
          background_image: background_image,
          released: released,
          description: description,
          rating: rating,
        },
        { where: { name: nameToSearch } }
      );
      await updateByName;
      return res.status(200).send({ msg: 'Videogame has been updated' });
    }
    res.status(404).send({ msg: 'you must type a name' });
  },
  async videogameDeleteController(req, res) {
    const idToSearch = req.body.id;
    try {
      if (idToSearch) {
        const findByID = await Videogame.findOne({
          where: { id: idToSearch },
        });
        findByID.destroy();
        return res.status(200).send({ msg: 'Videogame has been deleted' });
      }
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
};
