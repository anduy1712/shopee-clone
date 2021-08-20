import React from 'react';
import { MdModeEdit, MdAssignment, MdNotificationsNone } from 'react-icons/md';
import { FiUser, FiTag } from 'react-icons/fi';
import { RiMoneyCnyCircleLine } from 'react-icons/ri';

import { Link, useParams } from 'react-router-dom';

const UserMenu = ({ user }) => {
  const { slug } = useParams();

 
  return (
    <div className="menu">
      <div className="menu-header">
        <img src={user.photoImage} alt="" className="menu-header__img" />
        <div className="menu-header__txt">
          <h4 className="menu-header__txt-name">{user.username}</h4>
          <Link to="/user" className="menu-header__txt-edit">
            <MdModeEdit className="menu-header__txt-icon" />
            Sửa Hồ Sơ
          </Link>
        </div>
      </div>
      <div className="menu-body">
        <ul className="menu-body__list">
          <li
            className={
              slug === 'profile'
                ? 'menu-body__list-item active'
                : 'menu-body__list-item'
            }
          >
            <Link to="/user/profile">
              <FiUser className="item-icon blue" />
              Tài Khoản Của Tôi
            </Link>
          </li>
          <li
            className={
              slug === 'purchase'
                ? 'menu-body__list-item active'
                : 'menu-body__list-item'
            }
          >
            <Link to="/user/purchase">
              <MdAssignment className="item-icon blue" />
              Đơn Mua
            </Link>
          </li>
          <li
            className={
              slug === 'abcd'
                ? 'menu-body__list-item active'
                : 'menu-body__list-item'
            }
          >
            <Link to="/">
              <MdNotificationsNone className="item-icon primary" />
              Thông Báo
            </Link>
          </li>
          <li
            className={
              slug === 'ccc'
                ? 'menu-body__list-item active'
                : 'menu-body__list-item'
            }
          >
            <Link to="/">
              <FiTag className="item-icon primary" />
              Kho voucher
            </Link>
          </li>
          <li
            className={
              slug === 'ddsc'
                ? 'menu-body__list-item active'
                : 'menu-body__list-item'
            }
          >
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
