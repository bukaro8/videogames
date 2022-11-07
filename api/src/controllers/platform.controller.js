const platform = (req, res) => {
  console.log(req.params);
  res.send({ msg: 'platforms route' });
};
module.exports = platform;
