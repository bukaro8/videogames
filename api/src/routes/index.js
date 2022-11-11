const { Router } = require('express');
const router = Router();

//* importing routers;
const platforms = require('./platforms.js'); //use if you want to filter by platform
const genres = require('./genres.js');
const videogames = require('./videogames.js');
const videogame = require('./videogame.js');
//*routers settings
router.use('/platforms', platforms);
router.use('/genres', genres);
router.use('/videogames', videogames);
router.use('/videogame', videogame);

module.exports = router;
