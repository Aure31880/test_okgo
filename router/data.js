const express = require('express');
const router = express.Router();
const DataController = require('../controller/data');

router.get('/', DataController.getFiles);
router.get('/:id', DataController.getFileJsonToXml);
router.post('/', DataController.getAndSaveFile);
router.put('/:id', DataController.updateFile);
router.delete('/:id', DataController.deleteFile);

module.exports = router;