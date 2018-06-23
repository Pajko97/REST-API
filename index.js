const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

//conect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api',routes);

app.use((err,req,res,next) => {
    res.status(422).send({error:err.message});

});

app.listen(process.env.port || 4000, function() {
    console.log('Naculjili smo usi')
});