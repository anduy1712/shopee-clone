import React from "react";
import { FaFacebook } from "react-icons/fa";
import {
  AiFillInstagram,
  AiOutlineBell,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar__left">
        <Link className="txt__small">Kênh Người Bán</Link>
        <Link className="txt__small">Trở Thành Người Bán</Link>
        <Link className="toolbar__block qr-code">
          <Link className="txt__small">Tải ứng dụng</Link>
          <Link className="qrcode-inner">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/d91264e165ed6facc6178994d5afae79.png"
              alt="qrshopee"
            />
            <div className="qrcode-store">
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/39f189e19764dab688d3850742f13718.png"
                alt="applestore"
              />
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f4f5426ce757aea491dce94201560583.png"
                alt="chplaystore"
              />
            </div>
          </Link>
        </Link>
        <div className="toolbar__block">
          <div className="txt__small">Kết Nối</div>
          <FaFacebook className="toolbar__block--fb" />
          <AiFillInstagram className="toolbar__block--ig" />
        </div>
      </div>
      <div className="toolbar__right">
        <Link className="toolbar__block">
          <AiOutlineBell className="toolbar__block--bell" />
          <div className="txt__small">Thông Báo</div>
        </Link>
        <Link className="toolbar__block">
          <AiOutlineQuestionCircle className="toolbar__block--question" />
          <div className="txt__small">Hỗ Trợ</div>
        </Link>
        <Link className="txt__small bold">Đăng Ký</Link>
        <Link className="txt__small bold">Đăng Nhập</Link>
      </div>
    </div>
  );
};

export default Toolbar;
