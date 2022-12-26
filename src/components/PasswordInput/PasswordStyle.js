import styled from "styled-components";

export const PasswordStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  input {
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    height: 40px;
    width: 656px;
    outline: none;
    margin-top: 4px;
    font-family: Montserrat !important;
    color: #cacaca;
    font-size: 14px;
    padding: 10px;
    box-sizing: border-box;
    &:focus {
      background-color: #fafafa;
    }
  }
  .IconContainer {
    position: absolute;
    top: 35px;
    cursor: pointer;
    right: 10px;
  }

  .valid {
    span {
      font-size: 12px;
      color: #07982f;
      font-weight: 500;
    }
    .ValidIcon {
      display: inline-block;
      width: 10px !important;
      flex: 0.015;
      height: 8px;
      margin-top: 6px;
      margin-right: 8px;
      border-radius: 50%;
      background-color: #07982f;
    }
  }

  .invalid {
    span {
      font-size: 12px;
    }
    .InvalidIcon {
      display: inline-block;
      width: 10px !important;
      flex: 0.015;
      height: 8px;
      margin-top: 6px;
      margin-right: 8px;
      border-radius: 50%;

      border: 1px solid #999b9f;
    }
  }
`;
