import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import styles from "./HorizontalStepper.module.scss";

const steps = [
  "Input the information of package",
  "Result of route",
  "Payment",
  "Confirmation"
];

export default function HorizontalStepper({controlStep, onBackBtClick}) {
  return (
    <>
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={controlStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    <button className={controlStep === 0 ? styles.noDisplayBtn : ''} onClick={() => onBackBtClick()}>Back</button>
    </>
  );
}
