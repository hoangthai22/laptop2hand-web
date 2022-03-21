import React, { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import CartList from "../components/Cart/CartList/CartList";
import { CART_PAGE } from "../constants/Pages";
import { AppContext } from "../contexts/AppProvider";
import "./main.scss";

function CartPage(props) {
  const {  setCurrentPage } = useContext(AppContext);

 

  useEffect(() => {
    props.callbackFunc(CART_PAGE);
    setCurrentPage(CART_PAGE);
  });

  return (
    <div className="cart__content">
      <div className="cart__container">
        <CartList />
      </div>
    </div>
  );
}

export default CartPage;
