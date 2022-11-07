const Router = require('express');
const router = Router();

const {
  videogameGetController,
  videogamePostController,
} = require('../controllers/videogame.controller.js');

router.get('/:id', videogameGetController);
router.post('/', videogamePostController);

module.exports = router;
