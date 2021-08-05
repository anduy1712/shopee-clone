import React from "react";
import Column from "./Column";
import { FcLikePlaceholder } from "react-icons/fc";

const Notfind = () => {
  return (
    <Column c={12} m={12} l={12}>
      <div className="find-item">
        <FcLikePlaceholder className="find-item__icon" />
        <h3 className="find-item__txt">Không Tìm Thấy Kết Quả</h3>
      </div>
    </Column>
  );
};

export default Notfind;
