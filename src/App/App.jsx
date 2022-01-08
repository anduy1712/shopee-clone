import React from 'react';
import Routes from '../routes/Routes';
import Header from '../components/Header';
import { HashRouter } from 'react-router-dom';
import Footer from '../components/Footer';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes />
      <Footer />
    </HashRouter>
  );
};

export default App;
