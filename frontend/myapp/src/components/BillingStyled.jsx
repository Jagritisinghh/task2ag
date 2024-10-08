import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
//   align-items:center;
  background-color: #ebecf1;  
  color: #333;  
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #333; 
  text-align: center;
  font-family:"Roboto";
  margin-bottom: 20px;
`;

export const Section = styled.section`
  margin-bottom: 30px;
  background-color:white;
  border-radius:10px;
  border:none;
  padding:20px;
`;

export const Label = styled.label`
  font-size: 1rem;
  display: block;
  font-weight:500;
  color: #4c4e58;  /* Slightly darker text for labels */
`;

export const Name=styled.p`
font-size: 1rem;
border-bottom:solid black 1px;
`

export const InputField = styled.input`
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  margin-top:10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;  /* White input fields */
  color: #333;
`;

export const Button = styled.button`
  background-color: #4a90e2;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self:center;
  &:hover {
    background-color: #357abd;
  }
`;

export const InvoiceRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: 0.9rem;
`;

export const PaymentRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  span {
    width: 25%;
  }
`;
