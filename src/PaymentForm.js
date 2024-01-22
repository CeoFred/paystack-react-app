// PaymentForm.js
import React, { useState } from 'react';
import {PaystackButton} from 'react-paystack';

const PaymentForm = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [reference, setReference] = useState('');
  const [publicKey, setPublicKey] = useState('');

  const onSuccess = (response) => {
    console.log('Payment successful', response);
    // You can handle success actions here
  };

  const onClose = () => {
    console.log('Payment closed');
    // You can handle actions when the payment modal is closed
  };

  const onChange = (event) => {
    console.log('Payment form change', event);
    // You can handle actions on form input changes if needed
  };

  const config = {
    email,
    amount: amount * 100, // Paystack amount is in kobo (multiply by 100 for Naira)
    publicKey,
    text: 'Pay Now',
    onSuccess,
    onClose,
  };

  if (reference) {
    config.reference = reference;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Paystack Payment</h2>
      <form onSubmit={(e) => e.preventDefault()} style={styles.form}>
        <label style={styles.label}>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
        <br />
        <label style={styles.label}>Amount (NGN):</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} style={styles.input} required />
        <br />
        <label style={styles.label}>Optional Transaction Reference:</label>
        <input type="text" value={reference} onChange={(e) => setReference(e.target.value)} style={styles.input} />
        <br />
        <label style={styles.label}>Paystack Public Key:</label>
        <input type="text" value={publicKey} onChange={(e) => setPublicKey(e.target.value)} style={styles.input} required />
        <br />
        <PaystackButton {...config} style={styles.button} />
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '8px 0',
    color: '#555',
  },
  input: {
    padding: '8px',
    marginBottom: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default PaymentForm;
