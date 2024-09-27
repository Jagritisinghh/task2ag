import React from 'react';
import { Section, InvoiceRow, Label } from './BillingStyled';

const PaymentHistory = () => {
  const payments = [
    { date: '07/20/2024', amount: '$150', method: 'PayPal', status: 'Processed' },
    { date: '06/20/2024', amount: '$100', method: 'Bank Transfer', status: 'Processed' },
  ];

  return (
    <Section>
      <Label>Payment History</Label>
      {payments.map((payment, index) => (
        <InvoiceRow key={index}>
          <span>{payment.date}</span>
          <span>{payment.amount}</span>
          <span>{payment.method}</span>
          <span>{payment.status}</span>
        </InvoiceRow>
      ))}
    </Section>
  );
};

export default PaymentHistory;
