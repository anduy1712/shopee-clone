import React from "react";
import Routes from "../routes/Routes";
import Header from "../components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/Footer";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
