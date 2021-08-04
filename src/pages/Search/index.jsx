import React from "react";
import Column from "../../components/Column";
import ProductItem from "../../components/Home/ProductItem";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { BiFilterAlt } from "react-icons/bi";

const Search = () => {
  return (
    <section className="main">
      <section className="search">
        <div className="grid wide">
          <div className="row">
            <Column c={0} m={0} l={2}>
              <div className="search-sidebar">
                <div className="search-sidebar-heading">
                  <BiFilterAlt className="sidebar-icon" />
                  <h2>BỘ LỌC TÌM KIẾM</h2>
                </div>
                <ul className="search-sidebar-list">
                  <h3>Theo Danh Mục</h3>
                  <li className="search-sidebar-list__item">
                    <input type="checkbox" name="" id="" />
                    <p>Mặt nạ (298k+)</p>
                  </li>
                  <li className="search-sidebar-list__item">
                    <input type="checkbox" name="" id="" />
                    <p>Nhà cửa & Đời sống (95k+)sssssss</p>
                  </li>
                  <li className="search-sidebar-list__item">
                    <input type="checkbox" name="" id="" />
                    <p>Sản phẩm dưỡng mắt (23k+)</p>
                  </li>
                  <li className="search-sidebar-list__item">
                    <input type="checkbox" name="" id="" />
                    <p>Sản phẩm dưỡng môi (23k+)</p>
                  </li>
                </ul>
              </div>
            </Column>
            <div className="col c-12 m-12 l-10">
              <div className="row">
                <Column c={12} m={12} l={12}>
                  <div className="search-tools">
                    <span className="search-tools-txt">Sắp xếp theo</span>
                    <button className="btn btn-primary">Liên Quan</button>
                    <button className="btn btn-white">Mới Nhất</button>
                    <button className="btn btn-white">Bán Chạy</button>
                    <div className="selects">
                      <span className="selects-txt">Giá</span>
                      <RiArrowDownSLine className="selects-icon" />
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
                <ProductItem size={["6", "4", "2-4"]} />
                <ProductItem size={["6", "4", "2-4"]} />
                <ProductItem size={["6", "4", "2-4"]} />
                <ProductItem size={["6", "4", "2-4"]} />
                <ProductItem size={["6", "4", "2-4"]} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Search;
