import styles from "../styles/booking.module.scss";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
} from "@mui/material";
import { useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import HorizontalStepper from "../components/HorizontalStepper/HorizontalStepper";

const demarkRegion = [
  { id: 1, name: "Copenhagen" },
  { id: 2, name: "Aarhus" },
  { id: 3, name: "Odense" },
  { id: 4, name: "Aalborg" },
  { id: 5, name: "Esbjerg" },
  { id: 6, name: "Randers" },
  { id: 7, name: "Kolding" },
  { id: 8, name: "Horsens" },
  { id: 9, name: "Vejle" },
  { id: 10, name: "Herning" },
  { id: 11, name: "Roskilde" },
  { id: 12, name: "Helsingør" },
  { id: 13, name: "Hillerød" },
  { id: 14, name: "Slagelse" },
  { id: 15, name: "Frederikshavn" },
];

export default function Booking() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [priceChecked, setPriceChecked] = useState(false);
  const [shortPathChecked, setShortPathChecked] = useState(false);
  const [activeStep, setActiveStep] = useState(2);

  const handleOnClick = () => {
    console.log("heheheh");
    setActiveStep(activeStep + 1);
  };

  const handleStepperBackClick = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <div className={styles.maxContent}>
        {/*Page header*/}
        <div className={styles.pageTitle}>Booking</div>
        <div className={styles.subTitle}>
          Create a booking to ship the parcel
        </div>

        {/*Horizontal Stepper*/}
        <div className={styles.stepper}>
          <HorizontalStepper
            controlStep={activeStep}
            onBackBtClick={handleStepperBackClick}
          ></HorizontalStepper>
        </div>

        <div>
          <div className={styles.pageContent}>
            <div className={styles.contentSection}>
              <div className={styles.SectionTitle}>Product Information</div>
              <TextField
                id="outlined-basic"
                label="Product Name"
                variant="outlined"
              />
              <div className={styles.groupField}>
                <TextField
                  id="outlined-basic"
                  label="Category Type"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Weight"
                  variant="outlined"
                />
              </div>
              <div className={styles.groupField}>
                <TextField
                  id="outlined-basic"
                  label="Height (cm)"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Width (cm)"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Depth (cm)"
                  variant="outlined"
                />
              </div>
            </div>
            <div className={styles.bookingInfo}>
              <div className={styles.SectionTitle}>Location</div>
              <div className={styles.groupField}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">From</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={fromCity}
                    label="From"
                    onChange={(e) => setFromCity(e.target.value)}
                  >
                    {demarkRegion.map((item) => (
                      <MenuItem value={item.id}>{item.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">To</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={toCity}
                    label="To"
                    onChange={(e) => setToCity(e.target.value)}
                  >
                    {demarkRegion.map((item) => (
                      <MenuItem value={item.id}>{item.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div style={{ marginTop: "30px" }} />
              <form className={styles.container} noValidate>
                <TextField
                  id="date"
                  label="Shipping Date"
                  type="date"
                  defaultValue={new Date()}
                  className={styles.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
              <div className={styles.SectionTitle}>Choice for Path</div>
              <div className={styles.groupField}>
                <label>
                  <input
                    type="checkbox"
                    checked={priceChecked}
                    onChange={() => setPriceChecked(!priceChecked)}
                  />
                  Lowest price
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={shortPathChecked}
                    onChange={() => setShortPathChecked(!shortPathChecked)}
                  />
                  Shortest path
                </label>
              </div>
            </div>
          </div>
          <div className={styles.assignBtn}>
            <PrimaryButton
              name="Search"
              onClick={handleOnClick}
            ></PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
}
