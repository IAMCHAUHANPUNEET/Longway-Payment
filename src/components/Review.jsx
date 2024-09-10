import React from "react";

const PaymentDetails = ({ nextStep, prevStep, handleChange, formData }) => {
  const { cardNumber, cardName } = formData;

  const handleNext = (e) => {
    e.preventDefault();
    if (cardNumber && cardName) {
      nextStep(); // Move to next step
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <form>
      <h2>Payment Details</h2>
      <input
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        value={cardNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cardName"
        placeholder="Cardholder Name"
        value={cardName}
        onChange={handleChange}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </form>
  );
};

export default PaymentDetails;
