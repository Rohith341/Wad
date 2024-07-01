import React, { useState, useEffect } from 'react';

const Payment = ({ cart }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState(0);

  // Calculate total amount from cart items
  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity; // Calculate total price per item
    });
    setAmount(total);
  }, [cart]);

  const handlePayment = async (e) => {
    e.preventDefault();
    
    // Implement your payment gateway integration here
    // Example: Using fetch to mock payment process
    try {
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          cardNumber,
          expiry,
          cvv,
        }),
      });

      const data = await response.json();
      console.log('Payment successful:', data);
      // Handle success, update UI, etc.
    } catch (error) {
      console.error('Error processing payment:', error);
      // Handle errors, show user a message, etc.
    }
  };

  return (
    <div className="container my-5">
      <h2>Payment Details</h2>
      <div className="mb-3">
        <h4>Order Summary:</h4>
        {cart.map(item => (
          <div key={item.id}>
            <p>
              <strong>{item.title}</strong> - {item.quantity} x {item.price} ₹
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handlePayment}>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Total Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount} // Display total amount dynamically
            disabled // Disable editing of amount
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expiry" className="form-label">Expiry (MM/YY)</label>
          <input
            type="text"
            className="form-control"
            id="expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input
            type="text"
            className="form-control"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
