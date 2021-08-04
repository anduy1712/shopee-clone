import React from "react";
import { FaFacebook } from "react-icons/fa";
import {
  AiFillInstagram,
  AiOutlineBell,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { FcVoicePresentation } from "react-icons/fc";

const Toolbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
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
          <Link to="" className="txt__small bold">
            <img
              className="txt__small-avatar"
              src="https://cf.shopee.vn/file/0163cd287487716180d96d276c3446d4_tn"
              alt=""
            />
            <p className="txt__small-txt">{user.email}</p>
          </Link>
        ) : (
          ""
        )}
        <Link to="" className={user ? "c-0 m-0 l-0" : "txt__small bold"}>
          Đăng Ký
        </Link>
        <Link to="/login" className={user ? "c-0 m-0 l-0" : "txt__small bold"}>
          Đăng Nhập
        </Link>
      </div>
    </div>
  );
};

export default Toolbar;
