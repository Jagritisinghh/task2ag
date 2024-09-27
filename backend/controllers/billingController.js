const BillingDetails = require('../models/Billing');


// Function to create dummy billing, invoice, and payment data
exports.createDummyData = async (req, res) => {
  try {
    const recruiterId = '63f4b9c8c8e8a2b23e9fcb88'; // Example recruiter ID, replace with actual recruiter ID from your database

    // Create dummy billing details
    const billingDetails = new BillingDetails({
      recruiterId,
      billingName: 'John Doe',
      streetAddress: '123 Main St',
      apartment: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'USA',
      paymentMethod: 'Bank transfer',
    });
    await billingDetails.save();

  
    res.status(201).json({
      message: 'Dummy billing data created successfully!',
      billingDetails,
    
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating dummy data', error });
  }
};



// Controller function to update billing details without ID
exports.updateBillingDetails = async (req, res) => {
  const { billingName, streetAddress, apartment, city, state, zip, country, paymentMethod } = req.body;

  try {
    // Find the first (and only) billing details entry in the database
    const billingDetails = await BillingDetails.findOne();

    if (!billingDetails) {
      return res.status(404).json({ message: 'Billing details not found' });
    }

    // Update the billing details
    billingDetails.billingName = billingName;
    billingDetails.streetAddress = streetAddress;
    billingDetails.apartment = apartment;
    billingDetails.city = city;
    billingDetails.state = state;
    billingDetails.zip = zip;
    billingDetails.country = country;
    billingDetails.paymentMethod = paymentMethod;

    // Save the updated details
    await billingDetails.save();

    res.json({ message: 'Billing details updated successfully', billingDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
