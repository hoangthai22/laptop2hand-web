import React, { useEffect, useState } from "react";
import { getListCategory } from "../apis/apiCaller";
import { productList } from "../constants/DataMock";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("");
  const [listProducts, setlistProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [login, setlogin] = useState("");
  const [islogin, setislogin] = useState(false);
  const [Cart, setCart] = useState([]);

  useEffect(() => {
    getListCategory().then((res) => {
      setCategoryList(res.data);
    });
    setlistProducts(productList);
    const user = JSON.parse(localStorage.getItem("user"));

    setlogin(user);
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        listProducts,
        login,
        setlogin,
        setlistProducts,
        categoryList,
        islogin,
        setislogin,
        setCategoryList,
        Cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
