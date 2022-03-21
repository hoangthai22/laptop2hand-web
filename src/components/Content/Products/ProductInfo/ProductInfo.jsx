import { faCartPlus, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { caculatorSale, caculatorVND } from "../../../../constants/Caculator";
import { LOCALSTORAGE_NAME } from "../../../../constants/Pages";
import { AppContext } from "../../../../contexts/AppProvider";
import "./ProductInfo.scss";

const ProductInfo = (props) => {
  const { setCart } = useContext(AppContext);
  const { productName, price, size, totalSize, sale, _id, productImg, description } = props.data;
  const [indexActive, setIndexActive] = useState(0);
  const [colorActive, setColorActive] = useState("");
  const [countQuantity, setcountQuantity] = useState(1);
  const [sizeListCurrent, setSizeListCurrent] = useState([]);

  useEffect(() => {
    setSizeListCurrent(totalSize);
  }, [totalSize]);

  useEffect(() => {
    props.callbackFunc(size ? size[0]?.imgTitle : "");
  });

  const handleAddCart = () => {
    // let isValid = true;
    // if (indexActive <= 0) {
    //   isValid = false;
    //   setisValidForm(isValid);
    //   return;
    // }
    // if (colorActive <= 0) {
    //   isValid = false;
    //   setisValidForm(isValid);
    //   return;
    // }
    // if (isValid) {
    //   setisValidForm(isValid);
    //   AddCart();
    // }
    AddCart();
  };

  const history = useNavigate();
  const handleAddCartAndRedirect = () => {
    history("/cart");
    AddCart();
  };

  const AddCart = () => {
    let isQuantity = false;
    if (!JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME))) {
      localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify([]));
    }
    const CartList = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME));
    let newCarts = CartList?.map((item) => {
      if (item.id === _id) {
        item.quantity = item.quantity + countQuantity;
        isQuantity = true;
      }
      return item;
    });
    if (!isQuantity) {
      const carts = [
        ...CartList,
        {
          id: _id,
          quantity: countQuantity,
          price: price - (price * sale) / 100,
          color: colorActive,
          size: indexActive,
          name: productName,
          img: productImg,
        },
      ];
      setCart(carts);
      localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify([...carts]));
    } else {
      setCart([...newCarts]);
      localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify([...newCarts]));
    }
  };

  return (
    <div className="product__info__wrapper">
      <div className="product__info__container">
        <div className="shop_info_wrapper">
          <div>
            <img
              src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t45.5328-4/262031781_4284281518367284_6762987855934730256_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=c48759&_nc_ohc=xSDQHrhmxJoAX8-Ibfu&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT91Z51pqncRif7BTN9p43OK6THFWcqxvjbpCdx6ujcLjg&oe=62353408"
              alt=""
              className="shop_info_wrapper_img"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginLeft: 20, marginBottom: 10 }}>
            <span style={{ fontWeight: 500, fontSize: 20, marginBottom: 5 }}>Vi tính Dương Minh</span>
            <span style={{ fontWeight: 400, fontSize: 16, textDecoration: "underline" }}>Xem cửa hàng</span>
          </div>
        </div>
        <div className="shop_info_wrapper_bottom">
          <div className="shop_info_wrapper_bottom_column">
            <div style={{ marginBottom: 5, fontSize: 18 }}>
              <span>Của hàng</span>
            </div>
            <div>
              <img src="https://static.chotot.com/storage/chotot-icons/png/house.png" alt="" style={{ height: 30 }} />
            </div>
          </div>
          <div className="shop_info_wrapper_bottom_column">
            <div style={{ marginBottom: 10, fontSize: 18 }}>
              <span>Đánh giá</span>
            </div>
            <div>
              <img src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg" alt="" style={{ height: 20 }} />
              <img src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg" alt="" style={{ height: 20 }} />
              <img src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg" alt="" style={{ height: 20 }} />
              <img src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg" alt="" style={{ height: 20 }} />
              <img src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg" alt="" style={{ height: 20 }} />
            </div>
          </div>
          <div className="shop_info_wrapper_bottom_column">
            <div style={{ marginBottom: 10, fontSize: 18 }}>
              <span>Phản hồi chat</span>
            </div>
            <div>
              <span style={{ fontWeight: 500 }}>83%</span>
            </div>
          </div>
        </div>
        <div className="product__info__btn-phone">
          <button>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: 5 }} /> Liên hệ với cửa hàng
          </button>
        </div>
        <h1 className="product__info__title">{productName}</h1>
        <div className="product__info__price__wrapper">
          <span className="product__info__price__sale" style={{ display: sale > 0 ? "block" : "none" }}>
            {price != null ? caculatorVND(price) : 0}
          </span>
          <span className="product__info__price">{caculatorVND(caculatorSale(sale, price))}</span>
          <div className="product__info__price__sale__percent" style={{ display: sale > 0 ? "block" : "none" }}>
            <span>{sale}% Giảm</span>
          </div>
        </div>

        <div className="product_info_CPU">
          <div className="" style={{ marginRight: 90, marginBottom: 10, fontWeight: 500 }}>
            <span>CPU: </span>
          </div>
          <div className="">
            <span>Intel Core i5 6300U </span>
          </div>
        </div>
        <div className="product_info_CPU">
          <div className="" style={{ marginRight: 67, marginBottom: 10, fontWeight: 500 }}>
            <span>Ổ cứng: </span>
          </div>
          <div className="">
            <span>SSD 240GB </span>
          </div>
        </div>
        <div className="product_info_CPU">
          <div className="" style={{ marginRight: 84, marginBottom: 10, fontWeight: 500 }}>
            <span>RAM: </span>
          </div>
          <div className="">
            <span>RAM 8GB </span>
          </div>
        </div>
        <div className="product_info_CPU">
          <div className="" style={{ marginRight: 30, marginBottom: 10, fontWeight: 500 }}>
            <span>Card đồ họa: </span>
          </div>
          <div className="">
            <span>Card Intel HD Graphics </span>
          </div>
        </div>
        <div className="product_info_CPU">
          <div className="" style={{ marginRight: 50, marginBottom: 20, fontWeight: 500 }}>
            <span>Màn hình: </span>
          </div>
          <div className="">
            <span>14 Inch Full HD </span>
          </div>
        </div>
        <div className="">
          <div className="">
            <span>✅ Bảo hành 12 tháng, 1 đổi 1 trong vòng 15 ngày</span>
          </div>
        </div>
        <div className="" style={{ marginTop: 10 }}>
          <div className="">
            <span>{description}</span>
          </div>
        </div>

        {/* <div className="product__info__size__wrapper">
          <span className="product__info__size__title">Kích cỡ</span>
          <div className="product__info__size">
            {sizeListCurrent?.map((item) => {
              return (
                <button
                  onClick={() => handleChangeIndexSize(item.sizeName ? item.sizeName : item)}
                  className={`product__info__size__btn${(item.sizeName ? item.sizeName : item) === indexActive ? " active" : ""}`}
                  key={item.sizeName ? item.sizeName : item}
                  disabled={item.quantity === 0}
                >
                  {item.sizeName ? item.sizeName : item}
                </button>
              );
            })}
          </div>
        </div> */}
        {/* <div className="product__info__color__wrapper">
          <span className="product__info__size__title">
            Màu sắc: <span>{colorActive}</span>
          </span>
          <div className="product__info__color">
            {size?.map((item, ind) => {
              return (
                <img
                  alt="imgTitle"
                  src={item.imgTitle}
                  onClick={() => !compareSizeWithColor()[ind] && handleChangeColor(item.color)}
                  className={`product__info__color__btn ${!compareSizeWithColor()[ind] && (item.color === colorActive ? " active-btn-color" : "")} ${
                    compareSizeWithColor()[ind] ? "sold-btn-color" : ""
                  }`}
                  key={item.color}
                />
              );
            })}
          </div>
        </div> */}
        {/* <div className="product__info__quantity">
          <div>
            <span className="product__info__size__title">Số lượng</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 10, opacity: colorActive !== "" && indexActive > 0 ? 1 : 0.5 }}>
            <div className="product__info__quantity__wrapper">
              <FontAwesomeIcon
                className="product__info__quantity__btn"
                icon={faCaretLeft}
                onClick={() => {
                  colorActive !== "" && indexActive > 0 && countQuantity > 1 && setcountQuantity(countQuantity - 1);
                }}
              />
              <input
                className="product__info__quantity__input"
                name="quantity"
                type="number"
                disabled={colorActive !== "" && indexActive > 0 ? false : true}
                value={countQuantity}
                onChange={handleChange}
              />
              <FontAwesomeIcon className="product__info__quantity__btn" icon={faCaretRight} onClick={handleChangeQuantity} />
            </div>
            <div className="product__info__quantity__text">
              <span>{getCountQuantity()} sản phẩm có sẵn</span>
            </div>
          </div>
        </div> */}
        {/* <div className="product__info__error" style={{ display: isValidForm ? "none" : "block" }}>
          <span>Vui lòng chọn phân loại hàng</span>
        </div> */}
        <div className="product__info__btn-cart__wrapper">
          <button onClick={handleAddCart}>
            <FontAwesomeIcon icon={faCartPlus} style={{ marginRight: 5 }} /> Thêm Vào Giỏ Hàng
          </button>
          <button onClick={handleAddCartAndRedirect}>Mua Ngay</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
