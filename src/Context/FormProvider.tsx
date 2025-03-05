import { useState, ReactNode } from "react";
import { FormContext } from "./FormContext";
import { FormData } from "./FormContext";

const defaultValues: FormData = {
  name: "",
  email: "",
  phone: "",
  dob: "",
  city: "",
  state: "",
  username: "",
  password: "",
  confirmPassword: "",
};
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = useState<FormData>(defaultValues);
  return (
    <FormContext.Provider value={{ step, setStep, formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
