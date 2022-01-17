const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const AxiosService = require('./services/AxiosService');
const DataRouter = require('./router/data');
require('dotenv').config();

const app = express();


// Bdd connect
mongoose.connect(process.env.SECRET_DB,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

// app.use(DataRouter);
app.use('/api/file', DataRouter);

module.exports = app;