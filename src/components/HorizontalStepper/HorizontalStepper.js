import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./HorizontalStepper.module.scss";
import classNames from "classnames";

const steps = [
  "Input the information of package",
  "Result of route",
  "Payment",
  "Confirmation",
];

export default function HorizontalStepper({ activeStep, onBackBtClick }) {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <button
        className={classNames(styles.backBtn, {
          [styles.noDisplayBtn]: activeStep === 0,
        })}
        onClick={() => onBackBtClick()}
      >
        <ArrowBackIcon />
        Back
      </button>
    </>
  );
}
