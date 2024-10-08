const express = require('express');
const { createDummyInvoice,generateInvoicePDF} = require('../controllers/invoiceController');
const router = express.Router();

router.get('/invoices', createDummyInvoice);
router.get('/invoices/download/:id', generateInvoicePDF);
module.exports = router;
