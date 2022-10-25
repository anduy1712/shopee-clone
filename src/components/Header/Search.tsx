import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from 'src/assets/images/logo.svg';
import { FiShoppingCart } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import {
  cartsSelector,
  getCartByUser
} from 'src/store/reducers/cartsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import Column from '../Column';
import {
  usersSelector,
  initialStateUser
} from 'src/store/reducers/usersSlice';
import { FixMeLater } from 'src/constant/other';

const Search = () => {
  //Redux
  const dispatch = useDispatch();
  const history = useHistory();
  const { quantity, SearchTheme } = useSelector(cartsSelector);
  //Get user
  const { users, isSuccess }: initialStateUser = useSelector(usersSelector);
  //Sugget Item
  const item = [
    ' Váy',
    ' Bông Tẩy Trang',
    'Balo',
    'Dép Nữ',
    'Quần Dép',
    'Son',
    'Áo Phông'
  ];
  const sugget = item.map((item) => {
    return (
      <Link to="" key={item} className="search__suggest--item">
        {item}
      </Link>
    );
  });
  //On Submit
  const handleSubmitForm = (values: FixMeLater) => {
    history.push(`/search?q=${values.keyword}&_sort=id`);
  };
  //USE EFFECT
  useEffect(() => {
    // dispatch(amount());
    if (isSuccess) dispatch(getCartByUser(users._id));
  }, [users]);
  return (
    <section
      className={SearchTheme ? 'header-search s-white' : 'header-search '}
    >
      <div className="grid wide">
        <div className="row">
          <Column c={12} m={12} l={12}>
            <div className="search">
              <Link to="" className="search__logo">
                <Logo />
              </Link>
              <div className="search__wrapper">
                <Formik
                  initialValues={{
                    keyword: ''
                  }}
                  onSubmit={handleSubmitForm}
                >
                  <Form className="search__input">
                    <Field
                      id="keyword"
                      name="keyword"
                      type="text"
                      className="search__input--header"
                      placeholder="Sulwhasoo Quà đến 100 triệu"
                    />
                    <button className="search__input--submit" type="submit">
                      <BiSearch className="search__input--icon" />
                    </button>
                  </Form>
                </Formik>
                <div className="search__suggest">{sugget}</div>
              </div>
              <Link to="/cart" className="search__cart">
                <FiShoppingCart className="search__cart--icon" />
                <span className="search__cart-total">{quantity}</span>
              </Link>
            </div>
          </Column>
        </div>
      </div>
    </section>
  );
};

export default Search;
