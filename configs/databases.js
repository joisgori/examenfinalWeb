const mongoose = require('mongoose');
const {mongodb} = require('./key');

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(db => console.log('Tuviste un conexión existosa :)'))
.catch(err => console.log(err))
