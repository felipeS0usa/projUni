require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 7000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Conexão com o banco de dados
const conn = require('./config/config');
conn();

// Rotas da aplicação
// const routes = require('./routes/router');
// app.use('/v1/api', routes);

app.listen(port, () => {
    console.log('Running Server');
});