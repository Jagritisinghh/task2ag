const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  recruiterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recruiter',
    required: true,
  },
  paymentDate: { type: Date, required: true },
  paymentAmount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },  // e.g., 'Bank transfer', 'PayPal', etc.
  paymentStatus: { type: String, enum: ['processed', 'pending', 'failed', 'cancelled'], default: 'pending' },
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
