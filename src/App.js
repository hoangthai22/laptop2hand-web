import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { Suspense, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import GoTop from "./components/Content/Home/GoTop/GoTop";
import Footer from "./components/Footer/Footer";
import HeaderBot from "./components/Header/Bottom/HeaderBot";
import HeaderTop from "./components/Header/Top/HeaderTop";
import AppProvider from "./contexts/AppProvider";
import CartPage from "./pages/CartPage";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import HistoryPage from "./pages/History";
import HomePage from "./pages/HomePage";
import Login from "./pages/login";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  const [currentPageApp, setCurrentPageApp] = useState("");

  const changeCurrentPage = (childData) => {
    setCurrentPageApp(childData);
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "AQ3yFoGFt32R4WK0FpyACQaq8yqYsDtEO0UBs_x1_dWNREeodvVmdtvQXTPX1s8bBWP-IYHLBeM7X7s9" }}>
      <Suspense fallback={<div>Loading ...</div>}>
        <HashRouter>
          <AppProvider>
            <div className="header">
              <HeaderTop />
              <HeaderBot />
              {/* {currentPageApp !== HOME_PAGE && <CategoryStep />} */}
            </div>
            <Routes>
              <Route path="/" element={<HomePage callbackFunc={changeCurrentPage} />} />
              <Route path={`/:slug`} element={<CategoryDetailPage callbackFunc={changeCurrentPage} />} />
              <Route path={`/:slug/:slug`} element={<ProductDetailPage callbackFunc={changeCurrentPage} />} />
              <Route path={`/cart`} element={<CartPage callbackFunc={changeCurrentPage} />} />
              <Route path={`/history`} element={<HistoryPage callbackFunc={changeCurrentPage} />} />
              <Route path={`/login`} element={<Login />} />
            </Routes>
            <div className="footer">
              <Footer />
              <GoTop />
            </div>
          </AppProvider>
        </HashRouter>
      </Suspense>{" "}
    </PayPalScriptProvider>
  );
}

export default App;
