/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  dob: string;
  city: string;
  state: string;
  username: string;
  password: string;
  confirmPassword: string;
}
interface FormContextType {
  formData: FormData;
  setFormData: (data: any) => void;
  step: number;
  setStep: (step: number) => void;
}
export const FormContext = createContext<FormContextType | undefined>(
  undefined
);
