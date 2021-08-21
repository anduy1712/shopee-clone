import React from 'react';
import { Link } from 'react-router-dom';
import Column from '../../components/Column';
import { RiSearchLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../../store/reducers/usersSlice';
import {
  customersSelector,
  getCustomerByUserApi
} from '../../store/reducers/customersSlice';
import { isEmpty } from 'lodash';
import { useEffect } from 'react';

const Purchase = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(usersSelector);
  const { customers } = useSelector(customersSelector);
  console.log(customers);
  const itemOrder = customers.map((item) => {
    return (
      <div className="order-table">
        <div className="order-table__status">
          <p>{item.status}</p>
        </div>
        <ul className="order-table__list">
          {item.products.map((item) => {
            return (
              <li className="order-table__item">
                <img src={item.images[0]} alt="img_cart" />
                <div className="desc-product">
                  <h3 className="cartlist__item-title">{item.title}</h3>
                  <p>x{item.amount}</p>
                </div>
                <p className="order-table__price">{item.price}$</p>
              </li>
            );
          })}
        </ul>
        <div className="order-table__total">
          Tổng số tiền:
          <span>₫{item.totalPrice}</span>
        </div>
      </div>
    );
  });
  useEffect(() => {
    dispatch(getCustomerByUserApi(users.id));
  }, []);
  return (
    <div className="order">
      <div className="row">
        <Column c={12} m={12} l={12}>
          <div className="order-tabs">
            <Link to="" className="order-tabs__item active">
              <span>Tất cả</span>
            </Link>
            <Link to="" className="order-tabs__item ">
              <span>Chờ xác nhận</span>
            </Link>
            <Link to="" className="order-tabs__item ">
              <span>Chờ lấy hàng</span>
            </Link>
            <Link to="" className="order-tabs__item ">
              <span>Đang giao</span>
            </Link>
            <Link to="" className="order-tabs__item ">
              <span>Đã giao</span>
            </Link>
            <Link to="" className="order-tabs__item ">
              <span>Đã huỷ</span>
            </Link>
          </div>
        </Column>
        <Column c={12} m={12} l={12}>
          <div className="order-search">
            <RiSearchLine className="order-search-icon" />
            <input
              type="text"
              placeholder="Tìm kiếm theo Tên Shop, Id đơn hàng hoặc Tên Sản Phẩm"
            />
          </div>
        </Column>
        <Column c={12} m={12} l={12}>
          {itemOrder}
        </Column>
      </div>
    </div>
  );
};

export default Purchase;