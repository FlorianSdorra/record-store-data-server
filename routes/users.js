const express = require('express');
const router = express.Router();
const {
  getUsers,
  addUser
} = require('../controllers/usersController');

/** GET all the records */
router.get('/', getUsers);

/** POST a new record */
router.post('/', addUser);

module.exports = router;