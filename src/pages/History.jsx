import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { caculatorVND } from "../constants/Caculator";
import { HISTORY_PAGE, LOCALSTORAGE_NAME } from "../constants/Pages";
import { AppContext } from "../contexts/AppProvider";
import "./history.scss";

function HistoryPage(props) {
  const { setCurrentPage } = useContext(AppContext);
  const { Cart } = useContext(AppContext);
  const [listCart, setlistCart] = useState([]);

  const [, setTotal] = useState(0);

  useEffect(() => {
    props.callbackFunc(HISTORY_PAGE);
    setCurrentPage(HISTORY_PAGE);
  });
  useEffect(() => {
    const CartList = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME));
    var totalPrice = 0;
    console.log({ Cart });
    // eslint-disable-next-line array-callback-return
    CartList.map((item) => {
      totalPrice = item.price + totalPrice;
    });
    setTotal(totalPrice);
    setlistCart(CartList);
  }, [Cart]);
  return (
    <div className="cart__content">
      <div className="cart__container">
        <div className="main_container" style={{ marginTop: 100 }}>
          <div class="container padding-bottom-3x mb-1">
            <div class="card mb-3">
              <div class="p-4 text-center text-white text-lg rounded-top" style={{ backgroundColor: "RGB(255,120,2)" }}>
                <span class="text-uppercase" style={{ fontSize: 20 }}>
                  Mã đơn hàng -{" "}
                </span>
                <span class="text-medium" style={{ fontSize: 18 }}>
                  001698653
                </span>
              </div>
              <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2">
                <div class="w-100 text-center py-1 px-2">
                  <span class="text-medium">Tên:</span> Võ Chí Công
                </div>
                <div class="w-100 text-center py-1 px-2">
                  <span class="text-medium">Địa chỉ:</span> 290, Võ Văn Hát, Quận 9, HCM
                </div>
                <div class="w-100 text-center py-1 px-2">
                  <span class="text-medium">Ngày nhận hàng dự kiến:</span> 04-27-2022
                </div>
              </div>
              <div class="card-body">
                <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                  <div class="step completed">
                    <div class="step-icon-wrap">
                      <div class="step-icon">
                        <i class="pe-7s-cart"></i>
                      </div>
                    </div>
                    <h4 class="step-title">Chờ xác nhận</h4>
                  </div>
                  <div class="step ">
                    <div class="step-icon-wrap">
                      <div class="step-icon">
                        <i class="pe-7s-more"></i>
                      </div>
                    </div>
                    <h4 class="step-title">Chờ lấy hàng</h4>
                  </div>
                  <div class="step ">
                    <div class="step-icon-wrap">
                      <div class="step-icon">
                        <i class="pe-7s-box2"></i>
                      </div>
                    </div>
                    <h4 class="step-title">Đã đến đơn vị vận chuyển</h4>
                  </div>
                  <div class="step">
                    <div class="step-icon-wrap">
                      <div class="step-icon">
                        <i class="pe-7s-car"></i>
                      </div>
                    </div>
                    <h4 class="step-title">Đang giao</h4>
                  </div>
                  <div class="step">
                    <div class="step-icon-wrap">
                      <div class="step-icon">
                        <i class="pe-7s-home"></i>
                      </div>
                    </div>
                    <h4 class="step-title">Đã nhận hàng</h4>
                  </div>
                </div>
              </div>
              <div className="cart__wrapper__history">
                <div className="cart__container">
                  <div className="cart__title">
                    <div className="cart__img">
                      <span>Hình ảnh</span>
                    </div>
                    <div className="cart__name">
                      <span>Tên sản phẩm</span>
                    </div>
                    <div className="cart__price">
                      <span></span>
                    </div>
                    <div className="cart__quantity">
                      <span>Số lượng</span>
                    </div>
                    <div className="cart__total">
                      <span>Tổng</span>
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
                          <div className="cart__price"></div>
                          <div className="cart__quantity">
                            <span>{1}</span>
                          </div>
                          <div className="cart__total">
                            <span>{caculatorVND(item.price)}</span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div style={{ textAlign: "center", marginTop: 30, fontWeight: 500, fontSize: "1.2rem" }}>Giỏ hàng hiện tại đang trống</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
