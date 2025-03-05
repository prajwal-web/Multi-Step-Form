/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../Context/FormContext";
import { Box, Button, Container, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalInformation } from "./FormSchema";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const PersonalInfo = () => {
  const { formData, setFormData, setStep, step } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(personalInformation),
  });

  const onSubmit = (data: any) => {
    setFormData(data);
    setStep(2);
    console.log(data);
  };

  return (
    <Container sx={{ marginTop: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Full Name"
          {...register("name")}
          error={!!errors.name}
          fullWidth
          margin="normal"
          helperText={errors.name?.message}
        />
        <TextField
          label="Email"
          {...register("email")}
          error={!!errors.email}
          fullWidth
          margin="normal"
          helperText={errors.email?.message}
        />
        <TextField
          label="Phone"
          {...register("phone")}
          error={!!errors.phone}
          fullWidth
          margin="normal"
          helperText={errors.phone?.message}
        />
        <TextField
          type="date"
          {...register("dob")}
          error={!!errors.dob}
          fullWidth
          margin="normal"
          helperText={errors.dob?.message}
        />
        <Box display="flex" justifyContent="space-between">
          <Button
            variant="text"
            onClick={() => setStep((prev: number) => prev - 1)}
            sx={{ mt: 1 }}
            disabled={step === 1}
            startIcon={<ArrowBack />}
          >
            Previous
          </Button>
          <Button
            type="submit"
            variant="text"
            sx={{ mt: 1 }}
            endIcon={<ArrowForward />}
          >
            Next
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default PersonalInfo;
