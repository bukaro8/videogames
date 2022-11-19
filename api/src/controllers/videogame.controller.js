require('dotenv').config();
const rawg = require('../apiCreator/rawg'); //this is the axios.create
// const videogameObj = require('./videogameObjCreator.js'); //reusable function to create normalized game objects
const { Videogame, Genre } = require('../db.js'); //bring the model
const { API_KEY } = process.env;
const bringPlatform = async (data) => {
  const platformsArr = await data.platforms.map((ele) => ele.platform.name);
  return platformsArr;
};
const videogameObj = async (data) => {
  const platforms = await bringPlatform(data);
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    released: data.released,
    rating: data.rating,
    createdInDb: data.createdInDb,
    background_image: data.background_image,
    platforms: platforms,
  };
};

const findOnDb = async (idFind) => {
  const result = await Videogame.findOne({ where: { id: idFind } });

  return result;
};
const findOnApi = async (id) => {
  const result = await rawg.get(`/games/${id}?key=${API_KEY}`);
  const { data } = result;
  const refinedData = await videogameObj(data);
  return refinedData;
};
module.exports = {
  async videogameGetController(req, res) {
    const id = req.params.id;
    try {
      if (id) {
        if (id.includes('-')) {
          const foundOnDb = await findOnDb(id);
          if (foundOnDb) return res.status(200).send(foundOnDb);
        }
        const foundOnApi = await findOnApi(id);
        if (foundOnApi) return res.status(200).send(foundOnApi); //?one of them is empty
      }
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  },
  async videogamePostController(req, res) {
    const {
      name,
      description,
      released,
      rating,
      platform,
      genres,
      background_image,
    } = req.body;
    if (!name || !description || !platform) {
      return res
        .status(404)
        .send({ error: 'You must fill all the fields with *' });
    }
    try {
      let newVideogame = await Videogame.create({
        name,
        description,
        released,
        rating,
        platform,
        background_image,
      });

      genres.forEach(async (el) => {
        let genreToAdd = await Genre.findOne({ where: { name: el } });
        await newVideogame.addGenre(genreToAdd);
      });

      res.status(200).send(newVideogame);
    } catch (error) {
      return res.status(404).send({ error: error.message });
    }
  },
};
