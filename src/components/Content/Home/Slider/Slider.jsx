import React, { useState } from "react";
import Slider from "react-slick";
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react/cjs/react.development";

const Sliders = (props) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    className: "slider__container",
    lazyLoad: true,
    pauseOnFocus: true,
  };
  useEffect(() => {
    
      document.querySelector(".slick-next").style.display = "none";
      document.querySelector(".slick-prev").style.display = "none";
   
  });

  return (
    <div className="slider__wrapper">
      <Slider {...settings}>
        <div className="slider__item">
          <img className="slider__img" src="https://laptop88.vn/media/banner/25_Jan76ffed430ea4f9c8551c0d0cb31bfd26.png" alt="" />
        </div>
        <div className="slider__item">
          <img className="slider__img" src="https://laptop88.vn/media/banner/25_Jancebc9a47d979cee621963ad4efef83a1.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
