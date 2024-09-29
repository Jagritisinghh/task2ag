const express = require('express');
const { createDummyPayment } = require('../controllers/paymentController');
const router = express.Router();

router.get('/payment', createDummyPayment);

module.exports = router;
