const controller = {}
const db = require('../../config/db');

controller.listarProducto = async (request,res) => {

    const {body} = request;
    try {

        const [rows] = await db.execute(`SELECT codigo,nombre,descripcion,talla,color FROM producto`);

      const data = rows.map(row => ({
        codigoProducto: row.codigo,
        nombreProducto: row.nombre,
        descripcionProducto: row.descripcion,
        tallaProducto: row.descripcion,
        colorProducto: row.descripcion
      }));
        return res.send({ message: 'Consulta generada con exito', status:"success", data:data, error: [] }).status(200);

    } catch (error) {
        return res.send({ message: error, status:"error", data:[], error: error }).status(400);
    }
};

controller.editarProducto = async (request,res) => {

    const { codigoProducto, nombreProducto,descripcionProducto,tallaProducto,colorProducto } = req.body;
    try {

        const [result] = await db.execute(`update producto set nombre=?,descripcion=?,talla=?,color=? where codigo = ?`,
                                     [nombreProducto, descripcionProducto,tallaProducto,colorProducto,codigoProducto]);

        return res.send({ message: 'Producto actualizado', status:"success", data:[], error: [] }).status(200);

    } catch (error) {
        return res.send({ message: error, status:"error", data:[], error: error }).status(400);
    }
};

controller.eliminarProducto = async (request,res) => {

    const { codigoProducto} = req.body;
    try {

        const [result] = await db.execute(`detele from producto where codigo = ?`,[codigoProducto]);

        return res.send({ message: 'Producto eliminado con exito', status:"success", data:[], error: [] }).status(200);

    } catch (error) {
        return res.send({ message: error, status:"error", data:[], error: error }).status(400);
    }
};

module.exports = controller;
