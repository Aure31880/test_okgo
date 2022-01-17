const express = require('express');
const Data = require('../model/Data.js');
const AxiosService = require('../services/AxiosService');

exports.getAndSaveFile = (req, res, next) => {
    AxiosService.getFiles()
        .then(result => {
            const dataFetch = result.data;
            const dataString = JSON.stringify(dataFetch);
            console.log(dataString);
            const data = new Data({
                idData: dataFetch.id,
                file: dataString
            });

            data.save()
                .then(() => res.status(201).json({ message: 'Requète reçue !' }))
                .catch(error => res.status(400).json(error));
        })

}

exports.getFiles = (req, res, next) => {
    Data.findOne({ id: req.params.idData })
        .then(file => res.status(200).json(file))
        .catch(error => res.status(400).json(error));
}

exports.updateFile = (req, res, next) => {
    Data.updateOne({ _id: req.params.idData }, { ...req.body, _id: req.params.idData })
        .then(() => res.status(200).json({ message: 'File modifié !' }))
        .catch(error => res.status(400).json({ error }))
}

exports.deleteFile = (req, res, next) => {
    Data.findOne({ id: req.params.idData })
        .then(result => {
            console.log(result);
            if (!result) {
                return res.status(404).json({ message: "Le fichier n'existe pas" })
            }
            Data.deleteOne({ id: req.params.idData })
                .then(() => res.status(201).json({ message: 'Fichier supprimer !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json(error))
}