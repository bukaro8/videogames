const Router = require('express');
const router = Router();

const {
  videogameGetController,
} = require('../controllers/videogame.controller.js');

router.get('/:id', videogameGetController);

module.exports = router;
