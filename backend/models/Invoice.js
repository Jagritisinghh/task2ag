const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  recruiterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recruiter',
    required: true,
  },
  invoiceDate: { type: Date, required: true },
  invoiceAmount: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['paid', 'pending', 'cancelled'], default: 'pending' },
  invoiceLink: { type: String, required: true },  // A link to the invoice PDF
}, { timestamps: true });

const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;
