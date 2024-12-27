import React from 'react';
import '../styles/FeeCard.css';

function FeeCard({ title, amount, paid, balance, isPaid }) {
  return (
    <div className={`fee-card ${isPaid ? 'paid' : 'unpaid'}`}>
      <h3>{title}</h3>
      <div className="amount">₹{amount}</div>
      <p>Payable Fee: ₹{amount}</p>
      <p>Paid: ₹{paid}</p>
      <p>Balance: ₹{balance}</p>
      {isPaid ? (
        <button className="paid-button">PAID</button>
      ) : (
        <div>
          <button className="pay-button">PAY NOW</button>
        </div>
      )}
    </div>
  );
}

export default FeeCard;