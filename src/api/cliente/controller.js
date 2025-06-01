const controller = {}
const db = require('../../config/db');

controller.listarcliente = async (request,res) => {

    const {body} = request;
    try {

        const [rows] = await db.execute(`SELECT nombres,apellidos FROM cliente`);

      const data = rows.map(row => ({
        nombreCliente: row.nombre,
        apellidoCliente: row.apellidos
      }));
        return res.send({ message: 'Consulta generada con exito', status:"success", data:data, error: [] }).status(200);

    } catch (error) {
        return res.send({ message: error, status:"error", data:[], error: error }).status(400);
    }
};

controller.editarCliente = async (request,res) => {

    const { idCliente, 
        nombresCliente,
        apellidosCliente,
        cedulaProducto,
        rucProducto,
        emailProducto } = req.body;
    try {

        const [result] = await db.execute(`update producto set nombres=?,apellidos=?,cedula=?,ruc=?,email=? where id_cliente = ?`,
                                     [nombresCliente, apellidosCliente,cedulaProducto,rucProducto,emailProducto,idCliente]);

        return res.send({ message: 'Cliente actualizado', status:"success", data:[], error: [] }).status(200);

    } catch (error) {
        return res.send({ message: error, status:"error", data:[], error: error }).status(400);
    }
};

controller.eliminarCliente = async (request,res) => {

    const { idCliente} = req.body;
    try {

        const [result] = await db.execute(`detele from cliente where id_cliente = ?`,[idCliente]);

        return res.send({ message: 'Cliente eliminado con exito', status:"success", data:[], error: [] }).status(200);

    } catch (error) {
        return res.send({ message: error, status:"error", data:[], error: error }).status(400);
    }
};

module.exports = controller;
