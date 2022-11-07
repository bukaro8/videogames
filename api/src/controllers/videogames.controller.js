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
