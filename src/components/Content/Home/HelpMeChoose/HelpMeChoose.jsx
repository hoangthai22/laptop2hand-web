import React from "react";
import "./HelpMeChoose.scss";

const HelpMeChoose = () => {
  return (
    <div className="help__choose__wrapper">
      <div className="help__choose__container">
        <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/22767/bn/2__7_.png" alt="" />
        <br />
        <span className="help__choose__text">
          Hãy cùng chúng mình đi tìm bộ tóc <br></br>phù hợp nhất cho bạn nha!^^{" "}
        </span>
        <div className="header__bot__item">
          <span className="header__bot__item__text special help__choose__text__special">HELP ME CHOOSE</span>
        </div>
      </div>
    </div>
  );
};

export default HelpMeChoose;
