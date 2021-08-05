import React from 'react'
import { BiFilterAlt } from "react-icons/bi";
import Column from "../../components/Column";

const Sidebar = () => {
    return (
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
                    <p>Nhà cửa & Đời sống (95k+)</p>
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
    )
}

export default Sidebar
