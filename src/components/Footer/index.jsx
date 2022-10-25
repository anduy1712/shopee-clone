import React from "react";

const DATA_FOOTER = [
  {
    listTitle: "CHĂM SÓC KHÁCH HÀNG",
    items: ['Trung Tâm Trợ Giúp','Hướng Dẫn Mua Hàng','Hướng Dẫn Bán Hàng','Vận Chuyển']
  },
  {
    listTitle: "VỀ SHOPEE",
    items: ['Tuyển Dụng','Chính Sách Bảo Mật','Chính Hãng','Vận Chuyển']
  }
  ,
  {
    listTitle: "VỀ SHOPEE",
    items: ['Tuyển Dụng','Chính Sách Bảo Mật','Chính Hãng','Vận Chuyển']
  }
  ,
  {
    listTitle: "SHOPS",
    items: ['Living','Bedrom','Chính Hãng','Brand']
  }
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid wide">
        <div className="row">
          {DATA_FOOTER.map(itemFooter => {
            return <div className="col l-3 c-6">
                <div className="aboutus">
                  <h3 className="aboutus__title">{itemFooter.listTitle}</h3>
                  <ul className="aboutus__list">
                    {itemFooter.items.map(stringFooter => {
                      return <li className="aboutus__list-item">{stringFooter}</li>
                    })}
                  </ul>
                </div>
          </div>
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
