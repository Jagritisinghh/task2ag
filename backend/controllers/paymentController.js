const Payment = require('../models/Payment');

// Function to create dummy billing, invoice, and payment data
exports.createDummyPayment = async (req, res) => {
  try {
    const recruiterId = '63f4b9c8c8e8a2b23e9fcb88'; // Example recruiter ID, replace with actual recruiter ID from your database


    // Create dummy payments
    const payment1 = new Payment({
      recruiterId,
      paymentDate: new Date('2024-09-16'),
      paymentAmount: 5000,
      paymentMethod: 'Bank transfer',
      paymentStatus: 'processed',
    });

    const payment2 = new Payment({
      recruiterId,
      paymentDate: new Date('2024-09-22'),
      paymentAmount: 10000,
      paymentMethod: 'PayPal',
      paymentStatus: 'pending',
    });

    await payment1.save();
    await payment2.save();

    res.status(201).json({
      message: 'payment data created successfully!',
      payments: [payment1, payment2],
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating dummy data', error });
  }
};
