import React from 'react';
import { Section, Label, Name } from './BillingStyled';
import { useBilling } from '../context/BillingContext';

const BillingInfo = () => {
  const { billingDetails, loading, error } = useBilling();

  if (loading) {
    return <p>Loading...</p>; // Display a loading message while fetching data
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Display an error message if there's an error
  }

  if (!billingDetails) {
    return <p>No billing details available.</p>; // Display message if billingDetails is null or undefined
  }

  return (
    <Section>
      <Label>Billing Name</Label>
      <Name>{billingDetails.billingName}</Name>

      <Label>Billing Address</Label>
      <Name>
        {billingDetails.streetAddress}, {billingDetails.apartment}, {billingDetails.city}, {billingDetails.state}, {billingDetails.zip}, {billingDetails.country}
      </Name>

      <Label>Payment Method</Label>
      <Name>{billingDetails.paymentMethod}</Name>
    </Section>
  );
};

export default BillingInfo;
