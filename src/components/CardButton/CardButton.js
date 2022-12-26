import React from "react";
import { CardButtonStyle } from "./CardStyle";
import ReactLoading from "react-loading";

const CardButton = ({ text, primary, loading, handleClick, id }) => {
  return (
    <CardButtonStyle primary={primary}>
      <button onClick={handleClick}>
        {text}
        {loading === id ? (
          <div className="loading">
            <ReactLoading
              type={"spin"}
              color={"#fff"}
              height={"15px"}
              width={"15px"}
            />
          </div>
        ) : null}
      </button>
    </CardButtonStyle>
  );
};

export default CardButton;
