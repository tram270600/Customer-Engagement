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
import Payment from "./Payment";
import Confirmation from "./Confirmation";
import { cities } from "../lib/Cities";
import { categories } from "../lib/Category";

export default function Booking() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [priceChecked, setPriceChecked] = useState(false);
  const [shortPathChecked, setShortPathChecked] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [categoryType, setCategoryType] = useState("");

  const [routeData, setRouteData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleOnClick = async () => {
    setIsLoading(true);
    const headers = {
      "Content-Type": "application/problem+json",
    };
    try {
      const response = await fetch(
        "https://wa-eit-eit1.azurewebsites.net/api/Routes/FindShortestPath",
        {
          mode: "no-cors",
          method: "POST",
          headers: headers,
          body: JSON.stringify(
            {
              From: "Cape Town",
              To: "Tunis",
              Category: "",
              Weight: 50,
              type: "https://example.com/problems/invalid-input",
              title: "Invalid Input",
              status: 400,
              detail: "One or more input parameters are invalid.",
            }
          ),
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log("result is: ", JSON.stringify(result, null, 4));

      setRouteData(result);
    } catch (err) {
      setErr("Nnonon", err.message);
    } finally {
      setIsLoading(false);
    }
    setActiveStep(activeStep + 1);
  };

  // const handleOnClick = async () => {
  //   const url = "https://wa-eit-eit1.azurewebsites.net/api/Routes/FindShortestPath";
  //   const body = {
  //     "From": "Cape Town",
  //     "To": "Tunis",
  //     "Category": "",
  //     "Weight": 50
  //   };
  //   const headers = {
  //     "Content-Type": "application/problem+json"
  //   };
  //   // const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // CORS proxy service URL
  //   try {
  //     const response = await fetch(url, {
  //       mode: 'no-cors',
  //       method: "POST",
  //       body: JSON.stringify(body),
  //       headers: headers
  //     });
  //     const data = await response.json();
  //     console.log(JSON.stringify(data, null, 4));
  //     setRouteData(data);
  //     // do something with the response data
  //   } catch (error) {
  //     console.error(error);
  //     // handle error
  //   }
  // }

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
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select-2"
                      value={categoryType}
                      label="Category"
                      onChange={(e) => setCategoryType(e.target.value)}
                    >
                      {categories.map((category) => (
                        <MenuItem value={category}>{category}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
                    label="ShippingDate"
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
        {activeStep === 1 && (
          <SearchRouteResult
            routeData={routeData}
            onSelectRow={() => setActiveStep(activeStep + 1)}
          ></SearchRouteResult>
        )}
        {activeStep === 2 && (
          <Payment
            onCancelBtnClick={() => setActiveStep(activeStep - 1)}
            onConfirmBtnClick={() => setActiveStep(activeStep + 1)}
          ></Payment>
        )}
        {activeStep === 3 && (
          <Confirmation
            onBackToBookClick={() => setActiveStep(0)}
          ></Confirmation>
        )}
      </div>
    </>
  );
}
