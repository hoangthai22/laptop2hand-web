import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PayPalButtons } from "@paypal/react-paypal-js";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { caculatorVND } from "../../../constants/Caculator";
import { LOCALSTORAGE_NAME } from "../../../constants/Pages";
import { AppContext } from "../../../contexts/AppProvider";
import "./CartList.scss";

const CartList = () => {
  const { Cart, setCart } = useContext(AppContext);
  const [listCart, setlistCart] = useState([]);
  const [paymentType, setpaymentType] = useState(0);
  const [total, setTotal] = useState(0);
  const amount = "2";
  const currency = "USD";
  const style = { layout: "vertical" };
  const history = useNavigate();
 
   
  useEffect(() => {
    const CartList = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME));
    var totalPrice = 0;
    console.log({ Cart });
    CartList.map((item) => {
      totalPrice = item.price + totalPrice;
    });
    setTotal(totalPrice);
    setlistCart(CartList);
  }, [Cart]);

  const handleRemoveCard = (_id) => {
    console.log(_id);
    const CartList = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME));
    const newCart = CartList.filter((item) => item.id !== _id);
    setCart([...newCart]);
    setlistCart([...newCart]);
    localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify([...newCart]));
  };
  const hanldePayment = (value) => {
    // console.log(value);
    setpaymentType(value);
    console.log(paymentType);
  };
  const hanldePaymentSubmit = () => {
    console.log();
    history('/history')
  };
  return (
    <div className="cart__wrapper">
      <div className="cart__container">
        <div>
          <h1 style={{ textAlign: "center" }}>Giỏ hàng</h1>
        </div>
        <div className="cart__title">
          <div className="cart__img">
            <span>Hình ảnh</span>
          </div>
          <div className="cart__name">
            <span>Tên sản phẩm</span>
          </div>
          <div className="cart__price">
            <span>Đơn giá</span>
          </div>
          <div className="cart__quantity">
            <span>Số lượng</span>
          </div>
          <div className="cart__total">
            <span>Tổng</span>
          </div>
          <div className="cart__delete">
            <span>Xóa</span>
          </div>
        </div>
        {listCart.length > 0 ? (
          listCart?.map((item) => {
            return (
              <div className="cart__item">
                <div className="cart__img">
                  <img src={item.img} alt="" />
                </div>
                <div className="cart__name">
                  <span>{item.name}</span>
                </div>
                <div className="cart__price">
                  <span>{caculatorVND(item.price)}</span>
                </div>
                <div className="cart__quantity">
                  <span>{1}</span>
                </div>
                <div className="cart__total">
                  <span>{caculatorVND(item.price)}</span>
                </div>
                <div className="cart__delete">
                  <FontAwesomeIcon onClick={() => handleRemoveCard(item.id)} icon={faTrashAlt} style={{ marginRight: 5 }} />
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: "center", marginTop: 30, fontWeight: 500, fontSize: "1.2rem" }}>Giỏ hàng hiện tại đang trống</div>
        )}
      </div>
      <div style={{ marginTop: 75, marginBottom: 50 }}>
        <h1 style={{ textAlign: "center" }}>Thanh toán</h1>
      </div>
      <div className="input__cart__wrapper">
        <div style={{ width: "50%" }}>
          <div>
            <span style={{ fontWeight: 500 }}>Họ và tên</span>
          </div>
          <div>
            <input type="text" value={"Võ Chí Công"} placeholder="Họ và tên" className="input__cart" />
          </div>
          <div>
            <span style={{ fontWeight: 500 }}>Địa chỉ</span>
          </div>
          <div>
            <input type="text" value={"290A Võ Văn Hát, Quận 9, TP HCM"} placeholder="Xin vui lòng nhập địa chỉ của bạn " className="input__cart" />
          </div>
          <div>
            <span style={{ fontWeight: 500 }}>Số điện thoại</span>
          </div>
          <div>
            <input type="text" value={"0938829912"} placeholder="Xin vui lòng nhập số điện thoại của bạn " className="input__cart" />
          </div>
          <div>
            <span style={{ fontWeight: 500 }}>Email</span>
          </div>
          <div>
            <input type="text" value={"Chicong@gmail.com"} placeholder="Xin vui lòng nhập Email của bạn " className="input__cart" />
          </div>
          <div>
            <span style={{ fontWeight: 500 }}>Ghi chú</span>
          </div>
          <div>
            <textarea shape="" coords="" className="input__cart" style={{ height: 70 }} href="" alt="" />
          </div>
        </div>
        <div style={{ width: "50%", marginLeft: 50, display: "flex", flexDirection: "column" }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 600, paddingBottom: 20 }}>
              <span>Hình thức thanh toán</span>
            </div>

            <PayPalButtons
              style={style}
              disabled={false}
              forceReRender={[amount, currency, style]}
              fundingSource={undefined}
              createOrder={(data, actions) => {
                return actions.order
                  .create({
                    purchase_units: [
                      {
                        amount: {
                          currency_code: currency,
                          value: total,
                        },
                      },
                    ],
                  })
                  .then((orderId) => {
                    // Your code here after create the order
                    console.log({ orderId });
                    return orderId;
                  });
              }}
              onApprove={function (data, actions) {
                return actions.order.capture().then(function () {
                  // Your code here after capture the order
                  console.log("thanh cong");
                  hanldePaymentSubmit()
                });
              }}
            />
            <div className="product__info__btn-cart__wrapper btn_payment" style={{ marginTop: 20 }}>
              <button style={{ width: "100%", fontSize: 20, fontWeight: 500, height: 50 }} onClick={hanldePaymentSubmit}>
                Thanh toán khi nhận hàng
              </button>
            </div>
          </div>
          <div style={{ borderBottom: "1px solid rgb(200, 200, 200)" }}></div>
          <div style={{ alignSelf: "end" }}>
            <div style={{ fontSize: 24, fontWeight: 600, paddingTop: 20 }}>
              <span>Chi tiết đơn hàng</span>
            </div>

            <div className="payment__cart">
              <span>Tổng tiền hàng</span>
              <span style={{ marginLeft: 50 }}>{caculatorVND(total)}</span>
            </div>
            <div className="payment__cart">
              <span>Phí vận chuyển</span>
              <span style={{ marginLeft: 50 }}>30.000 VND</span>
            </div>
            <div className="payment__cart">
              <span style={{ marginRight: 37 }}>Tổng cộng</span>
              <span style={{ marginLeft: 50, fontSize: 22, fontWeight: 600 }}>{caculatorVND(total + 30000)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
