const lenguaje = require('../models/lenguaje');
const lenguajeController = {};

lenguajeController.index = async function (req, res, next) {
    try {
        let lenguajes = await lenguaje.find();
        return res.status(200).json(lenguajes);
    }
    catch (error) {
        return res.status(500).json({ error: error }); //se suponía y era error.error D:
    }
}

lenguajeController.store = async function (req, res, next) {
    let l = new lenguaje();
    l.nombre = req.body.nombre;
    l.origen = req.body.origen;
    l.paradigma = req.body.paradigma;
    try {
        await l.save();
        return res.status(200).json({ status: 'ok', message: "Ingreso de datos con éxito" });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

lenguajeController.delete = async function (req, res, next) {
    let { id } = req.params;
    try {
        await lenguaje.remove({ _id: id });
        return res.status(200).json({ status: 'ok', message: "Eliminado datos con éxito" });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

/*
    nombre : {type: String, required:true},
    origen : {type: String, required:true},
    paradigma : {type: String, required:true},
*/

module.exports = lenguajeController;
