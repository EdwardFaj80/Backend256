const express = require(`express`);
const conectarBD = require (`../config/db`);
const cors = require("cors");
// Creamos la variable app
const app = express();
const port = process.env.PORT || 5000;

// conexion bases de datos
conectarBD();
app.use(cors());
app.use(express.json());

//ruta para consumir la api cliente
app.use(`/api/clientes`, require(`../routes/rutasCliente`));
//ruta para consumir la api Servicios
app.use(`/api/servicios`, require(`../routes/rutasServicios`));

// Creamos ruta de verificacion de servidor en la web
app.get(`/`, (req, res) => {
    res.send("hola estamos conectados desde la web")
});

// ruta de servidor
app.listen(port, () =>{
console.log("el servidor esta conectado http://localhost:5000/");
});

//ruta para consumir la api Servicios


