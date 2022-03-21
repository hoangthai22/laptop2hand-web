import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getListProductByCategory } from "../../../../apis/apiCaller";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.scss";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [curentCountPage, setcurentCountPage] = useState(1);
  const [totalPage, settotalPage] = useState(0);
  const [IsLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const slug = location?.pathname?.slice(1).split("/")[0];
    getListProductByCategory(slug, 1, 9).then((res) => {
      setProducts(res.data);
      setcurentCountPage(1);
      if (res.data[0]) {
        settotalPage(Math.ceil(res.data[0].count / 9));
      }
      setIsLoading(false);
    });
  }, [location]);

  const handleGotoTop = () => {
    window.scrollTo({ top: 0, left: 0});
  };
  const handleChangePage = (condition) => {
    handleGotoTop();
    if (condition === curentCountPage) return;
    setIsLoading(true);
    let count = curentCountPage;
    if (condition === "next") {
      setcurentCountPage(count + 1);
      count = count + 1;
    } else if (condition === "prev") {
      setcurentCountPage(count - 1);
      count = count - 1;
    } else {
      setcurentCountPage(condition);
      count = condition;
    }
    const slug = location?.pathname?.slice(1).split("/")[0];

    getListProductByCategory(slug, count, 9).then((res) => {
      setProducts(res.data);
      setcurentCountPage(count);
      settotalPage(Math.ceil(res.data[0].count / 9));
      setIsLoading(false);
    });
  };

  return (
    <div className="productList__wrapper">
      <>
        <div className="productList__container">
          {IsLoading ? (
            <div className="productList__loading">
              <FontAwesomeIcon className="fa-spin" icon={faSpinner} />
            </div>
          ) : (
            products?.map((item) => {
              return <ProductItem data={item} key={item.id} />;
            })
          )}
        </div>
        <div className="productList__paging" style={{ display: products.length === 0 ? "none" : "flex" }}>
          {(curentCountPage === totalPage && curentCountPage !== 1) || curentCountPage !== 1 ? (
            <button onClick={() => handleChangePage("prev")} className="productList__paging__btn">
              <span>{"❮"}</span>
            </button>
          ) : (
            <button className="btn__empty"></button>
          )}
          {[...Array(Math.ceil(products[0]?.count > 9 ? products[0]?.count / 9 : 0))].map((i, ind) => {
            return (
              <button key={ind} className={`productList__paging__btn ${curentCountPage === ind + 1 ? "active" : ""}`} onClick={() => handleChangePage(ind + 1)}>
                <span>{ind + 1}</span>
              </button>
            );
          })}
          {curentCountPage !== totalPage ? (
            <button onClick={() => handleChangePage("next")} className="productList__paging__btn">
              <span>{"❯"}</span>
            </button>
          ) : (
            <button className="btn__empty"></button>
          )}
        </div>
      </>
    </div>
  );
};

export default ProductList;
