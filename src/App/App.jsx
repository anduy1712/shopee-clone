import React from "react";
import Routes from "../routes/Routes";
import Header from "../components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/Footer";
import firebase from "firebase";

const App = () => {
  // Configure Firebase.
  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
