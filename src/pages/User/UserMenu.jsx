import React from 'react';
import { MdModeEdit, MdAssignment, MdNotificationsNone } from 'react-icons/md';
import { FiUser, FiTag } from 'react-icons/fi';
import { RiMoneyCnyCircleLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';

const UserMenu = () => {
  return (
    <div className="menu">
      <div className="menu-header">
        <img
          src="https://cf.shopee.vn/file/0163cd287487716180d96d276c3446d4_tn"
          alt=""
          className="menu-header__img"
        />
        <div className="menu-header__txt">
          <h4 className="menu-header__txt-name">chancegreyson</h4>
          <Link to="/user" className="menu-header__txt-edit">
            <MdModeEdit className="menu-header__txt-icon" />
            Sửa Hồ Sơ
          </Link>
        </div>
      </div>
      <div className="menu-body">
        <ul className="menu-body__list">
          <li className="menu-body__list-item">
            <Link to="/">
              <FiUser className="item-icon blue" />
              Tài Khoản Của Tôi
            </Link>
          </li>
          <li className="menu-body__list-item">
            <Link to="/">
              <MdAssignment className="item-icon blue" />
              Đơn Mua
            </Link>
          </li>
          <li className="menu-body__list-item">
            <Link to="/">
              <MdNotificationsNone className="item-icon primary" />
              Thông Báo
            </Link>
          </li>
          <li className="menu-body__list-item">
            <Link to="/">
              <FiTag className="item-icon primary" />
              Kho voucher
            </Link>
          </li>
          <li className="menu-body__list-item">
            <Link to="/">
              <RiMoneyCnyCircleLine className="item-icon yellow" />
              Shopee Xu
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
