const express = require('express');
const router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('data/db.json');

const {
    getRecords,
    addRecord,
    getRecord,
    deleteRecord,
    updateRecord
} = require('../controllers/recordsController');


/*** GET */
router
    .route('/')
    .get(getRecords)
    .post(addRecord);

/**
 * POST 
 */
router
    .route('/:id')
    .get(getRecord)
    .delete(deleteRecord)
    .put(updateRecord);

module.exports = router;