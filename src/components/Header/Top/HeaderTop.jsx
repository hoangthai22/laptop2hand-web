import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { LOCALSTORAGE_NAME } from "../../../constants/Pages";
import { AppContext } from "../../../contexts/AppProvider";
import { ReactComponent as IconSearch } from "./../../../assests/img/iconsearch.svg";
import "./../../../pages/main.scss";
import "./HeaderTop.scss";
const HeaderTop = (props) => {
  const { Cart, login } = useContext(AppContext);
  const [countCart, setcountCart] = useState(0);
  // const [user, setuser] = useState("");
  const history = useNavigate();

  useEffect(() => {
    setcountCart(Cart.length);

    // setuser(user);
  }, [Cart]);

  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME));

    setcountCart(carts?.length ? carts?.length : 0);
  }, []);
  const handeChageCartPage = () => {
    history("/cart");
  };
  return (
    <div className="header__top__wrapper">
      <div className="header__top__Logo"></div>
      <div className="header__top__content">
        <div className="header__top__content__search">
          <input className="header__top__content__search__input"></input>
          <IconSearch className="header__top__content__search__icon" />
        </div>
        <div className="header__top__content__cart">
          <FontAwesomeIcon icon={faCartPlus} style={{ marginRight: 5 }} />
          {/* <IconCart className="header__top__content__cart__icon" /> */}
          <span onClick={handeChageCartPage}>Giỏ hàng ({countCart})</span>
          <span onClick={() => history("/login")}>{login != null ? login : "Đăng nhập"}</span>
        </div>
      </div>
      <div className="header__top__content__Logo" onClick={() => history("/")}>
        <img alt="" src="https://mcdn.nhanh.vn/store/22767/logo_1638966470_logo%20chu%CC%9B%CC%83%20tra%CC%86%CC%81ng-04.png" className="logo" />
      </div>
    </div>
  );
};

export default HeaderTop;
