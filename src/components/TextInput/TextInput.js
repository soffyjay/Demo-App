import React, { useState } from "react";
import { InputContainer } from "./TextInputStyle";

const TextInput = ({
  name,
  value,
  disabled,
  isEmail,
  handleChange,
  placeholder,
  width,
  errorMessage,
}) => {
  return (
    <InputContainer width={width}>
      <label htmlFor={name}>{name}</label>
      <input
        type={isEmail ? "email" : "text"}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
        disabled={disabled}
      />
      {errorMessage ? <small>{errorMessage}</small> : null}
    </InputContainer>
  );
};

export default TextInput;
