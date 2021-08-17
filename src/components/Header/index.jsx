import React from 'react';
import Search from './Search';
import Toolbar from './Toolbar';

const Header = () => {
  return (
    <header className="header">
      <Toolbar />
      <Search />
    </header>
  );
};

export default Header;
