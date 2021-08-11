import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import {
  AiFillInstagram,
  AiOutlineBell,
  AiOutlineQuestionCircle
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FcVoicePresentation } from 'react-icons/fc';
import { useEffect } from 'react';
import { logoutUser, usersSelector } from '../../store/reducers/usersSlice';
import { useDispatch, useSelector } from 'react-redux';

const Toolbar = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  const { isSuccess } = useSelector(usersSelector);
  const logOut = () => {
    dispatch(logoutUser());
  };
  useEffect(() => {}, [user]);
  //ERROR
  return (
    <div className="toolbar">
      <div className="toolbar__left">
        <Link to="" className="txt__small">
          Kênh Người Bán
        </Link>
        <Link to="" className="txt__small">
          Trở Thành Người Bán
        </Link>
        <div to="" className="toolbar__block qr-code">
          <Link to="" className="txt__small">
            Tải ứng dụng
          </Link>
          <div to="" className="qrcode-inner">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/d91264e165ed6facc6178994d5afae79.png"
              alt="qrshopee"
            />
            <div className="qrcode-store">
              <Link to="">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/39f189e19764dab688d3850742f13718.png"
                  alt="applestore"
                />
              </Link>
              <Link to="">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f4f5426ce757aea491dce94201560583.png"
                  alt="chplaystore"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="toolbar__block">
          <div className="txt__small">Kết Nối</div>
          <FaFacebook className="toolbar__block--fb" />
          <AiFillInstagram className="toolbar__block--ig" />
        </div>
      </div>
      <div className="toolbar__right">
        <div className="notify">
          <AiOutlineBell className="notify__bell" />
          <p className="txt__small">Thông Báo</p>
          <div className="notify__block">
            <ul className="notify__list">
              <li className="notify__list-item">
                <FcVoicePresentation className="notify__list-item--icon" />
                <p className="notify__list-text">Đâng nhập để xem thông báo</p>
              </li>
              <li className="notify__list-btn">
                <button className="btn-notify">Đăng ký</button>
                <button className="btn-notify">Đăng nhập</button>
              </li>
            </ul>
          </div>
        </div>
        <Link to="" className="toolbar__block">
          <AiOutlineQuestionCircle className="toolbar__block--question" />
          <div className="txt__small">Hỗ Trợ</div>
        </Link>
        {user ? (
          <Link to="" className="user">
            <img className="txt__small-avatar" src={user[0].photoURL} alt="" />
            <p className="txt__small-txt">{user[0].email}</p>
            <div className="user-block">
              <Link to="/user" className="user-block__txt">
                Tài Khoản Của Tôi
              </Link>
              <p className="user-block__txt">Đơn Mua</p>
              <p className="user-block__txt" onClick={logOut}>
                Đăng Xuất
              </p>
            </div>
          </Link>
        ) : (
          ''
        )}
        <Link to="" className={user ? 'c-0 m-0 l-0' : 'txt__small bold'}>
          Đăng Ký
        </Link>
        <Link to="/login" className={user ? 'c-0 m-0 l-0' : 'txt__small bold'}>
          Đăng Nhập
        </Link>
      </div>
    </div>
  );
};

export default Toolbar;
