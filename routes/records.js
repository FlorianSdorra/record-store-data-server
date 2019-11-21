const express = require('express');
const router = express.Router();

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