import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../contexts/AppProvider";
import "./HeaderBot.scss";

const HeaderBot = (props) => {
  const { categoryList } = useContext(AppContext);
  const history = useNavigate();

  const handleSubmitCategory = (id, slug, categoryName) => {
    history("/" + slug, { state: { id: id, categoryName: categoryName } });

  };

  return (
    <div className="header__bot__wrapper">
      <div className="header__bot__container">
        <ul className="header__bot__menuList">
          <li className="header__bot__item">
            <span className="header__bot__item__text category__menu">DANH MỤC SẢN PHẨM</span>
            <ul className="sub__menu__list">
              {categoryList.map((item) => {
                return (
                  <li key={item.id} className="sub__menu__category" onClick={() => handleSubmitCategory(item._id, item.slug, item.categoryName)}>
                    {item.categoryName}
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="header__bot__item">
            <span className="header__bot__item__text special">HELP ME CHOOSE</span>
          </li>
          <li className="header__bot__item">
            <span className="header__bot__item__text">kHUYẾN MÃI</span>
          </li>
          <li className="header__bot__item">
            <span className="header__bot__item__text">VỀ CHÚNG MÌNH</span>
          </li>
          <li className="header__bot__item">
            <span className="header__bot__item__text">CÂU HỎI THƯỞNG GẶP</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderBot;
