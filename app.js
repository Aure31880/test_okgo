const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.json({ message: 'Test request !' });
    next();
})


module.exports = app;