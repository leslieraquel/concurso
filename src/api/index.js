const bodyParser = require('body-parser');
const { Router } = require('express');
const cliente = require("./cliente/routes.js");


const router = Router();

//Raiz
router.post('/', (req, res) => {   
    const {body} = req;
    return res.status(200).send({ message: '', status:"success", data:'Hola mundo', error: [] })
})

module.exports = router;