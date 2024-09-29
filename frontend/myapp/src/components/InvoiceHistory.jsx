import React, { useEffect, useState } from 'react';
import { Section, InvoiceRow, Label } from './BillingStyled';


const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

const InvoiceHistory = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch invoice data from the backend
    const fetchInvoices = async () => {
      try {
        const response = await fetch('https://task2ag-1.onrender.com/api/invoices'); // Adjust the API endpoint as needed
        if (!response.ok) {
          throw new Error('Failed to fetch invoices');
        }
        const data = await response.json();
        console.log("invoice",data.invoices);
        setInvoices(data.invoices); // Assuming 'invoices' is an array from the response
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInvoices(); // Fetch the data when the component mounts
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Section>
      <Label>Invoice History</Label>
    
      {invoices.length > 0 ? (
        invoices.map((invoice, index) => (
          <InvoiceRow key={index}>
            <span>{formatDate(invoice.invoiceDate)}</span>
            <span>{invoice.invoiceAmount}</span>
            <span>{invoice.paymentStatus}</span>
            <a href={invoice.invoiceLink}>Download PDF</a>
          </InvoiceRow>
        ))
      ) : (
        <p>No invoices available.</p>
      )}
    </Section>
  );
};

export default InvoiceHistory;
