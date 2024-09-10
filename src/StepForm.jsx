import React, { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import AddressDetails from "./components/AddressDetails";
import PaymentDetails from "./components/PaymentDetails";
import Review from "./components/Review";
import "./App.css";

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    cardNumber: "",
    cardName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="step-form">
      {step === 1 && (
        <PersonalDetails
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      )}
      {step === 2 && (
        <AddressDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      )}
      {step === 3 && (
        <PaymentDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      )}
      {step === 4 && (
        <Review
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          formData={formData}
        />
      )}
    </div>
  );
};

export default StepForm;
