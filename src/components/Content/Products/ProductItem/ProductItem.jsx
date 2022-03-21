import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { caculatorSale, caculatorVND } from "../../../../constants/Caculator";
import "./ProductItem.scss";

const ProductItem = (props) => {
  const { sale, productImg, productName, price, slug, id } = props.data;
  const { isDetaiPage } = props;

  const history = useNavigate();
  const location = useLocation();

  const handleProductDeatail = () => {
  
    if (location.pathname === "/" || isDetaiPage) {
      // history(`/ASUS/${slug}_${id}`, { state: { product: props.data } });
    } else {
      history(`${location.pathname}/${slug}_${id}`, { state: { product: props.data } });
    }
  };
  return (
    <div className={`hot__product__item ${(!isDetaiPage && location.pathname !== "/") && "product__item__detail"}`} onClick={handleProductDeatail}>
      <div className={`hot__product__item__wrapper ${(!isDetaiPage && location.pathname !== "/") && "product__item__wrapper__detail"}`}>
        <div className="hot__product__item__sale__icon" style={{ display: sale > 0 ? "block" : "none" }}>
          <span>{sale}%</span>
        </div>
        <img className={`hot__product__item__img ${(!isDetaiPage && location.pathname !== "/") && "product__item__img__detail"}`} src={productImg} alt="" />
        <span className="hot__product__item__text">{productName}</span>
        <div className="hot__product__item__text-price__wrapper">
          <span className="hot__product__item__text-price__sale" style={{ display: sale > 0 ? "block" : "none" }}>
            {price != null ? caculatorVND(price) : 0}
          </span>
          <span className="hot__product__item__text-price">{caculatorVND(caculatorSale(sale, price))}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
