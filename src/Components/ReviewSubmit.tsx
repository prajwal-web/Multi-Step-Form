import { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { FormContext } from "../Context/FormContext";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const ReviewSubmit = () => {
  const { formData, setStep } = useContext(FormContext);

  const renderField = (label: string, value: string) => (
    <Box sx={{ marginBottom: "16px", display: "flex", gap: 3 }}>
      <Typography variant="body1" sx={{ fontWeight: "bold", width: "100px" }}>
        {label}:
      </Typography>
      <Typography variant="body2">{value}</Typography>
    </Box>
  );

  const onSubmit = () => {
    setStep(5);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: "16px" }}>
        Review Your Information
      </Typography>
      <form>
        {renderField("Full Name", formData.name)}
        {renderField("Email", formData.email)}
        {renderField("Phone", formData.phone)}
        {renderField("Date of Birth", formData.dob)}
        {renderField("City", formData.city)}
        {renderField("Zipcode", formData.zip)}
        {renderField("Address", formData.address)}

        <Box display="flex" justifyContent="space-between">
          <Button
            variant="text"
            onClick={() => setStep((prev: number) => prev - 1)}
            sx={{ mt: 2 }}
            startIcon={<ArrowBack />}
          >
            Previous
          </Button>
          <Button
            variant="text"
            color="success"
            onClick={onSubmit}
            sx={{ mt: 2 }}
            endIcon={<ArrowForward />}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ReviewSubmit;
