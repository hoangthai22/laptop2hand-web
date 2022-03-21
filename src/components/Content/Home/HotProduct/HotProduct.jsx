import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { productList } from "../../../../constants/DataMock";
import ProductItem from "../../Products/ProductItem/ProductItem";
import "./HotProduct.scss";

const HotProduct = (props) => {
  const { isDetaiPage } = props;

  const [products, setProducts] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 4000,
    className: "slider__container",
    lazyLoad: true,
    pauseOnFocus: true,
  };

  useEffect(() => {
    setProducts(productList);
  }, [products]);

  return (
    <div className="hot__product__wrapper">
      <div className="hot__product__title">
        <span className="hot__product__title__text">{isDetaiPage ? "Sản phẩm liên quan!" : "Sản phẩm phổ biến!"}</span>
      </div>
      <Slider {...settings}>
        {products.map((item) => {
          return <ProductItem isDetaiPage={isDetaiPage} data={item} key={item.id} />;
        })}
      </Slider>
    </div>
  );
};

export default HotProduct;
