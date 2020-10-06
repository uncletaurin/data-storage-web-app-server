const express = require('express');
const router = express.Router();
const multiparty = require('multiparty');
const dataStorageController = require('../controllers/dataStorageController');

router.get('/', (req, res) => {
  // res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    "APIs": {
      "GET": {
        "APIs-list" : "/api/data-storage",
        "meta-data-content": "/api/data-storage/meta-data-content",
        "files-stats": "/api/data-storage/files-stats",
        "download-file": "/api/data-storage/download-file/:id",
      },
      "POST": {
        "upload-file": "/api/data-storage/upload-file",
        "rename-uploaded-file": "/api/data-storage/rename-uploaded-file/:id",
        "delete-uploaded-file": "/api/data-storage/delete-uploaded-file/:id"
      }
    }
  });
});

router.get('/meta-data-content', dataStorageController.getFilesMetaDataContent);

router.get('/files-stats', dataStorageController.getFilesDataStats);

router.get('/download-file/:id', dataStorageController.downloadFile);

router.post('/upload-file', dataStorageController.uploadFile);

router.post('/rename-uploaded-file/:id', dataStorageController.renameFile);

router.post('/delete-uploaded-file/:id', dataStorageController.deleteFile);

module.exports = router;
