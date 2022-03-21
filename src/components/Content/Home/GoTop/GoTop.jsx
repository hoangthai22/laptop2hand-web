import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./GoTop.scss";
import { useEffect } from "react/cjs/react.development";

export const handleGotoTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const GoTop = () => {
  const [isGoToTop, SetIsGoToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.pageYOffset > 0) {
        SetIsGoToTop(true);
      } else {
        SetIsGoToTop(false);
      }
    });
  }, []);
  return (
    <div className="GoTop__wrapper" onClick={handleGotoTop} style={{ display: isGoToTop ? "" : "none" }}>
      <FontAwesomeIcon className="gotop__icon goto__visible" icon={faArrowUp} />
      <span className="gotop__icon">TOP</span>
    </div>
  );
};

export default GoTop;
