import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const item = [
    " Váy",
    " Bông Tẩy Trang",
    "Balo",
    "Dép Nữ",
    "Quần Dép",
    "Son",
    "Áo Phông",
  ];
  const sugget = item.map((item) => {
    return (
      <Link to="" key={item} className="search__suggest--item">
        {item}
      </Link>
    );
  });
  return (
    <div className="search">
      <Link to="" className="search__logo">
        <Logo />
      </Link>
      <div className="search__wrapper">
        <div className="search__input">
          <input
            type="text"
            className="search__input--header"
            placeholder="Sulwhasoo Quà đến 100 triệu"
          />
          <button className="search__input--submit">
            <BiSearch className="search__input--icon" />
          </button>
        </div>
        <div className="search__suggest">{sugget}</div>
      </div>
      <Link to="" className="search__cart">
        <FiShoppingCart className="search__cart--icon" />
      </Link>
    </div>
  );
};

export default Search;
