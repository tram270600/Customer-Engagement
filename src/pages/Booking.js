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
import SearchRouteResult from "./SearchRouteResult";

const cities = [
  { id: 1, cityEn: "Addis Ababa", cityDk: "Addis Abeba" },
  { id: 2, cityEn: "Bahr el Ghazal", cityDk: "Bahr el Ghazal" },
  { id: 3, cityEn: "Cairo", cityDk: "Cairo" },
  { id: 4, cityEn: "Dakar", cityDk: "Dakar" },
  { id: 5, cityEn: "Darfur", cityDk: "Darfur" },
  { id: 6, cityEn: "Dragon Mountains", cityDk: "Drakbergen" },
  { id: 7, cityEn: "Gold Coast", cityDk: "Guldkysten" },
  { id: 8, cityEn: "Kabalo", cityDk: "Kabalo" },
  { id: 9, cityEn: "Canary Islands", cityDk: "De Kanariske Øer" },
  { id: 10, cityEn: "Walvis Bay", cityDk: "Hvalbugten" },
  { id: 11, cityEn: "Cape Guardafui", cityDk: "Kap Guardafui" },
  { id: 12, cityEn: "Cape St. Marie", cityDk: "Kap St. Marie" },
  { id: 13, cityEn: "Cape Town", cityDk: "Kapstaden" },
  { id: 14, cityEn: "Congo", cityDk: "Kongo" },
  { id: 15, cityEn: "Luanda", cityDk: "Luanda" },
  { id: 16, cityEn: "Marrakech", cityDk: "Marrakech" },
  { id: 17, cityEn: "Mozambique", cityDk: "Moçambique" },
  { id: 18, cityEn: "Omdurman", cityDk: "Omdurman" },
  { id: 19, cityEn: "Sahara", cityDk: "Sahara" },
  { id: 20, cityEn: "Saint Helena", cityDk: "Sankta Helena" },
  { id: 21, cityEn: "Sierra Leone", cityDk: "Sierra Leone" },
  { id: 22, cityEn: "Bight of Benin", cityDk: "Beninbugten" },
  { id: 23, cityEn: "Suakin", cityDk: "Suakin" },
  { id: 24, cityEn: "Tamatave", cityDk: "Tamatave" },
  { id: 25, cityEn: "Tangier", cityDk: "Tangen" },
  { id: 26, cityEn: "Timbuktu", cityDk: "Timbuktu" },
  { id: 27, cityEn: "Tripoli", cityDk: "Tripolis" },
  { id: 28, cityEn: "Tunis", cityDk: "Tunis" },
  { id: 29, cityEn: "Victoria Falls", cityDk: "Victoriafaldet" },
  { id: 30, cityEn: "Lake Victoria", cityDk: "Victoriasøen" },
  { id: 31, cityEn: "Wadai", cityDk: "Wadai" },
  { id: 32, cityEn: "Zanzibar", cityDk: "Zanzibar" },
  { id: 33, cityEn: "Tangiers", cityDk: "Tangiers" },
  { id: 34, cityEn: "Slave Coast", cityDk: "Slave kysten" },
];

export default function Booking() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [priceChecked, setPriceChecked] = useState(false);
  const [shortPathChecked, setShortPathChecked] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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
            activeStep={activeStep}
            onBackBtClick={handleStepperBackClick}
          ></HorizontalStepper>
        </div>
        {activeStep === 0 && (
          <div>
            <div className={styles.pageContent}>
              <div className={(styles.contentSection, styles.dashContent)}>
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
              <div className={styles.contentSection}>
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
                      {cities.map((city) => (
                        <MenuItem value={city.id}>{city.cityEn}</MenuItem>
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
                      {cities.map((city) => (
                        <MenuItem value={city.id}>{city.cityEn}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className={styles.SectionTitle}>Shipping Date</div>
                <form className={styles.container} noValidate>
                  <TextField
                    id="date"
                    label="Birthday"
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
        )}
        {activeStep === 1 && <SearchRouteResult></SearchRouteResult>}
      </div>
    </>
  );
}
