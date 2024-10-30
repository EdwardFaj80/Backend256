const Clientes = require("../models/Clientes");


// Funcion agregar clientes

exports.agregarClientes = async (req, res) => {
    try {
        let clientes;
        clientes = new Clientes(req.body);
        await clientes.save();
        res.json(clientes);

    } catch (error) {
        console.log("error");
        res.status(500).send("hubo error el agragar un cliente");
    }
}

// funcion buscar clientes
exports.buscarClientes = async (req, res) => {
    try {
        const clientes = await Clientes.find();
        res.json(clientes)

    } catch (error) {
        console.log(error);
        res.status(500).send(`hubo un error al buscar los clientes`);

    }
}

// Funcion buscar un cliente

exports.mostrarCliente = async (req, res) => {
    try {
        let clientes = await Clientes.findById(req.params.id)
        if (!clientes) {
            res.status(404).send({ msg: "Cliente no encontrado con ese ID" });
        }
        else {
            res.json(clientes);
        }
    } catch (error) {
        res.status(500).send(`hubo un error al mostrar un clientes`);
    }
}

// buscar y actualizar cliente, Metodo pach


exports.actualizarClientes = async (req, res) => {
    try {
        const clientes = await Clientes.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!clientes) {
            res.status(500).send({ msg: "cliente no hallado con ID" });
        } else {
            res.json(clientes);
        }
    }
    catch (error) {
        res.status(500).send(`hubo un error al actualizar un cliente`);
    }
}

// buscar y actualizar cliente, Metodo PUT

exports.modificarClientes = async (req, res) => {
    try {
        const clientes = await Clientes.findOneAndUpdate({ _id: req.params.id }, req.body,);
        if (!clientes) {
            res.status(500).send({ msg: "cliente no hallado con ID con metodo PUT" });
        } else {
            res.json(clientes);
        }
    }
    catch (error) {
        res.status(500).send(`hubo un error al modificar un cliente metodo PUT`);
    }
}
// eliminar cliente
exports.eliminarClientes = async (req, res) => {
    try {
        const clientes = await Clientes.findById(req.params.id);
        if (!clientes) {
            res.status(500).send({ msg: "cliente no encontrado con ID" });
        } else {
            await Clientes.findOneAndDelete({ _id: req.params.id });
            res.json({ msg: "cliente eliminado" })
        }
    }
    catch (error) {
        res.status(500).send(`hubo un error al modificar un cliente metodo PUT`);
    }
}