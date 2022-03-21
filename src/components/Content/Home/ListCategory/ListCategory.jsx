import "./ListCategory.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

const ListCategory = () => {
  const history = useNavigate();
  const handleRedirectCategory = () =>{
    history('/category/1')
  }
  return (
    <div className="listCategory__wrapper">
      <div className="listCategory__container">
        <div className="listCategory__item double">
          <div className="listCategory__item__wrapper" onClick={handleRedirectCategory}>
            <img className="listCategory__item__img" src="https://sieuthihangcu.com/wp-content/uploads/2020/06/4-laptop-gia-sock-moi-ngay.jpg" alt="" />
          </div>
        </div>
        <div className="listCategory__item">
          <div className="listCategory__item__wrapper">
            <img className="listCategory__item__img" src="https://i.ytimg.com/vi/UJ0NAZb5mNA/maxresdefault.jpg" alt="" />
          </div>
        </div>
        <div className="listCategory__item">
          <div className="listCategory__item__wrapper">
            <img className="listCategory__item__img" src="https://news.nganluong.vn/wp-content/uploads/tra-gop-0-la-gi-co-nen-tra-gop-0-hay-khong1.jpg" alt="" />
          </div>
        </div>
        <div className="listCategory__item">
          <div className="listCategory__item__wrapper">
            <img className="listCategory__item__img" src="https://laptop88.vn/media/product/pro_poster_6744.jpg" alt="" />
          </div>
        </div>
        <div className="listCategory__item">
          <div className="listCategory__item__wrapper">
            <img className="listCategory__item__img" src="https://laptop88.vn/media/product/pro_poster_6713.jpg" alt="" />
          </div>
        </div>
        <div className="listCategory__item">
          <div className="listCategory__item__wrapper">
            <img className="listCategory__item__img" src="https://laptop88.vn/media/product/pro_poster_4815.jpg" alt="" />
          </div>
        </div>
        <div className="listCategory__item half">
          <div className="listCategory__item__wrapper">
            <img alt="" src="https://cdn.mediamart.vn/images/banner/laptop-tr-gop-0_a2bb5d31.webp" className="listCategory__item__half__img"></img>
          </div>
          <div className="listCategory__item__wrapper">
            <img alt="" src="https://cdn.tgdd.vn/Files/2020/04/18/1249973/laptopcu_800x450_800x450.jpg" className="listCategory__item__half__img"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCategory;
