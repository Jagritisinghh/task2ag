const express = require('express');
const { createDummyPayment } = require('../controllers/paymentcontroller');
const router = express.Router();

router.get('/payment', createDummyPayment);

module.exports = router;
