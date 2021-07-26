import React from "react";
import Toolbar from "./Toolbar";

const Header = () => {
  return (
    <header className="header">
      <div className="grid wide">
        <div className="row no-gutters">
          <div className="col c-12">
            <Toolbar />
          </div>
          <div className="col c-12">
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
