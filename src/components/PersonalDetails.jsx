import React from "react";

const PersonalDetails = ({ nextStep, handleChange, formData }) => {
  const { name, email } = formData;

  const handleNext = (e) => {
    e.preventDefault();
    if (name && email) {
      nextStep(); 
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <form>
      <h2>Personal Details</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={email}
        onChange={handleChange}
      />
      <button onClick={handleNext}>Next</button>
    </form>
  );
};

export default PersonalDetails;
