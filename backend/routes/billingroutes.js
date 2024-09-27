const express = require('express');
const { createDummyData, updateBillingDetails } = require('../controllers/billingController');
const router = express.Router();

router.get('/billing-details', createDummyData);
router.put('/update-billing-details', updateBillingDetails);

module.exports = router;
