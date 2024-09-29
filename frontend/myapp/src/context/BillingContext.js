import React, { createContext, useContext, useState, useEffect } from 'react';

const BillingContext = createContext();

export const useBilling = () => useContext(BillingContext);

export const BillingProvider = ({ children }) => {
  const [billingDetails, setBillingDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBillingDetails = async () => {
      try {
        const response = await fetch('https://task2ag-1.onrender.com/api/billing-details'); // Adjust the endpoint as needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parse the JSON from the response
        setBillingDetails(data.billingDetails); // Set the billing details state
        console.log("Fetched data:", data.billingDetails); // Log the fetched data
      } catch (error) {
        console.error('Error fetching billing details:', error);
        setError(error); 
      } finally {
        setLoading(false); 
      }
    };

    fetchBillingDetails(); 
  }, []);

  return (
    <BillingContext.Provider value={{ billingDetails,setBillingDetails, loading, error }}>
      {children}
    </BillingContext.Provider>
  );
};
