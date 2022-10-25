import React from "react";
import Column from "src/components/Column";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Tools = ({ url }) => {
  //state
  const [checkBtn, setCheckBtn] = useState(false);
  const [valueSelect, setValueSelect] = useState("Giá");
  // get all the URLParams
  const params = new URLSearchParams(url);
  const q = params.get("q");
  const history = useHistory();

  const handleNormal = () => {
    setCheckBtn(false);
    history.push(`/search?q=${q}&_sort=id`);
  };

  const handleLatest = () => {
    setCheckBtn(true);
    history.push(`/search?q=${q}&_sort=createdAt`);
  };

  const handleAsc = () => {
    setValueSelect("Giá: Thấp đến Cao");
    history.push(`/search?q=${q}&_sort=price&_order=asc`);
  };

  const handleDesc = () => {
    setValueSelect("Giá: Cao đến Thấp");
    history.push(`/search?q=${q}&_sort=price&_order=desc`);
  };

  return (
    <Column c={12} m={12} l={12}>
      <div className="search-tools">
        <span className="search-tools-txt">Sắp xếp theo</span>
        <button
          className={!checkBtn ? "btn btn-primary" : "btn btn-white"}
          onClick={handleNormal}
        >
          Liên Quan
        </button>
        <button
          className={checkBtn ? "btn btn-primary" : "btn btn-white"}
          onClick={handleLatest}
        >
          Mới Nhất
        </button>
        <div className="selects">
          <span className="selects-txt">{valueSelect}</span>
          <RiArrowDownSLine className="selects-icon" />
          <ul className="selects__list">
            <li className="selects__list-item" onClick={handleAsc}>
              Giá: Thấp đến Cao
            </li>
            <li className="selects__list-item" onClick={handleDesc}>
              Giá: Cao đến Thấp
            </li>
          </ul>
        </div>

        <div className="search-tools__pages">
          <p className="search-tools__pages-txt">1/100</p>

          <div className="page-btn">
            <button className="page-btn-left">
              <RiArrowLeftSLine className="icon-left" />
            </button>
            <button className="page-btn-right">
              <RiArrowRightSLine className="icon-right" />
            </button>
          </div>
        </div>
      </div>
    </Column>
  );
};

export default Tools;
