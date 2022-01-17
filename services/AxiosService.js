const axios = require('axios');
const { log } = require('console');
const querystring = require('querystring');
const Data = require('../model/Data');
require('dotenv').config();


exports.getFiles = async (req, res, next) => {
    return await axios.get('https://magellan-okgo-demo.osc-fr1.scalingo.io/files/ao1.json', {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': process.env.TOKEN
        }
    })
}
