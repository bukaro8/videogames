const Router = require('express');
const router = Router();
const genresController = require('../controllers/genres.controller.js');

router.get('/', genresController);
module.exports = router;
