const Router = require('express');
const router = Router();
const platformController = require('../controllers/platform.controller.js');

router.get('/', platformController);
module.exports = router;
