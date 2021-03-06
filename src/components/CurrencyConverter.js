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
    amount: "",
    clicked: false,
  };

  componentDidMount() {
    axios
      .request({
        method: "GET",
        url:
          "https://freecurrencyapi.net/api/v2/latest?apikey=" +
          process.env.API_KEY,
      })
      .then((response) => {
        let rates = response.data.data;
        rates[response.data.query.base_currency] = 1.0;
        this.setState({ rates: rates });
      });
  }
  handleChange = (event) => {
    this.setState({ baseCurrency: event.target.value });
  };
  handleChange1 = (event) => {
    this.setState({ convertingCurrency: event.target.value });
  };
  convert = () => {
    this.setState({ clicked: true });
  };

  render() {
    let { clicked, amount, baseCurrency, convertingCurrency } = this.state;

    const renderConvertion = () => {
      if (clicked && parseFloat(amount) > 0 && convertingCurrency.length > 0) {
        return (
          <h1>
            {amount +
              " " +
              baseCurrency +
              " =" +
              (
                (parseFloat(amount).toFixed(2) *
                  this.state.rates[convertingCurrency]) /
                this.state.rates[baseCurrency]
              ).toFixed(3) +
              " " +
              convertingCurrency}
          </h1>
        );
      }
    };

    return (
      <div>
        <img
          src="https://images.unsplash.com/photo-1638913971251-832d29947de6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt="currency converter"
          height={350}
          width={1150}
          style={{ alignSelf: "center" }}
        />
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
                  return (
                    <MenuItem key={key} value={key}>
                      {key}
                    </MenuItem>
                  );
                })}
              </Select>
              <TextField
                id="outlined-number"
                label="Amount"
                type="number"
                value={this.state.amount}
                onChange={(e) => {
                  this.setState({ amount: e.target.value });
                }}
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

            <Button
              onClick={this.convert}
              id="conversion-button"
              variant="contained"
            >
              Convert
            </Button>
            {renderConvertion()}
          </Box>
        </div>
      </div>
    );
  }
}
