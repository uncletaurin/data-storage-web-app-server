const express = require('express');
const router = express.Router();
const dataStorageController = require('../controllers/dataStorageController');
const { Readable } = require('stream');

router.get('/', (req, res) => {
  res.json({
    "APIs": {
      "POST": {
        "upload-file": "/api/data-storage/upload-file"
      },
      "GET": {
        "APIs main page" : "/api/data-storage"
      }
    }
  });
});

router.post('/upload-file', dataStorageController.uploadFile);

module.exports = router;
