const mongoose = require(`mongoose`);

// el modelo creado para servicios

const serviciosSchema = mongoose.Schema({

    CodigoSer: {
        type: String,
        required: true
    },
    Detalle: {
        type: String,
        required: true
    },
    Valor: {
        type: Number,
        required: true
    },
    Tiempo_de_Ejecucion: {
        type: String,
        required: true
    },
    
    
},{versionkey:false});

module.exports = mongoose.model(`Servicios`, serviciosSchema);
