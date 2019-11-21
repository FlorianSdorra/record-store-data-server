const express = require('express');
const router = express.Router();

const {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser
} = require('../controllers/usersController');

/** GET */
router
  .route('/')
  .get(getUsers)
  .post(addUser);

/** POST */
router
  .route('/:id')
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser);

module.exports = router;