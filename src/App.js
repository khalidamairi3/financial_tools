import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompundInterest from "./components/CompundInterest";
import CurrencyConverter from "./components/CurrencyConverter";
const sections = [
  { title: "Currency Converter", url: "/Currency-Converter" },
  { title: "Compound Interest Calculator", url: "/compound-interest" },
];

const theme = createTheme();

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Amayri Financial Tools" sections={sections} />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="compound-interest" element={<CompundInterest />} />
            <Route path="Currency-Converter" element={<CurrencyConverter />} />
          </Routes>
        </Container>
        <Footer description="Thanks for using Amayri Financial Tools" />{" "}
      </ThemeProvider>
    </Router>
  );
}

export default App;
