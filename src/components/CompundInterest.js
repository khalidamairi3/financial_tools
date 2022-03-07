import React, { Component } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";

export default class CompundInterest extends Component {
  state = {
    frequency: 1,
    compound: 1,
    initial: 0,
    rate: 3.0,
    addition: 0,
    years: 1,
    pageYears: 1,
    clicked: false,
    result: 0,
  };
  valuetext = (value) => {
    return `${value}years`;
  };
  calculate = () => {
    this.setState({ clicked: true });
  };
  render() {
    let {
      frequency,
      compound,
      initial,
      pageYears,
      rate,
      addition,
      years,
      result,
    } = this.state;
    const calculateInterest = () => {
      let total = 0;
      if (this.state.clicked) {
        this.setState({ pageYears: years });
        total = initial * (1 + (rate * 0.01) / compound) ** (compound * years);
        let additionalAmount = 0;
        for (let j = 1; j <= frequency; j++) {
          additionalAmount +=
            addition *
            (1 + (((rate * 0.01) / compound) * (frequency - j)) / frequency);
          console.log(additionalAmount);
        }

        for (let i = 1; i <= years; i++) {
          total +=
            additionalAmount *
            (1 + (rate * 0.01) / compound) ** (compound * (years - i));
        }
        this.setState({ result: total });
        this.setState({ clicked: false });
      }
      if (result > 0) {
        return (
          <div>
            <h1>
              {" "}
              Your total Investment will be{" "}
              {result
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              $ after {pageYears} years
            </h1>
          </div>
        );
      }
    };
    return (
      <div>
        <img
          src="https://images.unsplash.com/photo-1642092445920-37a5dbaeb774?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          alt="compound interest rate calculator"
          height={350}
          width={1150}
          style={{ alignSelf: "center" }}
        />
        <h1> Compound Interest Rate Calculator</h1>
        <h2>
          Find out how your investment will grow over time with compound
          interest.
        </h2>
        <div id="interest-calculator">
          <TextField
            label="Initial investment"
            type="number"
            value={initial}
            onChange={(e) => {
              this.setState({ initial: e.target.value });
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div id="addition">
            <TextField
              label="Regular addition"
              type="number"
              value={addition}
              onChange={(e) => {
                this.setState({ addition: e.target.value });
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControl fullWidth>
              <InputLabel id="frequency-label">Frequency</InputLabel>
              <Select
                labelId="frequency-label"
                id="frequency-select"
                value={frequency}
                label="frequency"
                onChange={(e) => {
                  this.setState({ frequency: e.target.value });
                }}
              >
                <MenuItem value={52}>Weekly</MenuItem>
                <MenuItem value={26}>Bi-weekly</MenuItem>
                <MenuItem value={12}>Monthly</MenuItem>
                <MenuItem value={4}>Quarterly</MenuItem>
                <MenuItem value={1}>Yearly</MenuItem>
              </Select>
            </FormControl>
          </div>
          <TextField
            label="Interest Rate"
            type="number"
            value={rate}
            onChange={(e) => {
              this.setState({ rate: e.target.value });
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />{" "}
          <FormControl fullWidth>
            <InputLabel id="compound-label">Compounded </InputLabel>
            <Select
              labelId="compound-label"
              id="compound-select"
              value={compound}
              label="Interest is compounded: "
              onChange={(e) => {
                this.setState({ compound: e.target.value });
              }}
            >
              <MenuItem value={1}>Yearly</MenuItem>
            </Select>
          </FormControl>
          <Box id="slider" sx={{ width: 300 }}>
            <h3> Years to grow: </h3>
            <Slider
              aria-label="Custom marks"
              defaultValue={5}
              getAriaValueText={this.valuetext}
              step={1}
              value={years}
              onChange={(e) => {
                this.setState({ years: e.target.value });
              }}
              valueLabelDisplay="auto"
              min={1}
              max={60}
              label={years}
            />
          </Box>
        </div>
        <Button
          onClick={this.calculate}
          id="conversion-button"
          variant="contained"
        >
          Calculate
        </Button>
        {calculateInterest()}
      </div>
    );
  }
}
