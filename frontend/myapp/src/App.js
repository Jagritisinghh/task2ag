import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BillingDetailsPage from './components/BillingDetailsPage';
import EditBillingDetailsForm from './components/EditBillingDetailsForm';
import { BillingProvider } from './context/BillingContext';

function App() {
  return (
    <BillingProvider>
    <Router>
      <Routes>
        <Route path="/billing/edit" element={<EditBillingDetailsForm />} />
        <Route path="/" element={<BillingDetailsPage />} />
      </Routes>
    </Router>
  </BillingProvider>
  );
}

export default App;
