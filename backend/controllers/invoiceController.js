const Invoice = require('../models/Invoice');

// Function to create dummy billing, invoice, and payment data
exports.createDummyInvoice = async (req, res) => {
  try {
    const recruiterId = '63f4b9c8c8e8a2b23e9fcb88'; // Example recruiter ID, replace with actual recruiter ID from your database

    // Create dummy invoices
    const invoice1 = new Invoice({
      recruiterId,
      invoiceDate: new Date('2024-09-15'),
      invoiceAmount: 5000,
      paymentStatus: 'paid',
      invoiceLink: 'https://example.com/invoice1.pdf',
    });

    const invoice2 = new Invoice({
      recruiterId,
      invoiceDate: new Date('2024-09-20'),
      invoiceAmount: 10000,
      paymentStatus: 'pending',
      invoiceLink: 'https://example.com/invoice2.pdf',
    });

    await invoice1.save();
    await invoice2.save();

  

    res.status(201).json({
      message: 'invoice data created successfully!',
      invoices: [invoice1, invoice2],
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating dummy data', error });
  }
};
