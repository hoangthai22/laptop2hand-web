import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getProduct } from "../apis/apiCaller";
import HotProduct from "../components/Content/Home/HotProduct/HotProduct";
import ProductDetail from "../components/Content/Products/ProductDetail/ProductDetail";
import ProductInfo from "../components/Content/Products/ProductInfo/ProductInfo";
import { PRODUCT_DETAIL } from "../constants/Pages";
import { AppContext } from "../contexts/AppProvider";
import "./main.scss";

function ProductDetailPage(props) {
  const { setCurrentPage } = useContext(AppContext);
  const [product, setProduct] = useState({});
  const location = useLocation();

  useEffect(() => {
    props.callbackFunc(PRODUCT_DETAIL);
    setCurrentPage(PRODUCT_DETAIL);
  });

  useEffect(() => {
    let id = location?.pathname.split("_")[1];
    getProduct(id).then((res) => {
      res.data.listImgDetail = [res.data.productImg, ...res.data.listImgDetail];
      console.log(res.data);
      setProduct(res.data);
    });
  }, [location?.pathname]);

  const [imgCurrent, setImgCurrent] = useState("");

  const changeCurrentImg = (childData) => {
    setImgCurrent(childData);
  };

  return (
    <div className="product__detail__content">
      <div className="product__detail__container">
        <ProductDetail data={product} imgUrl={imgCurrent} />
        <ProductInfo data={product} callbackFunc={changeCurrentImg} />
      </div>
      {/* <HelpMeChoose /> */}
      <HotProduct isDetaiPage={true} />
    </div>
  );
}

export default ProductDetailPage;
