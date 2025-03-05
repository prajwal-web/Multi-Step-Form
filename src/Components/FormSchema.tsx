import * as yup from "yup";
export const personalInformation = yup.object({
  name: yup.string().min(3, "At least 3 characters").required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Must be 10 digits")
    .required("Required"),
  dob: yup.string().required("Required"),
});

export const addressDetails = yup.object({
  city: yup.string().required("Required"),
  state: yup.string().required("Required"),
  zip: yup
    .string()
    .matches(/^\d{6}$/, "Must be 5 digits")
    .required("Required"),
});

export const accountSetup = yup.object({
  username: yup.string().min(4, "At least 4 characters").required("Required"),
  password: yup
    .string()
    .min(6, "At least 6 characters")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[^a-zA-Z0-9]/, "Must contain a special character")
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
});
