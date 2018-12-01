const express = require('express');
const router = express.Router();
const lenguajeController = require('../controller/LenguajeController');

router.get('/', lenguajeController.index);

module.exports = router;