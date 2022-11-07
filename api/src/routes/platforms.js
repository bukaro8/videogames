const Router = require('express');
const router = Router();
const platformController = require('../controllers/platform.controller.js');

router.get('/:id', platformController);
module.exports = router;
