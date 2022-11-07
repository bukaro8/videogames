const Router = require('express');
const router = Router();

const videogamesController = require('../controllers/videogames.controller.js');

router.get('/', videogamesController);
module.exports = router;
