import React from "react";
import Routes from "../routes/Routes";
import Header from "../components/Header";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Header />
      <section className="main">
        <Routes />
      </section>
    </Router>
  );
};

export default App;
