import React from "react";
import { Link } from "react-router-dom";

const Sale = () => {
  return (
    <section className="flash-sale">
      <div className="grid wide">
        <div className="row">
          <div className="col c-12 m-12 l-12">
            <div className="flash-sale-list">
              <Link to="/" className="flash-sale-list__item">
                <img
                  src="https://cf.shopee.vn/file/1a0ef7bfd97b114f797e5a565788f0dc"
                  alt=""
                />
              </Link>
              <Link to="/" className="flash-sale-list__item">
                <img
                  src="https://cf.shopee.vn/file/f07bd5797b8d1e8f873a5148d9e91c13"
                  alt=""
                />
              </Link>
              <Link to="/" className="flash-sale-list__item">
                <img
                  src="https://cf.shopee.vn/file/0f3f39b8aec9fdf09963643b1bd7aacc"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sale;
