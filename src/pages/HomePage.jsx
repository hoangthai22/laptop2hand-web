import React, { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import HotProduct from "../components/Content/Home/HotProduct/HotProduct";
import ListCategory from "../components/Content/Home/ListCategory/ListCategory";
import Policy from "../components/Content/Home/Policy/Policy";
import Sliders from "../components/Content/Home/Slider/Slider";
import { HOME_PAGE } from "../constants/Pages";
import { AppContext } from "../contexts/AppProvider";
import "./main.scss";

function HomePage(props) {
  const {  setCurrentPage } = useContext(AppContext);
  useEffect(() => {
    props.callbackFunc(HOME_PAGE);
    setCurrentPage(HOME_PAGE);
  });

  return (
    <div>
      <div className="content">
        <Sliders />
        <ListCategory />
        {/* <HelpMeChoose /> */}
        <Policy />
        <HotProduct />
      </div>
    </div>
  );
}

export default HomePage;
