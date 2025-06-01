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

module.exports = controller;
