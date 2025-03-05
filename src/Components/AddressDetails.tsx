import { useForm } from "react-hook-form";
import { addressDetails } from "./FormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { FormContext } from "../Context/FormContext";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const AddressDetails = () => {
  const { formData, setFormData, setStep } = useContext(FormContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(addressDetails),
  });

  const onSubmit = (data: any) => {
    setFormData(data);
    setStep(3);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Address"
        {...register("address")}
        error={!!errors.address}
        helperText={errors.address?.message}
        fullWidth
        margin="normal"
      />

      <TextField
        label="City"
        {...register("city")}
        error={!!errors.city}
        helperText={errors.city?.message}
        fullWidth
        margin="normal"
      />

      <TextField
        label="State"
        {...register("state")}
        error={!!errors.state}
        helperText={errors.state?.message}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Zipcode"
        {...register("zip")}
        error={!!errors.zip}
        helperText={errors.zip?.message}
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
  );
};

export default AddressDetails;
