import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';
import { Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from 'src/components/EmptyCart';
import {
  cartsSelector,
  getCartByUser,
  setTheme
} from 'src/store/reducers/cartsSlice';
import CartItemTable from './CartItemTable';
import {
  initialStateUser,
  usersSelector
} from 'src/store/reducers/usersSlice';
import { FixMeLater } from 'src/constant/other';

const CartTable = () => {
  const { users }: initialStateUser = useSelector(usersSelector);
  const { cart, totalCart } = useSelector(cartsSelector);
  const dispatch: any = useDispatch();
  const history = useHistory();
  //Check Item Cart
  const plainOptions = cart?.map((item: any) => item._id);
  const CheckboxGroup = Checkbox.Group;
  const [checkedList, setCheckedList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: any) => {
    setCheckedList(list);
    setIndeterminate(list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  //Check user isn't login
  if (!users) {
    alert('Vui lòng đăng nhập để mua hàng');
    history.push('/login');
  }
  //Push to check out page
  const handleSubmitCart = () => {
    history.push({
      pathname: '/cart/checkout',
      state: { cartIsChecked: checkedList }
    });
  };

  const warning = () => {
    message.warning('This is a warning message');
  };

  useEffect(() => {
    dispatch(getCartByUser(users._id));
  }, [users]);
  //use themeplate when use cart page
  useEffect(() => {
    dispatch(setTheme(true));
    return () => dispatch(setTheme(false));
  }, [dispatch]);
  const item = cart?.map((item: FixMeLater, index: number) => {
    return (
      <CartItemTable
        key={item._id}
        _id={item._id}
        index={index}
        name={item.title}
        quantites={item.quantites}
        amount={item.quantity}
        img={item.images}
        price={item.price}
      />
    );
  });
  return (
    <section className="cart">
      <div className="grid wide">
        <div className="row">
          <div className="col c-12 m-12 l-12">
            <div className="cart__navbar">
              <div className="cart__navbar-item">
                <Checkbox
                  indeterminate={indeterminate}
                  onChange={onCheckAllChange}
                  checked={checkAll}
                ></Checkbox>
                {/* <input type="checkbox" name="" id="" /> */}
              </div>
              <div className="cart__navbar-item">
                <p className="cart__navbar-heading">Sản Phẩm</p>
              </div>
              <div className="cart__navbar-item">
                <p className="cart__navbar-heading">Đơn Giá</p>
              </div>
              <div className="cart__navbar-item">
                <p className="cart__navbar-heading">Số Lượng</p>
              </div>
              <div className="cart__navbar-item">
                <p className="cart__navbar-heading">Số Tiền</p>
              </div>
              <div className="cart__navbar-item">
                <p className="cart__navbar-heading">Thao Tác</p>
              </div>
            </div>
          </div>
          <div className="col c-12 m-12 l-12">
            <ul className="cartlist">
              {item?.length !== 0 ? (
                <CheckboxGroup
                  className="cartlist__checkbox"
                  value={checkedList}
                  onChange={onChange}
                >
                  {item}
                </CheckboxGroup>
              ) : (
                <EmptyCart />
              )}
            </ul>
          </div>
          <div className="col c-12 m-12 l-12">
            {item?.length === 0 ? (
              ''
            ) : (
              <div className="cartpay">
                <div className="cartpay__action">
                  <p className="cartpay__action-total">
                    {`Tổng thanh toán (${checkedList.length} Sản phẩm): `}
                    <span className="txt__primary">₫{totalCart}</span>
                  </p>
                  <button
                    disabled={checkedList.length === 0}
                    className="btn btn-primary"
                    onClick={
                      checkedList.length === 0 ? warning : handleSubmitCart
                    }
                  >
                    Mua Hàng
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartTable;
