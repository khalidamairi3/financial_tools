import React, { Component } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default class CurrencyConverter extends Component {
  state = {
    rates: [],
    baseCurrency: "USD",
    convertingCurrency: "",
  };

  componentDidMount() {
    axios
      .request({
        method: "GET",
        url: "https://freecurrencyapi.net/api/v2/latest?apikey=ea703a70-95de-11ec-ae9a-87f1c6203248",
      })
      .then((response) => {
        this.setState({ rates: response.data.data });
        console.log(Object.keys(this.state.rates));
      });
  }
  handleChange = (event) => {
    this.setState({ baseCurrency: event.target.value });
  };
  handleChange1 = (event) => {
    this.setState({ baseCurrency: event.target.value });
  };
  convert() {}
  render() {
    return (
      <div>
        <h1> Currency Converter</h1>

        <div id="currency-converter">
          <Box sx={{ maxWidth: 400 }}>
            <FormControl
              sx={{ display: "grid" }}
              className="form-box"
              fullWidth
            >
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.baseCurrency}
                label="Currency"
                onChange={this.handleChange}
              >
                {Object.keys(this.state.rates).map((key) => {
                  return <MenuItem value={key}>{key}</MenuItem>;
                })}
              </Select>
              <TextField
                id="outlined-number"
                label="Amount"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </Box>

          <Box sx={{ maxWidth: 400 }}>
            <FormControl
              sx={{ display: "grid" }}
              className="form-box"
              fullWidth
            >
              <InputLabel id="demo-simple-select-label">
                converting currency
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.convertingCurrency}
                label="Converted Currency"
                onChange={this.handleChange1}
              >
                {Object.keys(this.state.rates).map((key) => {
                  return (
                    <MenuItem key={key} value={key}>
                      {key}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <Button id="conversion-button" variant="contained">
              Convert
            </Button>
          </Box>
        </div>
        {}
      </div>
    );
  }
}
