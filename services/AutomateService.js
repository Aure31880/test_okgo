const dataController = require('../controller/data');
const axios = require('axios');
const { post } = require('../app');

async function request() {
    var getResult = await axios.post('http://localhost:3000/api/file')
        .then(result => {
            console.log(result);
        })
    var getResult2 = await axios.get('http://localhost:3000/api/file')
        .then(result => {
            console.log(result)
        })

}

request();