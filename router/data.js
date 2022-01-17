const express = require('express');
const router = express.Router();
const DataController = require('../controller/data');

router.get('/', DataController.getFile);

module.exports = router;