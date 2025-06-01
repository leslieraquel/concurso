const { Router } = require("express");// express, handler
const controller  = require("./controller")
const cliente = Router()



cliente.get('/listar-producto',controller.listarcliente)
// routerSearchReceipt.post('/search-receipt-numbercard',controller.searchReceiptNumberCard )
// routerSearchReceipt.post('/validate-xml',controller.validateXml)

module.exports = cliente;