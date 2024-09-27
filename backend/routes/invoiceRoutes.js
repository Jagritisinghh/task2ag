const express = require('express');
const { createDummyInvoice } = require('../controllers/invoiceController');
const router = express.Router();

router.get('/invoices', createDummyInvoice);

module.exports = router;
