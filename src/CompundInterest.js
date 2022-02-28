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
    frequency: 365,
    compound: 1,
    initial: 0,
    rate: 3.0,
    addition: 0,
    years: 1,
    clicked: false,
  };
  valuetext = (value) => {
    return `${value}years`;
  };
  calculate = () => {
    this.setState({ clicked: true });
  };
  render() {
    let { frequency, compound, initial, rate, addition, years } = this.state;
    const calculateInterest = () => {
      if (this.state.clicked) {
        return (
          <h1>
            {" "}
            Your total Investment is{" "}
            {initial * (1 + rate / compound) ** (compound * years)}
          </h1>
        );
      }
    };
    return (
      <div>
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
                <MenuItem value={10}>Weekly</MenuItem>
                <MenuItem value={20}>Bi-weekly</MenuItem>
                <MenuItem value={30}>Monthly</MenuItem>
                <MenuItem value={20}>Quarterly</MenuItem>
                <MenuItem value={30}>Yearly</MenuItem>
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
              <MenuItem value={10}>Weekly</MenuItem>
              <MenuItem value={20}>Bi-weekly</MenuItem>
              <MenuItem value={30}>Monthly</MenuItem>
              <MenuItem value={20}>Quarterly</MenuItem>
              <MenuItem value={30}>Yearly</MenuItem>
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
          Convert
        </Button>
        {calculateInterest()}
      </div>
    );
  }
}
