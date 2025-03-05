import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { FormContext } from "../Context/FormContext";

const ThankUPage = () => {
  const { setFormData, setStep } = useContext(FormContext);
  const [loading, setLoading] = useState(false);

  const handleApplyAgain = () => {
    setLoading(true);
    setTimeout(() => {
      setFormData({});
      setStep(1);
    }, 2000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {!loading ? (
        <>
          <Typography
            variant="h3"
            sx={{
              color: "green",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Thank You!
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "green",
              marginBottom: "30px",
            }}
          >
            Your application is successfully submitted.
          </Typography>
          <Button
            variant="contained"
            color="success"
            onClick={handleApplyAgain}
            sx={{ padding: "10px 20px", fontSize: "16px" }}
          >
            Apply Again
          </Button>
        </>
      ) : (
        <CircularProgress size={50} sx={{ color: "black" }} />
      )}
    </Box>
  );
};

export default ThankUPage;
