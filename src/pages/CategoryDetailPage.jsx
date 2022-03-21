import React, { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import ListCategory from "../components/Content/Home/ListCategory/ListCategory";
import CategoryNav from "../components/Content/Products/CategoryNav/CategoryNav";
import ProductList from "../components/Content/Products/ProductList/ProductList";
import { CATEGORY_PAGE } from "../constants/Pages";
import { AppContext } from "../contexts/AppProvider";
import "./main.scss";

function CategoryDetailPage(props) {
  const { setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    props.callbackFunc(CATEGORY_PAGE);
    setCurrentPage(CATEGORY_PAGE);
  });

  return (
    <div className="category__detail__content">
      <div className="category__detail__container">
        <CategoryNav />
        <ProductList />
      
      </div>
      <ListCategory />
    </div>
  );
}

export default CategoryDetailPage;
