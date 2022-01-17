const express = require('express');
const Data = require('../model/Data.js');
const AxiosService = require('../services/AxiosService');

exports.getAndSaveFile = (req, res, next) => {
    AxiosService.getFiles()
        .then(result => {
            const dataFetch = result.data;
            const dataParse = JSON.stringify(dataFetch);
            console.log(dataParse);
            const data = new Data({
                id: dataParse.id,
                file: dataParse
            });

            data.save()
                .then(() => res.status(201).json({ message: 'Requète reçue !' }))
                .catch(error => res.status(400).json(error));
        })

}

exports.getFiles = (req, res, next) => {

}

