const express = require('express');
const router = express.Router();
const DataController = require('../controller/data');

router.post('/', DataController.getAndSaveFile);
router.get('/', DataController.getFiles);

module.exports = router;