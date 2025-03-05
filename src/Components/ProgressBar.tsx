import { Step, StepLabel, Stepper } from "@mui/material";
import { useContext } from "react";
import { FormContext } from "../Context/FormContext";

const steps = [
  "Personal Information",
  "Address Details",
  "Account Setup",
  "Review & Submit",
];

export const ProgressBar = () => {
  const { step } = useContext(FormContext);

  return (
    <Stepper activeStep={step - 1}>
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
