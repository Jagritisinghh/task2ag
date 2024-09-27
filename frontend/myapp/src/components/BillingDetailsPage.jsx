import React from 'react';
import BillingInfo from './BillingInfo';
import InvoiceHistory from './InvoiceHistory';
import PaymentHistory from './PaymentHistory';
import { Container, Title, Button } from './BillingStyled';
import { useNavigate } from 'react-router-dom';

const BillingDetailsPage = () => {
    const navigate = useNavigate();

    const handleEditClick = () => {
      navigate('/billing/edit'); 
    };

  return (
    <Container>
      <Title>Billing Details</Title>
      <BillingInfo />
      <InvoiceHistory />
      <PaymentHistory />
      <Button onClick={handleEditClick}>Edit Billing Details</Button>
    </Container>
  );
};

export default BillingDetailsPage;
