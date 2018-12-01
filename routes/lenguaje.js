const express = require('express');
const router = express.Router();
const lenguajeController = require('../controller/LenguajeController');

router.get('/', lenguajeController.index);

router.post('/', lenguajeController.store);

router.delete('/:id', lenguajeController.delete);

module.exports = router;