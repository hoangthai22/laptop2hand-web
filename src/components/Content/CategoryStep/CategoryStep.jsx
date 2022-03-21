import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { Categorys } from "../../../constants/DataMock";
import { HOME_PAGE, CATEGORY_PAGE, PRODUCT_DETAIL, HISTORY_PAGE } from "../../../constants/Pages";
import { AppContext } from "../../../contexts/AppProvider";
import "./CategoryStep.scss";

const CategoryStep = (props) => {
  const { currentPage, setCurrentPage } = useContext(AppContext);
  const history = useNavigate();
  const location = useLocation();

  const handleRediret = (page) => {
    if (page === HOME_PAGE) history("/");
    else if (page === CATEGORY_PAGE) history(`/${location?.pathname?.slice(1).split("/")[0]}`);
  };

  useEffect(() => {
    setCurrentPage(HOME_PAGE);
  }, [location, setCurrentPage]);

  const getCategoryNameFromSlug = (slug) => {
    let slugString = Categorys.filter((item) => item.slug === slug)[0]?.categoryName;
    return slugString;
  };
  
  return (
    <div className="category__step__wrapper">
      <span onClick={() => handleRediret(HOME_PAGE)}>Home</span>
      <span>{currentPage == HISTORY_PAGE && "History"}</span>
      <span onClick={() => handleRediret(CATEGORY_PAGE)}>
        {(currentPage === PRODUCT_DETAIL && location?.pathname !== "/") || (currentPage === CATEGORY_PAGE && location?.pathname !== "/")
          ? getCategoryNameFromSlug(location?.pathname?.slice(1).split("/")[0])
          : ""}
      </span>
    </div>
  );
};

export default CategoryStep;
