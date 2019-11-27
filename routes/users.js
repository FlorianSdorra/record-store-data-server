const express = require('express');
const router = express.Router();
const {
  userValidationRules,
  userValidationErrorHandling
} = require('../validators/validator');

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
  .post(userValidationRules(), userValidationErrorHandling, addUser);

/** POST */
router
  .route('/:id')
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser);

module.exports = router;