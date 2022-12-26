import styled from "styled-components";

export const Style = styled.div`
  background: #e5e5e5;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .Box {
    width: 720px;
    height: 450px;
    background-color: #fff;
    border: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    p {
      font-weight: 500;
      font-size: 20px;
      padding-top: 36px;
    }
    img {
      width: 100px;
      height: auto;
    }
    span {
      color: #004cbd;
      font-weight: 500;
      margin-top: 21px;
      cursor: pointer;
    }
  }
`;
