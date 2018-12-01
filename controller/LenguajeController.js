const lenguaje = require('../models/lenguaje');
const lenguajeController = {};

lenguajeController.index = async function (req, res, next) {
    try {
        let lenguajes = await lenguaje.find();
        return res.status(200).json(lenguajes);
    }
    catch (error) {
        return res.status(500).json({error}); //se suponía y era error.error D:
    }
}

module.exports = lenguajeController;
