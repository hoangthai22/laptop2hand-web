import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../../contexts/AppProvider";
import "./CategoryNav.scss";

const CategoryNav = (props) => {
  const { categoryList, setListProductsCurrent } = useContext(AppContext);
  const location = useLocation();
  const history = useNavigate();
  const [currentCategory, setCurrentCategory] = useState(location?.pathname?.slice(1));

  const handleSubmitCategory = (id, slug, categoryName) => {
    history("/" + slug, { state: { id, categoryName } });
    setCurrentCategory(slug);
  };

  return (
    <div className="category__nav__wrapper">
      <div className="category__nav__title">
        <span>Danh mục sản phẩm</span>
      </div>
      {categoryList.map((item) => {
        return (
          <div key={item._id} className={`category__nav__item ${currentCategory === item.slug && "active"}`} onClick={() => handleSubmitCategory(item._id, item.slug, item.categoryName)}>
            <span>{item.categoryName}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryNav;
