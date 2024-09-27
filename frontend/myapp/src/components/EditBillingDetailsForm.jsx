import React, { useState } from 'react';
import { Container, Title, Label, InputField, Button, Section, ErrorMsg } from './BillingStyled';
import { useNavigate } from 'react-router-dom';
import { useBilling } from "../context/BillingContext";

const EditBillingDetailsForm = () => {
  const { billingDetails, setBillingDetails } = useBilling();
  const [billingName, setBillingName] = useState(billingDetails.billingName);
  const [streetAddress, setStreetAddress] = useState(billingDetails.streetAddress);
  const [apartment, setApartment] = useState(billingDetails.apartment);
  const [city, setCity] = useState(billingDetails.city);
  const [state, setState] = useState(billingDetails.state);
  const [zip, setZip] = useState(billingDetails.zip);
  const [country, setCountry] = useState(billingDetails.country);
  const [paymentMethod, setPaymentMethod] = useState(billingDetails.paymentMethod);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSave = async () => {
    if (billingName.length > 50) {
      setError('Billing name cannot exceed 50 characters');
    } else {
      setError('');
      const updatedDetails = {
        billingName,
        streetAddress,
        apartment,
        city,
        state,
        zip,
        country,
        paymentMethod,
      };

      try {
        // Make an API call to update billing details in the backend
        const response = await fetch('http://localhost:3006/api/update-billing-details', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedDetails),
        });

        if (!response.ok) {
          throw new Error('Failed to update billing details');
        }

        // If successful, update the context and navigate
        setBillingDetails(updatedDetails);
        console.log('Billing details saved');
        navigate('/'); // Navigate back to the desired page
      } catch (error) {
        setError('Error updating billing details: ' + error.message);
      }
    }
  };

  return (
    <Container>
      <Title>Edit Billing Details</Title>

      <Section>
        <Label>Billing Name</Label>
        <InputField
          type="text"
          value={billingName}
          onChange={(e) => setBillingName(e.target.value)}
        />
      </Section>

      <Section>
        <Label>Street Address</Label>
        <InputField
          type="text"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
        <Label>Apartment/Unit Number</Label>
        <InputField
          type="text"
          value={apartment}
          onChange={(e) => setApartment(e.target.value)}
        />
      </Section>

      <Section>
        <Label>City</Label>
        <InputField
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Label>State/Province</Label>
        <InputField
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <Label>Zip/Postal Code</Label>
        <InputField
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        <Label>Country</Label>
        <InputField
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </Section>

      <Section>
        <Label>Payment Method</Label>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="Bank transfer">Bank transfer</option>
          <option value="PayPal">PayPal</option>
          <option value="Check">Check</option>
          <option value="Other">Other</option>
        </select>
      </Section>

      {error && <ErrorMsg>{error}</ErrorMsg>}
      
      <Button onClick={handleSave}>Save</Button>
    </Container>
  );
};

export default EditBillingDetailsForm;
