import React, { useState } from "react";
import { PasswordEye } from "../../Icons";
import { PasswordStyle } from "./PasswordStyle";
import PasswordChecklist from "react-password-checklist";

const PasswordInput = ({ value, handleChange, setPasswordValid }) => {
  const [inputType, setInputType] = useState("password");

  const handleIconClick = () => {
    if (inputType === "text") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };

  return (
    <PasswordStyle>
      <label htmlFor="password">Password</label>
      <input
        type={inputType}
        placeholder="Type your password here"
        value={value}
        onChange={handleChange}
        required
      />
      <div className="IconContainer">
        <PasswordEye handleClick={handleIconClick} />
      </div>
      {window.location.href.includes("signup") ? (
        <PasswordChecklist
          rules={["minLength", "specialChar", "number", "capital"]}
          minLength={8}
          value={value}
          onChange={(isValid) => {
            if (isValid == true) {
              setPasswordValid(true);
            }
          }}
          iconComponents={{
            ValidIcon: <span className="ValidIcon"></span>,
            InvalidIcon: <span className="InvalidIcon"></span>,
          }}
          messages={{
            capital: "Contains at least one uppercase letter",
            minLength: "Contains eight characters",
            number: "Contains at least one number",
            specialChar: "Contains at least one symbol",
          }}
        />
      ) : null}
    </PasswordStyle>
  );
};

export default PasswordInput;
