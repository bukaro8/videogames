const Router = require('express');
const router = Router();

const {
  videogamesController,
  videogamesPutController,
  videogameDeleteController,
} = require('../controllers/videogames.controller.js');
const {
  videogamePostController,
} = require('../controllers/videogame.controller');

router.get('/', videogamesController);
router.post('/', videogamePostController);
router.put('/', videogamesPutController);
router.delete('/', videogameDeleteController);
module.exports = router;
