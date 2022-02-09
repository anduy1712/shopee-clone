import React from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import Column from '../../components/Column';

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
            <input type="checkbox" id="list__item-1" />
            <label>Mặt nạ (298k+)</label>
          </li>
          <li className="search-sidebar-list__item">
            <input type="checkbox" id="list__item-2" />
            <label>Nhà cửa & Đời sống (95k+)</label>
          </li>
          <li className="search-sidebar-list__item">
            <input type="checkbox" id="list__item-3" />
            <label>Sản phẩm dưỡng mắt (23k+)</label>
          </li>
          <li className="search-sidebar-list__item">
            <input type="checkbox" id="list__item-4" />
            <label>Mẹ & Bé (12k+)</label>
          </li>
        </ul>
      </div>
    </Column>
  );
};

export default Sidebar;
