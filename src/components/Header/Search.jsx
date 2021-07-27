import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="search">
      <Link className="search__logo">
        <Logo />
      </Link>
      <div className="search__wrapper">
        <div className="search__input">
          <input
            type="text"
            className="search__input--header"
            placeholder="Search"
          />
          <button className="search__input--submit">
            <BiSearch className="search__input--icon" />
          </button>
        </div>
        <div className="search__suggest">
          <Link>Váy</Link>
          <Link>Váy</Link>
          <Link>Váy</Link>
          <Link>Váy</Link>
        </div>
      </div>
      <Link className="search__cart">
        <FiShoppingCart className="search__cart--icon" />
      </Link>
    </div>
  );
};

export default Search;
