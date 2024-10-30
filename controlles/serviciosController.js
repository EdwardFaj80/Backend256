const Servicios = require("../models/Servicios");


exports.agregarServicios = async (req, res) => {
    try {
        let servicios;
        servicios = new Servicios(req.body);
        await servicios.save();
        res.json(servicios);

    } catch (error) {
        console.log("error");
        res.status(500).send("hubo error el agragar un servicio");
    }
}

// funcion buscar servicios
exports.buscarServicios = async (req, res) => {
    try {
        const servicios = await Servicios.find();
        res.json(servicios)

    } catch (error) {
        console.log(error);
        res.status(500).send(`hubo un error al buscar los servicios`);

    }
}

// Funcion buscar un servicio

exports.mostrarServicio = async (req, res) => {
    try {
        let servicios = await Servicios.findById(req.params.id)
        if (!servicios) {
            res.status(404).send({ msg: "Cliente no encontrado con ese ID" });
        }
        else {
            res.json(servicios);
        }
    } catch (error) {
        res.status(500).send(`hubo un error al mostrar un servicios`);
    }
}

// buscar y actualizar cliente, Metodo pach


exports.actualizarServicios = async (req, res) => {
    try {
        const servicios = await Servicio.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!servicios) {
            res.status(500).send({ msg: "cliente no hallado con ID" });
        } else {
            res.json(servicios);
        }
    }
    catch (error) {
        res.status(500).send(`hubo un error al actualizar un cliente`);
    }
}

// buscar y actualizar cliente, Metodo PUT

exports.modificarServicios = async (req, res) => {
    try {
        const servicios = await Servicios.findOneAndUpdate({ _id: req.params.id }, req.body,);
        if (!servicios) {
            res.status(500).send({ msg: "cliente no hallado con ID con metodo PUT" });
        } else {
            res.json(servicios);
        }
    }
    catch (error) {
        res.status(500).send(`hubo un error al modificar un cliente metodo PUT`);
    }
}
// eliminar servicios
exports.eliminarServicios = async (req, res) => {
    try {
        const servicios = await Servicios.findById(req.params.id);
        if (!servicios) {
            res.status(500).send({ msg: "Servicio no encontrado con ID" });
        } else {
            await Servicios.findOneAndDelete({ _id: req.params.id });
            res.json({ msg: "cliente eliminado" })
        }
    }
    catch (error) {
        res.status(500).send(`hubo un error al modificar un cliente metodo PUT`);
    }
}