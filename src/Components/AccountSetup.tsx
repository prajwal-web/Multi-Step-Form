/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../Context/FormContext";
import { Box, Button, Container, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { accountSetup } from "./FormSchema";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const AccSetup = () => {
  const { formData, setFormData, setStep } = useContext(FormContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(accountSetup),
  });

  const onSubmit = (data: any) => {
    setFormData(data);
    setStep(4);
    console.log(data);
  };

  return (
    <Container sx={{ marginTop: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="UserName"
          {...register("username")}
          error={!!errors.username}
          fullWidth
          margin="normal"
          helperText={errors.username?.message}
        />
        <TextField
          label="Password"
          {...register("password")}
          error={!!errors.password}
          fullWidth
          margin="normal"
          helperText={errors.password?.message}
        />
        <TextField
          label="Comfirm Password"
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          fullWidth
          margin="normal"
        />
        <Box display="flex" justifyContent="space-between">
          <Button
            variant="text"
            onClick={() => setStep((prev: number) => prev - 1)}
            sx={{ mt: 1 }}
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

export default AccSetup;
