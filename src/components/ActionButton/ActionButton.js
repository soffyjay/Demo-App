import React from "react";
import { ActionStyle } from "./ActionStyle";
import ReactLoading from "react-loading";
const ActionButton = ({ text, handleClick, disabled, loading }) => {
  return (
    <ActionStyle disabled={disabled}>
      <button onClick={handleClick} disabled={disabled}>
        {text}
      </button>
      <div className="loading">
        {loading && (
          <ReactLoading
            type={"spin"}
            color={"#fff"}
            height={"30px"}
            width={"30px"}
          />
        )}
      </div>
    </ActionStyle>
  );
};

export default ActionButton;
