const express = require('express');
const Data = require('../model/Data.js');
const AxiosService = require('../services/AxiosService');

exports.getFile = (req, res, next) => {
    AxiosService.getFiles()
        .then(result => {
            console.log(result.data);
            res.send(result.data)
        })
} 