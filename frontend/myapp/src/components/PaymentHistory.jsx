import React, { useEffect, useState } from 'react';
import { Section, InvoiceRow, Label } from './BillingStyled';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch payment data from the backend
    const fetchPayments = async () => {
      try {
        const response = await fetch('https://task2ag-1.onrender.com/api/payment'); // Adjust the API endpoint as needed
        if (!response.ok) {
          throw new Error('Failed to fetch payments');
        }
        const data = await response.json();
        console.log("payment",data.payments);
        setPayments(data.payments); // Assuming 'payments' is an array from the response
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments(); // Fetch the data when the component mounts
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Section>
      <Label>Payment History</Label>
    
      {payments.length > 0 ? (
        payments.map((payment, index) => (
          <InvoiceRow key={index}>
            <span>{formatDate(payment.paymentDate)}</span> {/* Adjust according to your API response */}
            <span>{payment.paymentAmount}</span> {/* Adjust according to your API response */}
            <span>{payment.paymentMethod}</span> {/* Adjust according to your API response */}
            <span>{payment.paymentStatus}</span> {/* Adjust according to your API response */}
          </InvoiceRow>
        ))
      ) : (
        <p>No payments available.</p>
      )}
    </Section>
  );
};

// Helper function to format dates (can reuse the same one from InvoiceHistory)
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

export default PaymentHistory;
