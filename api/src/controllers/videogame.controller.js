module.exports = {
  videogameGetController(req, res) {
    const id = req.params.id;
    try {
      const findById = (id) => {};
      res.status(200).send(findById);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  },
  videogamePostController(req, res) {
    const { id, name, background_image, released, rating } = req.body;
    if ((id, name, background_image, released, rating)) {
      const newVideogame = {
        id,
        name,
        background_image,
        released,
        rating,
      };
      //!sent to the db
      return res.send({ msg: 'videogame created successfully' });
    }
    res.status(400).send({ error: 'you must add the data' });
  },
};
