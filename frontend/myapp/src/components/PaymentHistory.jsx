import React, { useEffect, useState } from 'react';
import { Section, PaymentRow, Label } from './BillingStyled';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch('https://task2ag-1.onrender.com/api/payment');
        console.log("payment res",response);
         // Replace with correct API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch payments');
        }
        const data = await response.json();
        setPayments(data.payments);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Section>
      <Label>Payment History</Label>

      {payments.length > 0 ? (
        payments.map((payment, index) => (
          <PaymentRow key={index}>
            <span>{formatDate(payment.paymentDate)}</span>
            <span>{payment.paymentAmount}</span>
            <span>{payment.paymentMethod}</span>
            <span>{payment.paymentStatus}</span>
          </PaymentRow>
        ))
      ) : (
        <p>No payments available.</p>
      )}
    </Section>
  );
};

export default PaymentHistory;
