const { Router } = require("express");// express, handler
const controller  = require("./controller")
const cliente = Router()



cliente.post('/listar-cliente',controller.listarcliente)
cliente.get('/editar-cliente',controller.editarCliente)
cliente.get('/eliminar-cliente',controller.eliminarCliente)


module.exports = cliente;