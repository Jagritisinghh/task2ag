const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  recruiterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recruiter',
    required: true,
  },
  billingName: { type: String, required: true, maxLength: 50 },
  streetAddress: { type: String, required: true, maxLength: 100 },
  apartment: { type: String, maxLength: 20 },
  city: { type: String, required: true, maxLength: 50 },
  state: { type: String, required: true, maxLength: 50 },
  zip: { type: String, required: true, maxLength: 20 },
  country: { type: String, required: true, maxLength: 50 },
  paymentMethod: { type: String, required: true },
}, { timestamps: true });

const BillingDetails = mongoose.model('BillingDetails', billingSchema);
module.exports = BillingDetails;
