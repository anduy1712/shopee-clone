import React from "react";
import Search from "./Search";
import Toolbar from "./Toolbar";

const Header = () => {
  return (
    <header className="header">
      <div className="grid wide">
        <div className="row no-gutters">
          <div className="col c-0 l-12">
            <Toolbar />
          </div>
          <div className="col c-12 l-12">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
