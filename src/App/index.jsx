import React from 'react';
import Routes from 'src/routes/Routes';
import Header from 'src/components/Header';
import { HashRouter } from 'react-router-dom';
import Footer from 'src/components/Footer';

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
