//crear ruta de la api

const express = require(`express`);
const router = express.Router();
const serviciosController = require(`../controlles/serviciosController`)



router.post(`/`, serviciosController.agregarServicios);
router.get(`/`, serviciosController.buscarServicios);
router.get(`/:id`, serviciosController.mostrarServicio);
router.put(`/:id`,serviciosController.modificarServicios);
router.delete(`/:id`,serviciosController.eliminarServicios);


module.exports = router;