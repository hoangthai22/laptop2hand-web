import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppProvider";
import "./login.scss";

const Login = () => {
  const { setlogin, setislogin } = useContext(AppContext);
  const history = useNavigate();
  const submit = () => {
    setislogin(true);
    setlogin("Vochicong");
    localStorage.setItem("user", JSON.stringify("Vochicong"));
    history("/");
  };
  return (
    <div className="cart__content">
      <div
        className="cart__container"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="login" style={{ marginTop: 50 }}>
          <form>
            <h3>Đăng nhập</h3>

            <div className="form-group" style={{ marginTop: 20 }}>
              <label>Tên đăng nhập</label>
              <input type="email" className="form-control" placeholder="Enter email" style={{ marginTop: 10 }} />
            </div>

            <div className="form-group" style={{ marginTop: 20 }}>
              <label>Mặt khẩu</label>
              <input type="password" className="form-control" placeholder="Enter password" style={{ marginTop: 10 }} />
            </div>

            <div className="form-group" style={{ marginTop: 20 }}>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" style={{ marginRight: 10 }} />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" onClick={submit} className="btn btn-primary btn-block" style={{ marginTop: 10, width: "100%", backgroundColor: "RGB(255,120,2)" }}>
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
