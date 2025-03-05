import { useContext } from "react";
import { FormContext } from "../Context/FormContext";
import PersonalInfo from "./PersonalInformation";
import AddressDetails from "./AddressDetails";
import AccSetup from "./AccountSetup";
import ReviewSubmit from "./ReviewSubmit";
import ThankUPage from "./ThankuPage";
import { ProgressBar } from "./ProgressBar";

const MultiStepForm = () => {
  const { step } = useContext(FormContext);
  return (
    <>
      {step !== 5 && <ProgressBar />}
      {step === 1 && <PersonalInfo />}
      {step === 2 && <AddressDetails />}
      {step === 3 && <AccSetup />}
      {step === 4 && <ReviewSubmit />}
      {step === 5 && <ThankUPage />}
    </>
  );
};

export default MultiStepForm;
