import React from "react";

const AddressDetails = ({ nextStep, prevStep, handleChange, formData }) => {
  const { address, city } = formData;

  const handleNext = (e) => {
    e.preventDefault();
    if (address && city) {
      nextStep();
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <form>
      <h2>Address Details</h2>
      <input
        type="text"
        name="address"
        placeholder="Enter Address"
        value={address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="Enter City"
        value={city}
        onChange={handleChange}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </form>
  );
};

export default AddressDetails;
