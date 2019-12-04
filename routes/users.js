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
  updateUser,
  authenticateUser
} = require('../controllers/usersController');

/** GET */
router
  .route('/')
  .get(getUsers)
  .post(userValidationRules(), userValidationErrorHandling, addUser);

router.route('/me').get(authenticateUser);

/** POST */
router
  .route('/:id')
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser);

module.exports = router;