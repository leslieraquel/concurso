const { Router } = require("express");// express, handler
const controller  = require("./controller")
const producto = Router()



producto.post('/listar-producto',controller.listarProducto)
producto.get('/editar-producto',controller.editarProducto)
producto.get('/eliminar-producto',controller.eliminarProducto)


module.exports = producto;