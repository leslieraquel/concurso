const express = require('express');
const app = express();
const morgan = require('morgan');
const cliente = require("./api/cliente/routes.js");
const producto = require("./api/producto/routes.js");
const cors = require('cors');



app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middleware
app.use(express.urlencoded({extended:true,limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(morgan('dev'));
app.use(cors());


app.use(require('./api/index'));

app.use('/api/cliente', cliente);
app.use('/api/producto', producto);

app.listen(app.get('port'),() => {
    console.log(`Server listening on port ${app.get('port')}`);
});