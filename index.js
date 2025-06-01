const express = require('express');
const app = express();
const morgan = require('morgan');
// const routerSearchReceipt = require("./api/search-receipt/routes.js");
// const routerDownloads = require("./api/downloads/routes.js");
const cors = require('cors');



app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middleware
app.use(express.urlencoded({extended:true,limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(morgan('dev'));
app.use(cors());


app.use(require('./api/index'));

app.use('/api/search-receipt', routerSearchReceipt);
app.use('/api/downloads', routerDownloads);

app.listen(app.get('port'),() => {
    console.log(`Server listening on port ${app.get('port')}`);
});