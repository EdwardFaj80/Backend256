const mongoose = require (`mongoose`);
require(`dotenv`).config();

//conexion con mongo db


const conectarBD =() =>{

    mongoose
    .connect (process.env.DB_MONGO)
    .then(() => console.log("estamos conectados con mongo DB"))
    .catch ((err) => console.log (err));
}

module.exports = conectarBD;