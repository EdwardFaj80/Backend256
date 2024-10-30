const mongoose = require(`mongoose`);

// el omdelo creado debe ser igual al de la Base de datos

const clienteSchema = mongoose.Schema({

    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    documento: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    
},{versionkey:false});

module.exports = mongoose.model(`Cliente`, clienteSchema);
