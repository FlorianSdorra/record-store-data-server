const express = require('express');
const router = express.Router();

const {
    getOrders,
    addOrder,
    getOrder,
    deleteOrder,
    updateOrder
} = require('../controllers/ordersController');

/** GET  */
router
    .route('/')
    .get(getOrders)
    .post(addOrder);

/** POST  */
router
    .route('/:id')
    .get(getOrder)
    .delete(deleteOrder)
    .put(updateOrder);

module.exports = router;