const mongoose = require('mongoose');
const {Schema} = mongoose;

const lenguajeSchema = new Schema ({
    //id : {type: String, unique: true, required: true}, //No sé si debería ponerle Number, //duda2.0 creo que esto no debo pedirlo
    nombre : {type: String, required:true},
    origen : {type: String, required:true},
    paradigma : {type: String, required:true}
});

module.exports = mongoose.model('lenguajes', lenguajeSchema);