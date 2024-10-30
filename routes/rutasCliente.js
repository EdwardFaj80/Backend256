//crear ruta de la api

const express = require(`express`);
const router = express.Router();
const clienteController = require(`../controlles/clienteController`)

//rutas de crud

router.post(`/`, clienteController.agregarClientes);//metodo post
router.get(`/`, clienteController.buscarClientes);//metodo get
router.get(`/:id`, clienteController.mostrarCliente);//metodo get
//router.patch(`/:id`,clienteController.actualizarClientes);// metodo pach
router.put(`/:id`,clienteController.modificarClientes);// metodo put
router.delete(`/:id`,clienteController.eliminarClientes);// metodo delete


module.exports = router;